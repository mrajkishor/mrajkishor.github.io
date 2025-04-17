import React from 'react';
import './index.css'; // CSS file for styling

const BottomNav = () => {
    return (
        <nav className="bottom-nav">
            <a href="/#" className="nav-item">
                <i className="material-icons">menu</i>
                <span>Menu</span>
            </a>
            {/* <a href="#" className="nav-item">
                <i className="material-icons">search</i>
                <span>Search</span>
            </a> */}
            {/* <a href="#" className="nav-item">
                <i className="material-icons">add_circle</i>
                <span>Create</span>
            </a> */}
            {/* <a href="#" className="nav-item">
                <i className="material-icons">notifications</i>
                <span>Alerts</span>
            </a> */}
            <a href="#/profile" className="nav-item">
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
