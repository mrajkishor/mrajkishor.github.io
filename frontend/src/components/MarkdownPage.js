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

// Preprocess Markdown to wrap ==highlight== in <mark>
const preprocessMarkdown = (content) => {
    return content
        // Step 1: Preserve code blocks by encoding them
        .replace(/(```[\s\S]*?```)/g, (match) => {
            return `CODEBLOCK_${btoa(match)}`;  // Encode code blocks to prevent unintended modifications. For Example, if a markdown has code block with if (x == 5 && y == 7), in that case the <mark></mark> syntax highlighter will confuse it with a text highlight. 
        })
        // Step 2: Replace ==highlight== with <mark> for text highlighting
        .replace(/==(.*?)==/g, "<mark>$1</mark>")
        // Step 3: Format blockquotes ("> text") and apply styling
        .replace(
            /^>(.*)$/gm,
            (match, p1) =>
                `<blockquote>${p1
                    .replace(/\[([^\]]+)\]\((https?:\/\/[^\s]+)\)/g, '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>')
                    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>")}</blockquote>`
        )
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
            return atob(encoded); // Restore original code blocks
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
        if (!wrapperRef?.current) return;

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
        <motion.div
            className="markdownWrapper"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.5 }}
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
            >
                {markdown ? (
                    <ReactMarkdown
                        remarkPlugins={[remarkGfm, remarkMath]}
                        rehypePlugins={[rehypeRaw, rehypeHighlight, rehypeKatex]}

                    >
                        {markdown}
                    </ReactMarkdown>
                ) : (
                    <div>
                        {breadcrumb && breadcrumb.length > 0 ?
                            <h2>Topics under {breadcrumb[breadcrumb.length - 1]?.name}</h2>

                            : <Skeleton count={1} />
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
                                : <Skeleton count={3} />}
                        </ul>
                    </div>
                )}
            </motion.div>

            <GoToTopButton visible={showGoToTop} onClick={scrollToTop} />
        </motion.div>
    );
};

export default MarkdownPage;
