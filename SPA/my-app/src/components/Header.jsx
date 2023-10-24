import React, { useEffect, useState } from 'react';
import '../assets/css/Header.scss';
import { FaSuitcase, FaPhone, FaGithub, FaHandsHelping, FaQuora, FaStackOverflow, FaHome, FaCopy, FaInfo, FaMailchimp, FaLinkedin, FaInstagram, FaYoutube, FaDev } from 'react-icons/fa';
import {
    BrowserRouter as Router,
    Link,
    Route
} from "react-router-dom";
import Footer from './Footer';
import Raj from '../assets/image/raj.jpeg';
import Tilt from 'react-parallax-tilt';


function Header(props) {
    const [activeTabId, setActiveTabId] = useState();

    function handleClick() { // called on every click
        loadReducer();
    };

    useEffect(() => {// called on each page refresh
        loadReducer();
    }, []);

    function loadReducer() {
        switch (true) {
            case document.URL.includes("/blog"):
                setActiveTabId(3);
                break;
            case document.URL.includes("/portfolio"):
                setActiveTabId(2);
                break;
            case document.URL.includes(""):
                setActiveTabId(1);
                break;
            default:
                setActiveTabId(null);
        }
    }


    return (
        <>

            {props.vp === "d" &&
                <div className='Header'>
                    <Tilt>
                        <div>

                            <nav className='nav-panel'>
                                {/* <img src={Raj} className='profile-pc' /> */}

                                <li
                                    onClick={() => handleClick()}
                                    className={activeTabId === 1 ? 'active-btn' : ''}

                                ><FaInfo />{'\u00A0'}
                                    <Link to="/">  Profile</Link></li>
                                <li
                                    onClick={() => handleClick()}

                                    className={activeTabId === 3 ? 'active-btn' : ''}
                                ><FaCopy />{'\u00A0'}
                                    <Link to="/blog">  Blog</Link></li>
                                <li
                                    onClick={() => handleClick()}

                                    className={activeTabId === 2 ? 'active-btn' : ''}
                                ><FaSuitcase />{'\u00A0'}
                                    <Link to="/portfolio">  Portfolio</Link></li>
                                {/* <li><FaHandsHelping />{'\u00A0'}
                     <Link to="/contact">  Contact</Link></li> */}
                            </nav>

                        </div>

                    </Tilt>


                    <div>
                        {/* <div className='name headline'>
                    Rajkishor Maharana
                </div> */}
                        <div className='clear-line' />
                        <div className='phone headline'>
                            +91 - 7683922389 {'\u00A0'} <FaPhone />
                        </div>
                        <div className='clear-line' />
                        <div className='email headline'>
                            mrajkishor331@gmail.com{'\u00A0'}<FaMailchimp />
                        </div>
                        <div className='clear-line' />
                        {/* <div className='social headline'>
                            <a target="_blank" href='https://www.linkedin.com/in/mrajkishor331/'>
                                <FaLinkedin />
                            </a>
                            <a target="_blank" href='#!'>
                                <FaInstagram />
                            </a>
                            <a target="_blank" href='https://www.youtube.com/@gi_guru/'>
                                <FaYoutube />
                            </a>
                            <a target="_blank" href='https://stackoverflow.com/users/20229572/m-raj-kishor'>
                                <FaStackOverflow />
                            </a>
                            <a target="_blank" href='#!'>
                                <FaDev />
                            </a>
                        </div> */}
                    </div>


                    <Footer />



                </div>

            }

            {props.vp === "t" &&
                <>
                    <div className='Header-t'>

                        <div>
                            <nav className='nav-panel-t'>
                                <li>
                                    <Link to="/">  <FaInfo /></Link></li>
                                <li>
                                    <Link to="/blog">  <FaCopy /></Link></li>
                                <li>
                                    <Link to="/portfolio">  <FaSuitcase /></Link></li>

                            </nav>
                        </div>
                        <div>
                            <hr />

                            <div className='social-t headline'>


                                <a target="_blank" href="https://www.linkedin.com/in/rajkishor-maharana-b6916a254">
                                    <FaLinkedin />


                                </a>


                                <a target="_blank" href="https://www.youtube.com/@mrajkishor331">


                                    <FaYoutube />
                                </a>

                                <a target="_blank" href="https://www.quora.com/profile/Rajkishor-Maharana-4">
                                    <FaQuora />

                                </a>

                                <a target="_blank" href="https://www.quora.com/profile/Rajkishor-Maharana-4">
                                    <FaGithub />

                                </a>
                            </div>
                        </div>
                    </div>
                </>
            }

            {props.vp === "m" &&
                <>
                    <div className='Header-m'>

                        <div>
                            <nav className='nav-panel-m'>
                                <li onClick={() => handleClick()} className={activeTabId === 1 ? 'active-btn-m' : ''}>
                                    <Link to="/">  <FaInfo /></Link></li>
                                <li onClick={() => handleClick()} className={activeTabId === 3 ? 'active-btn-m' : ''} >
                                    <Link to="/blog">  <FaCopy /></Link></li>
                                <li onClick={() => handleClick()} className={activeTabId === 2 ? 'active-btn-m' : ''}>
                                    <Link to="/portfolio">  <FaSuitcase /></Link></li>

                            </nav>
                        </div>

                    </div>
                </>
            }
        </>

    );
}

export default Header;