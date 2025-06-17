import React, { useState, useEffect, useRef } from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import mapper from "../commons/mapper";
import GlobalSearch from "./GlobalSearch";
import { isMobile } from "react-device-detect";

const Sidebar = ({ isOpen, setIsOpen }) => {
    const [collapsed, setCollapsed] = useState({});
    const location = useLocation();
    const activeRef = useRef(null); // Ref to track the active item
    const navigate = useNavigate(); // Hook to programmatically navigate

    // Initialize collapsed state based on the current path
    useEffect(() => {
        const initializeCollapsedState = (content, parentKey = "") => {
            const initialState = {};
            const expandAncestors = (path) => location.pathname.startsWith(path);

            Object.keys(content).forEach((key) => {
                if (!key.startsWith("_")) {
                    const currentKey = `${parentKey}/${key}`;
                    initialState[currentKey] = !expandAncestors(currentKey); // Collapse unless active or ancestor
                    if (typeof content[key] === "object") {
                        Object.assign(
                            initialState,
                            initializeCollapsedState(content[key], currentKey)
                        );
                    }
                }
            });
            return initialState;
        };

        setCollapsed(initializeCollapsedState(mapper.Contents));
    }, [location.pathname]); // Only reinitialize when the pathname changes

    // Scroll to the active item when the sidebar becomes visible
    useEffect(() => {
        if (isOpen && activeRef.current) {
            activeRef.current.scrollIntoView({
                behavior: "smooth",
                block: "center",
            });
        }
    }, [isOpen]);

    const isActive = (path) => location.pathname.startsWith(path);
    const isLinkActive = (path) => location.pathname === path;

    const toggleCollapse = (key) => {
        setCollapsed((prevState) => ({
            ...prevState,
            [key]: !prevState[key],
        }));
    };

    const renderNestedList = (content, basePath = "", parentKey = "") => {
        return (
            <ul className="sidebar-list">
                {Object.keys(content).map((key) => {
                    if (key.startsWith("_")) return null;

                    const currentKey = `${parentKey}/${key}`;
                    const currentPath = content[key]?.___urlPath___
                        ? `${basePath}/${content[key].___urlPath___}`
                        : `${basePath}/${key}`;

                    const isExpanded = !collapsed[currentKey];
                    const isCurrentActive = isLinkActive(currentPath);

                    if (typeof content[key] === "object" && !content[key]?.___md___) {
                        return (
                            <li
                                key={currentKey}
                                className={`sidebar-item ${isActive(currentPath) ? "active" : ""}`}
                            >
                                <div
                                    className="sidebar-title"
                                    onClick={() => toggleCollapse(currentKey)}
                                >
                                    <span className="sidebar-icon">
                                        {isExpanded ? "▼" : "▶"}
                                    </span>
                                    <span>{key}</span>
                                </div>
                                {isExpanded && (
                                    <div className="sidebar-nested">
                                        {renderNestedList(
                                            content[key],
                                            currentPath,
                                            currentKey
                                        )}
                                    </div>
                                )}
                            </li>
                        );
                    } else {
                        return (
                            <li
                                key={currentKey}
                                className={`sidebar-item ${isCurrentActive ? "active-link" : ""}`}
                                ref={isCurrentActive ? activeRef : null}
                            >
                                <Link
                                    to={currentPath}
                                    className="sidebar-link"
                                    onClick={() => setIsOpen(false)}
                                >
                                    {key}
                                </Link>
                            </li>
                        );
                    }
                })}
            </ul>
        );
    };

    return (
        <div key={isOpen} className={`sidebar-container ${isOpen ? "open" : ""}`}>
            <div className="sidebar-header">
                <p>CONTENTS</p>
                {/* <GlobalSearch setIsOpen={setIsOpen} /> */}
            </div>



            <div className="sidebar-content">
                {renderNestedList(mapper.Contents, `/${mapper.Contents.___urlPath___}`)}
            </div>
            {!isMobile && (<div
                style={{

                    bottom: 0,
                    margin: "0px 30px 10px 30px",
                    cursor: "pointer",
                    padding: "10px",
                    // backgroundColor: "#f5f5f5",
                    borderRadius: "5px",
                    textAlign: "center",
                    // boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)"
                }}
                onClick={() => {
                    navigate("/profile");
                    setIsOpen(false)
                }} // Close the sidebar when the link is clicked
            >
                <span
                    style={{
                        textDecoration: "none",
                        color: "#007bff",
                        fontWeight: "bold",
                        fontSize: "16px",
                    }}
                >
                    About Maintainer 👨‍💻
                </span>
            </div>)}

        </div>
    );
};

export default Sidebar;
