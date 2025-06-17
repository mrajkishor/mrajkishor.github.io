import React, { useEffect, useRef, useState } from "react";
import { BrowserRouter as Router, Route, Routes, useNavigate, useLocation } from "react-router-dom";
import Sidebar from "./components/Sidebar";
import MarkdownPage from "./components/MarkdownPage";
import MyProfile from "./MyProfile/components/Profile";
import "./App.css"; // Adding an external stylesheet for the glass effect
import Syllabus from "./components/Syllabus";
import NotFound from "./components/NotFound";
import { initGA, logPageView } from './commons/analytics';
import AnimatedTileBackground from "./components/AnimatedTileBackground";
import slogans from './commons/slogans';
import GlobalSearch from "./components/GlobalSearch";
import BottomNav from "./components/mobile-vp/BottomNav";
import { isMobile } from 'react-device-detect';


const main_slogans = [
  "The Deeper You Dive, the More There Is.",
  "Boundless Knowledge. Relentless Curiosity.",
  "Depth Has No End in Tech.",
  "There Is No Shore. Just More to Learn.",
  "Infinite Learning. One Wave at a Time.",
  "You Don’t Reach the Bottom — You Become the Current.",
  "In Software, There’s Always Deeper Water.",
  "No Boundaries. Just Layers.",
  "The Ocean of Knowledge Never Settles.",
  "Satisfaction is a Myth. Keep Learning."
];


const App = () => {

  const [index, setIndex] = useState(0);


  const [showSideBar, setShowSideBar] = React.useState(false);
  const navigate = useNavigate(); // Hook to programmatically navigate
  const location = useLocation(); // Hook to get the current location
  const [count, setCount] = React.useState(0);
  const [slogan, setSlogan] = useState("The 🔑 to excellence");
  const [fade, setFade] = useState(true); // Control fade effect
  const [sloganIndex, setSloganIndex] = useState(Math.floor(Math.random() * slogans.length));
  const url = window.location.href;

  useEffect(() => {
    const intervalId = setInterval(() => {
      setIndex((prevIndex) => (prevIndex + 1) % main_slogans.length);
    }, 10000);

    return () => clearInterval(intervalId); // Cleanup on unmount
  }, []);


  // State for user details
  const [userDetails, setUserDetails] = useState({
    name: "",
    age: "",
    gender: "",
    location: null,
  });


  const mainRef = useRef(null);

  const handleLogoClick = () => {
    navigate("/"); // Navigate to the base location
    setShowSideBar(false); // Close the sidebar when clicking on the blurred background
    // window.location.hash = "#/"; // Set the hash part of the URL to redirect to the base location
    // window.location.reload();  // Reload the page to re-render components
  }


  // useEffect(() => {
  //   document.addEventListener("contextmenu", (e) => {
  //     e.preventDefault();
  //   });
  //   return () => {
  //     document.removeEventListener("contextmenu", (e) => {
  //       e.preventDefault();
  //     });
  //   };
  // }, []);

  // useEffect(() => {
  //   const disableShortcuts = (e) => {
  //     if (
  //       e.ctrlKey &&
  //       (e.key === "i" || e.key === "u" || e.key === "c" || e.key === "j")
  //     ) {
  //       e.preventDefault();
  //     }
  //     if (e.key === "F12") {
  //       e.preventDefault();
  //     }
  //   };

  //   document.addEventListener("keydown", disableShortcuts);
  //   return () => {
  //     document.removeEventListener("keydown", disableShortcuts);
  //   };
  // }, []);

  // const detectDevTools = () => {
  //   const devTools = /./;
  //   devTools.toString = () => {
  //     alert("Developer tools are open!");
  //   };
  //   console.log(devTools);
  // };

  // useEffect(() => {
  //   const warnUser = () => {
  //     console.clear();
  //     console.log("%cStop!", "color: red; font-size: 40px;");
  //     console.log(
  //       "This browser feature is intended for developers. If someone told you to paste something here, it could compromise your security."
  //     );
  //   };
  //   warnUser();
  // }, []);


  // useEffect(() => {
  //   detectDevTools();
  // }, []);

  useEffect(() => {




    const setIntv = setInterval(() => {
      setFade(false); // Start fade-out
      setTimeout(() => {
        setSlogan(slogans[sloganIndex]); // Set the current slogan
        // Move to the next slogan in a cycle
        setSloganIndex((prevIndex) => (prevIndex + 1) % slogans.length);
        setFade(true); // Start fade-in
      }, 1000); // Wait for fade-out to complete before changing text
    }, 10000); // 1000 ms (1 second)

    return () => clearInterval(setIntv); // Cleanup on unmount
  }, [sloganIndex]);

  useEffect(() => {
    initGA('G-02C5NDDDR0'); // Replace with your GA4 measurement ID
  }, []);

  useEffect(() => {
    logPageView(location.pathname + location.search);
  }, [location]);

  useEffect(() => {
    setCount(count + 1);
    if (mainRef.current) {
      mainRef.current.scrollTo(0, 0); // Scroll to the top of the profile container
    }
  }, [location.pathname]);
  return (
    <div key={count} style={{

      position: "fixed",
      top: 0,
      left: 0,
      right: 0,
      bottom: 0,


      display: "flex", height: "100vh", overflow: "hidden", fontFamily: "Arial, sans-serif", color: "#333"
    }}>



      {/* <AnimatedTileBackground /> */}

      {!isMobile && (
        <>

          {/* Neon style ref : https://css-tricks.com/how-to-create-neon-text-with-css/ */}

          {!url.includes("contents") ? <div class="logo-container" onClick={handleLogoClick}>
            <h1 class="neon-title flicker">O.C.E.A.N.</h1>
            {/* <p class="neon-slogan flicker-slow">Illuminate your thoughts.</p> */}
            <p class="neon-slogan flicker-slow" >

              {main_slogans[index]}
            </p>


          </div> :


            <div
              className="logo-wrapper"
              onClick={handleLogoClick}
              style={{ cursor: "pointer" }}
            >
              <div className="sidebar-logo">
                {/* My<span className="logo-highlight">N😁tes</span> */}
                My<span className="logo-highlight">N😁tes</span>
              </div>

              <div className="sidebar-slogan">

                <div style={{
                  opacity: fade ? 1 : 0,
                  transition: "opacity 0.5s ease-in-out"
                }}>
                  {slogan}
                </div>

              </div>



              {/* <div class="tagline">Organized Compendium for Efficient & Advanced Notetaking</div> */}

            </div>


          }


          {/* <div
            className="logo-wrapper"
            onClick={handleLogoClick}
            style={{ cursor: "pointer" }}
          >
            <div className="sidebar-logo">
              My<span className="logo-highlight">N😁tes</span>
            </div>
            <div className="sidebar-slogan">

              <div style={{
                opacity: fade ? 1 : 0,
                transition: "opacity 0.5s ease-in-out"
              }}>
                {slogan}
              </div>

            </div>
          </div> */}
        </>
      )}


      {/* Add logo and menu here */}
      {/* Toggle Button */}
      {!isMobile && (<div
        className={!url.includes("contents") && "pleaseGlowMe"}
        style={{



          cursor: "pointer",
          position: 'fixed',
          top: '10px',
          left: '10px',
          fontWeight: 'bold',
          // backgroundColor: showSideBar ? "#dc3545" : "#007bff", // Red for close, blue for open
          // color: "#fff",
          color: showSideBar ? "#fff" : "#fff",
          textAlign: "center",
          borderRadius: '5px',
          // boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
          // textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
          padding: '5px',
          // transition: 'box-shadow 0.3s ease, transform 0.3s ease, background-color 0.3s ease',
          zIndex: 1000,
        }}
        onClick={() => setShowSideBar(!showSideBar)}
        onMouseEnter={(e) => {
          // e.currentTarget.style.boxShadow = '0 8px 20px rgba(0, 0, 0, 0.5)';
          // e.currentTarget.style.transform = 'scale(1.05)';
        }}
        onMouseLeave={(e) => {
          // e.currentTarget.style.boxShadow = '0 4px 10px rgba(0, 0, 0, 0.3)';
          // e.currentTarget.style.transform = 'scale(1)';
        }}
      >
        <div style={{
          padding: "10px",
          fontSize: "x-large",

          // background: "white",
          borderRadius: "10px"
          /* margin-right: 16px; */
          // textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3), 0px 0px 15px rgba(0, 123, 255, 0.7)"
        }}>
          {showSideBar ? "✖" : "☰"}
        </div>
      </div>)
      }

      {/* Sidebar */}
      <div className={`overlayWrapper ${showSideBar ? "show" : "hide"}`}
        onClick={(e) => {
          if (e.target.classList.contains("overlayWrapper")) {
            setShowSideBar(false); // Close the sidebar when clicking on the blurred background
          }
        }}

      >
        <Sidebar isOpen={showSideBar} setIsOpen={setShowSideBar} />
      </div>




      {/* Main Content */}
      <div
        ref={mainRef}
        className="main-content-wrapper"
      >

        <Routes>
          <Route path="/profile" element={<MyProfile />} />
          <Route path="/contents/*" element={<MarkdownPage wrapperRef={mainRef} key={location.pathname} />} />
          <Route
            path="/"
            element={
              <div style={{ margin: "0 auto" }}>
                {/* <h1 style={{ color: "#007bff", textAlign: "center" }}>Full Stack Developers' Manual</h1> */}
                {/* <p style={{ fontSize: "1.2em", lineHeight: "1.6" }}>
                  Welcome to the Full Stack Developers' Manual! This guide is your one-stop resource for excelling in full-stack development. It covers everything you need, from front-end and back-end development to DevOps, databases, operating systems, computer networks, and software engineering.
                </p> */}

                {/* <h2 style={{ color: "#555", borderBottom: "2px solid #007bff", paddingBottom: "5px", "marginTop": "50px" }}>Full Stack Developer Course Syllabus 2024</h2> */}

                <Syllabus />

                {/* Core Concepts Section */}
                {/* <div style={{ marginBottom: "20px" }}>
                    <h3 style={{ color: "#007bff" }}>1. Programming in Java</h3>
                    <ul style={{ paddingLeft: "20px", fontSize: "1.1em", lineHeight: "1.8" }}>
                      <li>
                        <strong>Object-Oriented Programming (OOP):</strong>
                        <ul style={{ paddingLeft: "20px" }}>
                          <li>Classes</li>
                          <li>Objects</li>
                          <li>Inheritance</li>
                          <li>Polymorphism</li>
                          <li>Abstraction</li>
                          <li>Encapsulation</li>
                        </ul>
                      </li>
                      <li>
                        <strong>Java Basics:</strong>
                        <ul style={{ paddingLeft: "20px" }}>
                          <li>Syntax</li>
                          <li>Data Types</li>
                          <li>Variables</li>
                          <li>Operators</li>
                          <li>Control Statements (if-else, switch, loops)</li>
                        </ul>
                      </li>
                    </ul>
                  </div> */}


                {/* <div className="footer">
                  <p style={{ fontSize: "1.1em", color: "#666" }}>
                    <p style={{
                      fontSize: "1.1em", color: "#555", marginTop: "20px", padding: "10px",

                      // borderLeft: "4px solid #007bff", 

                      backgroundColor: "#f9f9f9"
                    }}>
                      <strong style={{ color: "#007bff" }}>A Quick Note:</strong> This syllabus represents a glimpse of the complete content. We are committed to updating and expanding it every week to ensure you have the latest and most comprehensive material.
                    </p>

                    <p>
                      Your feedback is highly appreciated. Feel free to ping me at{" "}
                      <a href="mailto:quickroutes@gmail.com" style={{ textDecoration: "none", color: "#007bff", fontWeight: "bold" }}>
                        quickroutes@gmail.com
                      </a>{" "}
                      or{" "}
                      <a href="mailto:mrajkishor@gmail.com" style={{ textDecoration: "none", color: "#007bff", fontWeight: "bold" }}>
                        mrajkishor@gmail.com
                      </a>.
                    </p>
                  </p>

                  <p style={{ fontSize: "1.1em", color: "#333" }}>
                    <strong>Content Owner:</strong>{" "}
                    <a href="/#profile" style={{ textDecoration: "none", color: "#007bff", fontWeight: "bold" }}>
                      Raj Kishor Maharana
                    </a>
                    , Full Stack Developer
                  </p>
                  <hr />
                  Copyright © 2024 | All Rights Reserved


                </div> */}
              </div>
            }
          />
          <Route path="*" element={<NotFound />} /> {/* Catch-All Route */}

        </Routes>


      </div>
      {isMobile && (<BottomNav showSideBar={showSideBar} setShowSideBar={setShowSideBar} />)}


    </div >
  );
};

export default App;
