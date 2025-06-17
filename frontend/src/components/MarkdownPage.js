import React, { useState, useEffect, useMemo } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw";
import rehypeHighlight from "rehype-highlight";
import remarkMath from "remark-math";
import rehypeKatex from "rehype-katex";
import "katex/dist/katex.min.css";
import "highlight.js/styles/atom-one-dark.css";
import { debounce } from "lodash";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";
import { motion } from "framer-motion";
import mapper from "../commons/mapper";
import NotFound from "./NotFound";
import { GoToTopButton } from "./GoToTopButton";
import Footer from "./Footer";
import rehypeSlug from "rehype-slug";
import { isMobile } from 'react-device-detect';


// Preprocess Markdown to wrap ==highlight== in <mark>
const preprocessMarkdown = (content) => {
    return content
        // Step 1: Preserve code blocks by encoding them
        .replace(/(```[\s\S]*?```)/g, (match) => {

            // ✅ Fix: Use encodeURIComponent() before btoa() to handle Unicode characters properly
            // ❌ Issue before fix: btoa("if (x == 5 && y == 7)") → Works ✅
            // ❌ Issue before fix: btoa("System.out.println('こんにちは')") → Error ❌ (Contains Japanese)
            // ✅ Fix: btoa(encodeURIComponent("System.out.println('こんにちは')")) → Encodes properly ✅

            return `CODEBLOCK_${btoa(encodeURIComponent(match))}`;  // Encode code blocks to prevent unintended modifications. For Example, if a markdown has code block with if (x == 5 && y == 7), in that case the <mark></mark> syntax highlighter will confuse it with a text highlight. 
        })
        // Step 2: Replace ==highlight== with <mark> for text highlighting
        .replace(/==(.*?)==/g, "<mark>$1</mark>")
        // Step 3: Format blockquotes ("> text") and apply styling

        // Old change : separated each line with >
        .replace(
            /^>(.*)$/gm,
            (match, p1) =>
                `<blockquote>${p1
                    .replace(/\[([^\]]+)\]\((https?:\/\/[^\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
                    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")}</blockquote>`
        )


        // New change : Consolidated use of lines with >
        // .replace(/^((?:>.*(?:\r?\n)?)+)/gm, (match) => {
        //     const content = match
        //         .split(/\r?\n/)
        //         .map(line => line.replace(/^>\s?/, '')) // remove `>` from each line
        //         .join("<br/>");

        //     return `<blockquote class="plain-blockquote">${content}</blockquote>`;
        // })




        // Step 4: Format image Markdown syntax (![alt text](image-path))
        .replace(/!\[([^\]]*?)\]\(([^)]+)\)/g, (_, altText, imagePath) => {
            const updatedPath = `markdowns/${imagePath}`;
            return `<div style="text-align: center;"><img src="${updatedPath}" alt="${altText}" style="max-width: 100%; border: solid thin #eaeaea; borderRadius: 10px; padding: 5px; " /></div>`;
        })
        // Step 5: Convert escaped LaTeX brackets \[math\] into $$math$$ (block equations)
        .replace(/\\\[(.*?)\\\]/gs, (_, mathContent) => `$$${mathContent}$$`)
        // Step 6: Convert escaped LaTeX parentheses \(math\) into $math$ (inline equations)
        .replace(/\\\((.*?)\\\)/g, (_, mathContent) => `$${mathContent}$`)

        // Step 7: Restore encoded code blocks to their original state
        .replace(/CODEBLOCK_([A-Za-z0-9+/=]+)/g, (_, encoded) => {
            // ✅ Fix: Use decodeURIComponent() after atob() to properly decode Unicode characters
            // ❌ Issue before fix: atob("U3lzdGVtLm91dC5wcmludGxsbihcdTAwYTUp") → Decodes incorrectly ❌
            // ✅ Fix: decodeURIComponent(atob("U3lzdGVtLm91dC5wcmludGxsbihcdTAwYTUp")) → Decodes properly ✅
            return decodeURIComponent(atob(encoded)); // Restore original code blocks
        });
};

const getFileNumberAndKey = (mapperObj, paths) => {
    let current = mapperObj;
    let matchedKey = null;

    for (const path of paths) {
        const decodedPath = decodeURIComponent(path);
        const foundKey = Object.keys(current).find((key) => {
            return (
                (current[key] &&
                    typeof current[key] === "object" &&
                    current[key].___urlPath___ === decodedPath) ||
                key === decodedPath
            );
        });

        if (foundKey) {
            matchedKey = foundKey;
            current = current[foundKey];
        } else {
            return { key: null, fileNumber: null, node: current };
        }
    }

    return {
        key: matchedKey,
        fileNumber: current?.___md___ || null,
        node: current,
    };
};

const formatBreadcrumbName = (segment) => {
    return segment
        .replace(/-/g, " ")
        .replace(/%20/g, " ")
        .replace(/\b\w/g, (char) => char.toUpperCase());
};

const MarkdownPage = ({ wrapperRef }) => {
    const [showGoToTop, setShowGoToTop] = useState(false);
    const navigate = useNavigate();
    const location = useLocation();
    const [markdown, setMarkdown] = useState("");
    const [pageTitle, setPageTitle] = useState("");
    const [breadcrumb, setBreadcrumb] = useState([]);
    const [childTopics, setChildTopics] = useState([]);
    const [error, setError] = useState(false);

    const paths = useMemo(() => location.pathname.split("/").filter((segment, index) => index > 1), [
        location.pathname,
    ]);

    useEffect(() => {
        const wrapper = wrapperRef?.current;
        // either wrap with if block below (intuitive way) or return here (bit odd). Note : Returning allowed in closure like useEffect
        if (!wrapper) return; // 👉 This gets the scrollable container where your markdown content is rendered.

        const handleAnchorClick = (e) => {
            const anchor = e.target.closest('a[href^="#"]'); // 👉 This listens for any click on an anchor (<a>) that links to an ID inside the page (starts with #).

            // 🖼 Example

            // <a href="#section">
            //   <span><strong>Click Me</strong></span>
            // </a>

            // If the user clicks on the <strong>, then:
            // e.target → <strong>
            // e.target.closest('a') → ✅ finds the <a> element


            if (anchor) {
                const id = decodeURIComponent(anchor.getAttribute('href').slice(1)); // remove "#" i.e. 👉 This extracts the id (like introduction) from the link href="#introduction".
                //const targetEl = wrapper.querySelector(`#${CSS.escape(id)}`); // 👉 This finds the element inside your scroll container that has the matching id.
                const targetEl = document.getElementById(id); // Use global document instead of wrapper

                if (targetEl) {
                    e.preventDefault();
                    // wrapper.scrollTo({
                    //     top: targetEl.offsetTop - 20, // adjust offset if needed
                    //     behavior: "smooth",
                    // });

                    // ✅ Scroll to the element smoothly
                    targetEl.scrollIntoView({ behavior: "smooth", block: "start" });


                }
            }
        };

        // wrapper.addEventListener("click", handleAnchorClick)
        document.addEventListener("click", handleAnchorClick);;
        return () => {
            // wrapper.removeEventListener("click", handleAnchorClick);
            document.removeEventListener("click", handleAnchorClick);

        };
        // }, [wrapperRef]);
    }, []);


    useEffect(() => {
        if (!wrapperRef?.current) return; // 👉 This gets the scrollable container where your markdown content is rendered.

        const handleScroll = debounce(() => {
            setShowGoToTop(wrapperRef.current.scrollTop > 300);
        }, 100);

        const parent = wrapperRef.current;
        parent.addEventListener("scroll", handleScroll);

        return () => {
            parent.removeEventListener("scroll", handleScroll);
            handleScroll.cancel();
        };
    }, [wrapperRef]);

    const scrollToTop = () => {
        if (wrapperRef?.current) {
            wrapperRef.current.scrollTo({ top: 0, behavior: "smooth" });
        }
    };

    useEffect(() => {
        const { key, fileNumber, node } = getFileNumberAndKey(mapper.Contents, paths);

        const breadcrumbTrail = paths.map((segment, index) => ({
            name: formatBreadcrumbName(decodeURIComponent(segment)),
            url: `/${paths.slice(0, index + 1).join("/")}`,
        }));

        setBreadcrumb(breadcrumbTrail);
        setPageTitle(key);

        if (fileNumber) {
            const fetchMarkdown = async () => {
                try {
                    const response = await fetch(`/markdowns/${fileNumber}.md`);
                    const contentType = response.headers.get("Content-Type");
                    if (!response.ok || !contentType || !contentType.includes("text/markdown")) {
                        throw new Error("Markdown file not found or invalid response");
                    }
                    const text = await response.text();
                    setMarkdown(preprocessMarkdown(text));
                } catch (error) {
                    console.error("Error loading Markdown file:", error);
                    setError(true);
                }
            };

            fetchMarkdown();
        } else {
            const topics = node
                ? Object.entries(node)
                    .filter(([key]) => key !== "___urlPath___" && key !== "___md___")
                    .map(([key, value]) => ({
                        name: key,
                        url: location.pathname + `/${value.___urlPath___ || key}`,
                    }))
                : [];
            setChildTopics(topics);
            setMarkdown("");
        }
    }, [paths]);

    if (error) {
        return <NotFound />;
    }

    return (
        <>
            <div className={isMobile ? "wooden-background-mb" : "wooden-background"}>
                <motion.div
                    className="markdownWrapper paper paper--alt"
                // initial={{ opacity: 0, y: 20 }}
                // animate={{ opacity: 1, y: 0 }}
                // exit={{ opacity: 0, y: -20 }}
                // transition={{ duration: 0.5 }}
                >
                    {/* Breadcrumb Navigation */}

                    <motion.nav
                        className="breadcrumb"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.3 }}
                        style={{
                            margin: "20px 0",
                            backgroundColor: "#f9f9f9",
                            padding: "10px",
                            borderRadius: "5px",
                            boxShadow: "0px 2px 5px rgba(0, 0, 0, 0.1)",
                            width: "100%",
                        }}
                    >
                        {breadcrumb.length > 0
                            ? breadcrumb.map((crumb, index) => (
                                <span key={crumb.url}>
                                    {index > 0 && " / "}
                                    {breadcrumb.length - 1 === index ? (
                                        <span style={{ color: "#333", fontWeight: "bold" }}>{crumb.name}</span>
                                    ) : (
                                        <Link
                                            to={`/contents${crumb.url}`}
                                            style={{
                                                textDecoration: "none",
                                                color: "#007bff",
                                                transition: "color 0.3s",
                                            }}
                                        >
                                            {crumb.name}
                                        </Link>
                                    )}
                                </span>
                            ))
                            : <Skeleton count={2} />}
                    </motion.nav>

                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 0.5 }}
                        className="hand-written-notes-style-wrapper"
                    >
                        {markdown ? (
                            <ReactMarkdown
                                remarkPlugins={[remarkGfm, remarkMath]}
                                rehypePlugins={[rehypeRaw, rehypeHighlight, rehypeKatex, rehypeSlug]}

                            >
                                {markdown}
                            </ReactMarkdown>
                        ) : (
                            <div>
                                {breadcrumb && breadcrumb.length > 0 ?
                                    <h2>Topics under {breadcrumb[breadcrumb.length - 1]?.name}</h2>

                                    : <Skeleton height={30} count={1} />
                                }

                                <ul>
                                    {childTopics.length > 0
                                        ? childTopics.map((topic) => (
                                            <li key={topic.url}>
                                                <Link to={topic.url} style={{ textDecoration: "none", color: "#007bff" }}>
                                                    {topic.name}
                                                </Link>
                                            </li>
                                        ))
                                        : <Skeleton count={100} />}
                                </ul>
                            </div>
                        )}

                    </motion.div>
                    <GoToTopButton visible={showGoToTop} onClick={scrollToTop} />

                </motion.div>
                <Footer />
            </div>
        </>
    );
};

export default MarkdownPage;
