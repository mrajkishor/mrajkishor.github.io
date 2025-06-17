import React from "react";

const NotFound = () => {
    return (
        <div style={{ textAlign: "center", marginTop: "50px" }}>
            <h1 style={{ color: "#dc3545", fontSize: "3rem" }}>404</h1>
            <p style={{ fontSize: "1.5rem" }}>The page you are looking for does not exist or the Markdown file was not found.</p>
            <a
                href="/"
                style={{
                    textDecoration: "none",
                    color: "#007bff",
                    fontSize: "1.2rem",
                    fontWeight: "bold",
                    cursor: "pointer",
                }}
            >
                Go Back to Home
            </a>
        </div>
    );
};

export default NotFound;
