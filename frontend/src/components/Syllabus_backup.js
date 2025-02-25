import React from "react";
import StackGrid from "react-stack-grid";
import mapper from "../commons/mapper";
import { parseMapper } from "../commons/utility";

const Syllabus = () => {

    const categories = parseMapper(mapper.Contents);

    return (
        <div style={{ fontFamily: "'Poppins', sans-serif" }}>
            <StackGrid
                columnWidth={300} // Width of each column
                gutterWidth={15} // Horizontal space between tiles
                gutterHeight={15} // Vertical space between tiles
            >
                {categories.map((category, index) => (
                    <div
                        key={index}
                        style={{
                            backgroundColor: "#fff",
                            borderRadius: "10px",
                            boxShadow: "0 5px 15px rgba(0, 0, 0, 0.1)",
                            padding: "20px",
                            transition: "transform 0.3s ease",
                            fontFamily: "'Poppins', sans-serif",
                        }}
                        onMouseEnter={(e) => {
                            e.currentTarget.style.transform = "scale(1.03)";
                        }}
                        onMouseLeave={(e) => {
                            e.currentTarget.style.transform = "scale(1)";
                        }}
                    >
                        <h2
                            style={{
                                fontSize: "1.5em",
                                color: "#007bff",
                                marginBottom: "10px",
                                borderBottom: "2px solid #ddd",
                                paddingBottom: "5px",
                                textAlign: "center",
                            }}
                        >
                            {category.title}
                        </h2>
                        <ul
                            style={{
                                listStyle: "none",
                                padding: 0,
                                margin: 0,
                                fontSize: "1em",
                                color: "#444",
                                lineHeight: "1.8",
                            }}
                        >
                            {category.items.map((item, idx) => (
                                <li
                                    key={idx}
                                    style={{
                                        marginBottom: "8px",
                                        padding: "5px",
                                        borderRadius: "5px",
                                        backgroundColor: "#f9f9f9",
                                        transition: "background-color 0.3s ease",
                                    }}
                                    onMouseEnter={(e) =>
                                        (e.currentTarget.style.backgroundColor = "#e6f2ff")
                                    }
                                    onMouseLeave={(e) =>
                                        (e.currentTarget.style.backgroundColor = "#f9f9f9")
                                    }
                                >
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </div>
                ))}
            </StackGrid>
        </div>
    );
};

export default Syllabus;
