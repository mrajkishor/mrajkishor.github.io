import React from "react";
import ReactDOM from "react-dom";

export const GoToTopButton = ({ visible, onClick }) => {

    return ReactDOM.createPortal(
        visible && (
            <button
                className="go-to-top-button"
                onClick={onClick}
                style={{
                    position: "fixed",
                    bottom: "20px",
                    right: "20px",
                    width: "50px",
                    height: "50px",
                    padding: "10px",
                    borderRadius: "50%",
                    backgroundColor: "#007bff",
                    color: "#fff",
                    border: "none",
                    cursor: "pointer",
                    boxShadow: "0 4px 6px rgba(0,0,0,0.1)",
                    zIndex: 109000,
                }}
            >
                ↑
            </button>
        ),
        document.body
    );
};
