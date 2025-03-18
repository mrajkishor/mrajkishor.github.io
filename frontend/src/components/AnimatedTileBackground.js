import React, { useRef, useEffect, useState } from "react";
import "../assets/css/AnimatedTileBackground.css";

const AnimatedTileBackground = () => {
    const tilesRef = useRef([]); // Store tiles in a ref
    const [initialized, setInitialized] = useState(false); // Ensure tiles are only generated once

    useEffect(() => {
        if (!initialized) {
            const tileElements = [];
            for (let i = 0; i < 15; i++) {
                const size = Math.random() * 80 + 50; // Random size between 50px and 130px
                const top = Math.random() * 200; // Random top position
                const right = Math.random() * 200; // Random right position
                const shade = Math.floor(Math.random() * 100) + 150; // Random light blue shades

                tileElements.push(
                    <div
                        key={i}
                        className="tile-bg fade-in"
                        style={{
                            backgroundColor: `rgb(${shade}, ${shade + 10}, 255)`,
                            width: `${size}px`,
                            height: `${size}px`,
                            position: "absolute",
                            top: `${top}px`,
                            right: `${right}px`,
                            animationDelay: `${Math.random() * 3}s`, // Random animation delay
                        }}
                    ></div>
                );
            }
            tilesRef.current = tileElements; // Save tiles to the ref
            setInitialized(true); // Mark as initialized
        }
    }, [initialized]); // Runs only once

    return <div className="tiles-wrapper-bg">{tilesRef.current}</div>;
};

export default AnimatedTileBackground;
