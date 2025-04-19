import React, { useEffect, useRef, useState } from 'react';
import './index.css';

const BottomNav = ({ showSideBar, setShowSideBar }) => {
    const [activeTab, setActiveTab] = useState('home');

    const handleNavClick = (tab) => {
        setActiveTab(tab);
        setShowSideBar(false);
    };

    useEffect(() => {
        const url = window.location.href;
        if (url.includes('profile')) {
            setActiveTab('profile');
        } else {
            setActiveTab('home');
        }
    }, []);

    return (
        <nav className="bottom-nav">
            <a className="nav-item" onClick={() => setShowSideBar(prev => !prev)}>
                <i className="material-icons"> {showSideBar ? 'close' : 'menu'}</i>
                <span>{showSideBar ? 'Close' : 'Menu'}</span>
            </a>

            <a href="/#"
                className={`nav-item ${activeTab === 'home' ? 'active' : ''}`}
                onClick={() => handleNavClick('home')}>
                <i className="material-icons">home</i>
                <span>Home</span>
            </a>

            <a href="#/profile"
                className={`nav-item ${activeTab === 'profile' ? 'active' : ''}`}
                onClick={() => handleNavClick('profile')}>
                <i className="material-icons">person</i>
                <span>Profile</span>
            </a>

            <a href="https://github.com/mrajkishor/mrajkishor.github.io"
                className="nav-item" target="_blank" rel="noopener noreferrer">
                <i className="material-icons">info</i>
                <span>About</span>
            </a>
        </nav>
    );
};

export default BottomNav;
