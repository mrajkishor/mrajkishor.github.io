import React, { useState, useEffect, useMemo } from "react";
import ReactDOM from "react-dom";
import { Link } from "react-router-dom";
import { useLocation, useNavigate } from "react-router-dom";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import rehypeRaw from "rehype-raw"; // For raw HTML rendering
import rehypeHighlight from "rehype-highlight"; // For syntax highlighting
import remarkMath from "remark-math"; // For math support
import rehypeKatex from "rehype-katex"; // For rendering math equations
import "katex/dist/katex.min.css"; // KaTeX styles
import "highlight.js/styles/atom-one-dark.css"; // Dark syntax highlighting theme
import mapper from "../commons/mapper";
import NotFound from "./NotFound";
import { debounce } from 'lodash';
import { GoToTopButton } from "./GoToTopButton";


// Preprocess Markdown to wrap ==highlight== in <mark>
const preprocessMarkdown = (content) => {
    return content
        .replace(/==(.*?)==/g, "<mark>$1</mark>") // Highlight syntax
        .replace(
            /^>(.*)$/gm, // Match blockquotes
            (match, p1) =>
                `<blockquote>${p1
                    .replace(
                        /\[([^\]]+)\]\((https?:\/\/[^\s]+)\)/g, // Match links inside blockquotes
                        '<a href="$2" target="_blank" rel="noopener noreferrer">$1</a>'
                    )
                    .replace(/\*\*(.*?)\*\*/g, "<strong>$1</strong>") // Match bold text inside blockquotes
                }</blockquote>`
        )
        .replace(/!\[([^\]]*?)\]\(([^)]+)\)/g, (_, altText, imagePath) => {
            // Center the image and update the path
            const updatedPath = `markdowns/${imagePath}`;
            return `<div style="text-align: center;"><img src="${updatedPath}" alt="${altText}" style="max-width: 100%;" /></div>`;
        })
        .replace(/\\\[(.*?)\\\]/gs, (_, mathContent) => `$$${mathContent}$$`) // Convert \[...\] to $$...$$ for math support (block) 
        .replace(/\\\((.*?)\\\)/g, (_, mathContent) => `$${mathContent}$`); // Convert inline math \(...\) to $...$
    // inline means the math is in the same line as the text
    // Example 
    // - \( z \) is the linear combination of the input features: \( z = w_1x_1 + w_2x_2 + \dots + w_nx_n + b \), where \( w \) are weights, \( x \) are features, and \( b \) is the bias.
    ;
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
        .replace(/-/g, " ") // Replace hyphens with spaces
        .replace(/%20/g, " ") // Replace URL-encoded spaces
        .replace(/\b\w/g, (char) => char.toUpperCase()); // Capitalize the first letter of each word
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
    ]); // using useMemo to avoid re-rendering on location change. Since this will return true and infinite re-rendering will happen


    // Handle scroll to toggle button visibility
    useEffect(() => {
        if (!wrapperRef?.current) return; // Return if the ref is not set

        const handleScroll = debounce(() => {
            const scrollTop = wrapperRef.current.scrollTop;
            setShowGoToTop(scrollTop > 300); // Update state only when necessary
        }, 100); // Debounce interval of 100ms
        // while scrolling the handleScroll was called multiple times. So, debouncing is used to call the handleScroll only once in 100ms


        const parent = wrapperRef.current; // Get the parent element
        parent.addEventListener("scroll", handleScroll); // Add the scroll event listener

        return () => {
            parent.removeEventListener("scroll", handleScroll); // Remove the scroll event listener
            handleScroll.cancel(); // Cancel debounced calls on cleanup
        };
    }, [wrapperRef]); // Re-run the effect when the wrapperRef changes

    // Scroll to top functionality
    const scrollToTop = () => {
        if (wrapperRef?.current) {
            wrapperRef.current.scrollTo({
                top: 0,
                behavior: "smooth",
            });
        }
    };


    useEffect(() => {
        console.log("called useEffect"); // This will be called only once because of memoisation of paths using useMemo. Remove the useMemo from paths, and this will be called infinite times. The consequence of this is that the page will be stuck in an infinite loop of re-rendering and due to memory leak, the page will crash with message "Aw, Snap! Something went wrong while displaying this webpage."
        const { key, fileNumber, node } = getFileNumberAndKey(mapper.Contents, paths);

        // Set the breadcrumb based on paths
        const breadcrumbTrail = paths.map((segment, index) => {
            const url = `/${paths.slice(0, index + 1).join("/")}`;
            return {
                name: formatBreadcrumbName(decodeURIComponent(segment)),
                url,
            };
        });


        setBreadcrumb(breadcrumbTrail);

        setPageTitle(key);

        if (fileNumber) {
            // If ___md___ exists, fetch the Markdown file
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
            // Show child topics if no ___md___ is found
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
        <div className="markdownWrapper">
            {/* Breadcrumb Navigation */}
            <nav style={{
                margin: "20px 0", backgroundColor: "rgba(0,0,0,0.05)",
                padding: "10px", borderRadius: "5px",
                width: 'fit-content'
            }}>
                {breadcrumb.map((crumb, index) => (
                    <span key={crumb.url}>
                        {index > 0 && " / "}
                        {
                            (breadcrumb.length - 1 === index ?
                                <span style={{ textDecoration: "none", color: "#333" }}>
                                    {crumb.name}
                                </span> :
                                <Link
                                    to={`/contents${crumb.url}`} // Prepend "/contents" to ensure correct routing
                                    style={{ textDecoration: "none", color: "#007bff" }}>
                                    {crumb.name}
                                </Link>)
                        }

                    </span>
                ))}
            </nav>

            {markdown ? (<ReactMarkdown
                remarkPlugins={[remarkGfm, remarkMath]}
                rehypePlugins={[rehypeRaw, rehypeHighlight, rehypeKatex]}
            >

                {markdown}


            </ReactMarkdown>) : (<div>
                <h2>Topics under {breadcrumb[breadcrumb.length - 1]?.name || "Contents"}</h2>
                <ul>
                    {childTopics.map((topic) => (
                        <li key={topic.url}>
                            <Link to={topic.url} style={{ textDecoration: "none", color: "#007bff" }}>
                                {topic.name}
                            </Link>
                        </li>
                    ))}
                </ul>
            </div>)}

            {/* Go to Top Button */}
            {/* {showGoToTop && (
                <button
                    onClick={scrollToTop}
                    className="goToTopArrow"
                    aria-label="Go to top"
                >
                    ↑
                </button>
            )} */}

            {/* Portal for "Go to Top" Button */}
            {/* The parent element has transform, filter, or perspective styles applied. These properties create a new containing block, causing fixed elements to behave as if they are positioned relative to the parent instead of the viewport. 
            Used react portal to avoid this issue.
            Now the button will be fixed to the viewport instead of the parent element.
            */}
            <GoToTopButton visible={showGoToTop} onClick={scrollToTop} />

        </div>

    );
};

export default MarkdownPage;
