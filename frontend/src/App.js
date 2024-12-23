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

const App = () => {
  const [showSideBar, setShowSideBar] = React.useState(false);
  const navigate = useNavigate(); // Hook to programmatically navigate
  const location = useLocation(); // Hook to get the current location
  const [count, setCount] = React.useState(0);


  // State for user details
  const [userDetails, setUserDetails] = useState({
    name: "",
    age: "",
    gender: "",
    location: null,
  });

  const [locationAccessError, setLocationAccessError] = useState("");
  const [showForm, setShowForm] = useState(true); // State to control form visibility
  const [sending, setSending] = useState(false); // State to control form submission

  const mainRef = useRef(null);

  const handleLogoClick = () => {
    navigate("/"); // Navigate to the base location
    // window.location.hash = "#/"; // Set the hash part of the URL to redirect to the base location
    // window.location.reload();  // Reload the page to re-render components
  }


  const handleGeolocation = () => {
    if (navigator.geolocation) {
      navigator.geolocation.getCurrentPosition(
        (position) => {
          setUserDetails((prevDetails) => ({
            ...prevDetails,
            location: {
              latitude: position.coords.latitude,
              longitude: position.coords.longitude,
            },
          }));
        },
        (error) => {
          setLocationAccessError("Geolocation access denied. Please allow access to proceed.");
        }
      );
    } else {
      setLocationAccessError("Geolocation is not supported by your browser.");
    }
  };

  const handleSubmit = async () => {
    setSending(true);

    if (!userDetails.name || !userDetails.age || !userDetails.gender || !userDetails.location) {
      alert("Please fill out all details and allow geolocation access.");
      return;
    }

    const data = {
      name: userDetails.name,
      age: userDetails.age,
      gender: userDetails.gender,
      latitude: userDetails.location.latitude,
      longitude: userDetails.location.longitude,
    };

    // sheet location : https://docs.google.com/spreadsheets/d/13SquWKpeb_BF-jaPjJS3gIheGa53f1h9nz8V9fHbmaA/edit?gid=0#gid=0
    // sheet script : https://script.google.com/u/0/home/projects/1GAXSQWILwNB7kos126AxdIZst2pU_xMmj5uLGcj1NOCKlm938tyFRGbc/edit

    try {
      const response = await fetch("https://script.google.com/macros/s/AKfycbznivO73Lv4RLwFmu7FNdawImKI5Tcbb_S0Rk5EQmZot9JPxezBcUa_fW-EP-yTnmOx/exec", {
        redirect: "follow",
        method: "POST",
        body: JSON.stringify(data),
        headers: {
          "Content-Type": "text/plain;charset=utf-8",
        },
      });
      const result = await response.json();
      console.log(">>>", result);
      if (result.status === "success") {
        //alert("Details saved successfully!");
        setShowForm(false); // Hide the form after successful submission
        setSending(false)
      } else {
        alert("Failed to save details.");
      }
    } catch (error) {
      console.error("Error:", error);
      // alert("Error submitting data.");
    }
  };

  useEffect(() => {
    document.addEventListener("contextmenu", (e) => {
      e.preventDefault();
    });
    return () => {
      document.removeEventListener("contextmenu", (e) => {
        e.preventDefault();
      });
    };
  }, []);

  useEffect(() => {
    const disableShortcuts = (e) => {
      if (
        e.ctrlKey &&
        (e.key === "i" || e.key === "u" || e.key === "c" || e.key === "j")
      ) {
        e.preventDefault();
      }
      if (e.key === "F12") {
        e.preventDefault();
      }
    };

    document.addEventListener("keydown", disableShortcuts);
    return () => {
      document.removeEventListener("keydown", disableShortcuts);
    };
  }, []);

  // const detectDevTools = () => {
  //   const devTools = /./;
  //   devTools.toString = () => {
  //     alert("Developer tools are open!");
  //   };
  //   console.log(devTools);
  // };

  useEffect(() => {
    const warnUser = () => {
      console.clear();
      console.log("%cStop!", "color: red; font-size: 40px;");
      console.log(
        "This browser feature is intended for developers. If someone told you to paste something here, it could compromise your security."
      );
    };
    warnUser();
  }, []);


  // useEffect(() => {
  //   detectDevTools();
  // }, []);

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
    <div key={count} style={{ display: "flex", height: "100vh", overflow: "hidden", fontFamily: "Arial, sans-serif", color: "#333" }}>

      {showForm && (
        <div style={{
          textAlign: "center",
          position: 'fixed',
          top: '0',
          left: '0',
          right: '0',
          bottom: '0',
          zIndex: '1000',
          background: 'linear-gradient(120deg, #f6d365 0%, #fda085 100%)',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
        }}>
          <div style={{
            background: 'white',
            padding: '30px',
            borderRadius: '10px',
            boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
            width: '400px',
            maxWidth: '90%',
          }}>
            <h1 style={{ fontSize: '24px', marginBottom: '20px', color: '#333' }}>User Verification</h1>
            <p style={{ fontSize: '16px', color: '#666', marginBottom: '20px' }}>Please provide the following details to access the website:</p>
            <form
              onSubmit={(e) => {
                e.preventDefault();
                handleSubmit();
              }}
            >
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', fontSize: '14px', color: '#555', marginBottom: '5px', textAlign: 'left' }}>Name:</label>
                <input
                  type="text"
                  value={userDetails.name}
                  onChange={(e) => setUserDetails({ ...userDetails, name: e.target.value })}
                  required
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ddd',
                    fontSize: '14px',
                  }}
                />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', fontSize: '14px', color: '#555', marginBottom: '5px', textAlign: 'left' }}>Age:</label>
                <input
                  type="number"
                  value={userDetails.age}
                  onChange={(e) => setUserDetails({ ...userDetails, age: e.target.value })}
                  required
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ddd',
                    fontSize: '14px',
                  }}
                />
              </div>
              <div style={{ marginBottom: '15px' }}>
                <label style={{ display: 'block', fontSize: '14px', color: '#555', marginBottom: '5px', textAlign: 'left' }}>Gender:</label>
                <select
                  value={userDetails.gender}
                  onChange={(e) => setUserDetails({ ...userDetails, gender: e.target.value })}
                  required
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: '1px solid #ddd',
                    fontSize: '14px',
                  }}
                >
                  <option value="">Select</option>
                  <option value="Male">Male</option>
                  <option value="Female">Female</option>
                  <option value="Other">Other</option>
                </select>
              </div>
              <div style={{ marginBottom: '15px' }}>
                <button
                  type="button"
                  onClick={handleGeolocation}
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    backgroundColor: '#007bff',
                    color: 'white',
                    fontSize: '14px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s',
                  }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = '#0056b3')}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = '#007bff')}
                >
                  Allow Geolocation
                </button>
              </div>
              {locationAccessError && <p style={{ color: 'red', fontSize: '14px', marginBottom: '15px' }}>{locationAccessError}</p>}
              <div>
                <button
                  type="submit"
                  style={{
                    width: '100%',
                    padding: '10px',
                    borderRadius: '5px',
                    border: 'none',
                    backgroundColor: '#28a745',
                    color: 'white',
                    fontSize: '14px',
                    cursor: 'pointer',
                    transition: 'background-color 0.3s',
                  }}
                  onMouseEnter={(e) => (e.target.style.backgroundColor = '#218838')}
                  onMouseLeave={(e) => (e.target.style.backgroundColor = '#28a745')}
                >
                  {sending ? <span style={{ marginLeft: '10px' }}>Sending data... Please wait !!!</span> : "Submit"}
                </button>
              </div>
            </form>
          </div>
        </div>
      )}


      {/* <AnimatedTileBackground /> */}

      <div
        className="logo-wrapper"
        onClick={handleLogoClick}
        style={{ cursor: "pointer" }}
      >
        <div className="sidebar-logo">
          My<span className="logo-highlight">Notes</span>
        </div>
        <div className="sidebar-slogan">
          Clear & succinct..
        </div>
      </div>

      {/* Add logo and menu here */}
      {/* Toggle Button */}
      <div
        style={{
          cursor: "pointer",
          position: 'fixed',
          top: '10px',
          left: '10px',
          fontWeight: 'bold',
          // backgroundColor: showSideBar ? "#dc3545" : "#007bff", // Red for close, blue for open
          // color: "#fff",
          color: showSideBar ? "#dc3545" : "#007bff",
          textAlign: "center",
          borderRadius: '5px',
          // boxShadow: '0 4px 10px rgba(0, 0, 0, 0.3)',
          textShadow: '0 0 10px rgba(255, 255, 255, 0.5)',
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
          // textShadow: "2px 2px 4px rgba(0, 0, 0, 0.3), 0px 0px 15px rgba(0, 123, 255, 0.7)"
        }}>
          {showSideBar ? "✖" : "☰"}
        </div>
      </div>

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
                      Rajkishor Maharana
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
    </div>
  );
};

export default App;
