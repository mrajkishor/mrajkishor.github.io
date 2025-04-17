import React, { useState } from 'react';
import './index.css'; // CSS file for styling

const BottomNav = ({ showSideBar, setShowSideBar }) => {

    const toggleSidebar = () => {
        setShowSideBar(prev => !prev);
    };

    return (
        <nav className="bottom-nav">

            {/* neon effect 

        https://css-tricks.com/how-to-create-neon-text-with-css/ */}

            <a className="nav-item" onClick={toggleSidebar}>
                <i className="material-icons"> {showSideBar ? 'close' : 'menu'}</i>
                <span>{showSideBar ? 'Close' : 'Menu'}</span>
            </a>
            <a href="/#" className="nav-item" onClick={() => setShowSideBar(false)}>
                <i className="material-icons">home</i>
                <span>Home</span>
            </a>
            {/* <a href="#" className="nav-item">
                <i className="material-icons">add_circle</i>
                <span>Create</span>
            </a> */}
            {/* <a href="#" className="nav-item">
                <i className="material-icons">notifications</i>
                <span>Alerts</span>
            </a> */}
            <a href="#/profile" className="nav-item" onClick={() => setShowSideBar(false)}>
                <i className="material-icons">person</i>
                <span>Profile</span>
            </a>

            <a href="https://github.com/mrajkishor/mrajkishor.github.io" className="nav-item">
                <i className="material-icons">info</i>
                <span>About</span>
            </a>
        </nav>
    );
};

export default BottomNav;
