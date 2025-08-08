import React, { useState, useEffect } from "react";
import mapper from "../commons/mapper"; // Import mapper.js
import { Link } from "react-router-dom";

const GlobalSearch = ({ setIsOpen }) => {
    const [query, setQuery] = useState("");
    const [searchResults, setSearchResults] = useState([]);
    const [loading, setLoading] = useState(false);

    // Fetch and search through markdown files dynamically
    const handleSearch = async (searchQuery) => {
        if (!searchQuery.trim()) {
            setSearchResults([]);
            return;
        }

        setLoading(true);
        const keywordList = searchQuery.toLowerCase().split(/\s+/); // Tokenize query into keywords
        const results = [];

        const count = 1000;

        for (let i = 1; i <= count; i++) { // Iterate through markdown files
            try {
                const response = await fetch(`/markdowns/${i}.md`);
                if (!response.ok) continue; // Skip if markdown file doesn't exist

                const text = (await response.text()).toLowerCase(); // ✅ Ensure text is awaited properly

                let matchCount = 0;
                let keywordMatches = {};

                // Count occurrences of each keyword
                keywordList.forEach(keyword => {
                    const occurrences = text.split(keyword).length - 1;
                    if (occurrences > 0) {
                        matchCount += occurrences;
                        keywordMatches[keyword] = occurrences;
                    }
                });

                if (matchCount > 0) {
                    const { title, link } = findMdLink(i); // Get title & link using mapper.js
                    if (link) {
                        results.push({ id: i, title, link, matchCount, keywordMatches });
                    }
                }
            } catch (error) {
                console.error(`Error fetching markdown file ${i}:`, error);
            }
        }

        // Sort results by the number of keyword matches (higher matches appear first)
        results.sort((a, b) => b.matchCount - a.matchCount);
        setSearchResults(results);
        setLoading(false);
    };

    // Find corresponding Title & URL for an MD file in mapper.js with proper hierarchy
    const findMdLink = (mdNumber) => {
        const traverseMapper = (node, path = [], titles = []) => {
            for (const key in node) {
                if (typeof node[key] === "object") {
                    const newPath = [...path, node[key].___urlPath___ || convertToUrl(key)];
                    const newTitles = [...titles, key];

                    if (node[key].___md___ === mdNumber) {
                        return {
                            title: newTitles.join(" > "), // Show full hierarchy as title
                            link: `/contents/${newPath.join("/")}`, // Generate full hierarchy path
                        };
                    }
                    const found = traverseMapper(node[key], newPath, newTitles);
                    if (found) return found;
                }
            }
            return null;
        };

        return traverseMapper(mapper.Contents) || { title: "Unknown Title", link: null };
    };

    // Convert text to a URL-friendly format if `___urlPath___` is missing
    const convertToUrl = (text) => {
        return text.toLowerCase().replace(/\s+/g, "-").replace(/[^\w-]/g, "");
    };

    return (
        <div style={{ position: "relative", margin: "80px 0 0 0", maxWidth: "400px" }}>
            <input
                type="text"
                placeholder="Search using keywords..."
                value={query}
                onChange={(e) => {
                    setQuery(e.target.value);
                    handleSearch(e.target.value);
                }}
                style={{
                    width: "100%",
                    padding: "8px",
                    border: "1px solid #ccc",
                    borderRadius: "5px"
                }}
            />
            {loading && <p>Searching...</p>}
            {searchResults.length > 0 && (
                <ul style={{ listStyle: "none" }}>
                    {searchResults.map((result) => (
                        <li key={result.id} style={{ padding: "10px 0", borderBottom: "1px solid #ddd" }}>
                            <Link to={result.link} style={{ textDecoration: "none", color: "#007bff", fontSize: "14px" }} onClick={() => setIsOpen(false)} // ✅ Close sidebar when search result is clicked
                            >
                                {result.title}
                            </Link>
                            <div style={{ marginTop: "5px" }}>
                                <div style={{ display: "flex", gap: "8px", marginTop: "5px", flexWrap: "wrap" }}>
                                    {Object.entries(result.keywordMatches).map(([word, count]) => (
                                        <span key={word} style={{
                                            background: "#f1f1f1",
                                            borderRadius: "12px",
                                            padding: "5px 10px",
                                            fontSize: "12px",
                                            fontWeight: "bold",
                                            color: "#333"
                                        }}>
                                            {word} ({count})
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </li>
                    ))}
                </ul>
            )}
        </div>
    );
};

export default GlobalSearch;
