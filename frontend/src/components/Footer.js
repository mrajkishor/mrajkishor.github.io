import React from "react";

const Footer = () => {
    return (
        <footer className="footer">
            <p>
                Released under the <a href="https://opensource.org/licenses/MIT" target="_blank" rel="noopener noreferrer">MIT License</a>.
            </p>
            <div className="footer-links">

                <a href="https://github.com/mrajkishor/mrajkishor.github.io" target="_blank" rel="noopener noreferrer">
                    GitHub Repository
                </a>
                <a href="https://github.com/mrajkishor/mrajkishor.github.io/issues" target="_blank" rel="noopener noreferrer">
                    Report Issues
                </a>
                <a href="#/profile" target="_blank" rel="noopener noreferrer">
                    About Maintainer
                </a>
                <a href="mailto:mrajkishor331@gmail.com">Contact</a>
            </div>
        </footer>
    );
};

export default Footer;
