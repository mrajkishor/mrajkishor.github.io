import React from "react";
import { Link } from "react-router-dom";

export const Breadcrumb = ({ breadcrumb }) => {
    if (!breadcrumb || breadcrumb.length === 0) return null;

    return (
        <nav
            style={{
                margin: "20px 0",
                backgroundColor: "rgba(0,0,0,0.05)",
                padding: "10px",
                borderRadius: "5px",
                width: "fit-content",
            }}
        >
            {breadcrumb.map((crumb, index) => (
                <span key={crumb.url}>
                    {index > 0 && " / "}
                    {breadcrumb.length - 1 === index ? (
                        <span style={{ textDecoration: "none", color: "#333" }}>
                            {crumb.name}
                        </span>
                    ) : (
                        <Link
                            to={`/contents${crumb.url}`} // Prepend "/contents" for routing
                            style={{ textDecoration: "none", color: "#007bff" }}
                        >
                            {crumb.name}
                        </Link>
                    )}
                </span>
            ))}
        </nav>
    );
};
