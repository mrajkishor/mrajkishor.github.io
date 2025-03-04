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
  const slogans = [
    "Because Memory Leaks Aren't Just for Code! 🧠💀",
    "Docs? Nah, These Are My Survival Notes 🛠️📝",
    "Code, Coffee, Chaos. ☕💻",
    "If it's not in my notes, it doesn't exist. 📝🚀",
    "AI is cool, but have you tried debugging? 🤖🔥",
    "Because Stack Overflow won’t always save you. 🛟",
    "Full-Stack? More like Full-Stress. 😵‍💻",
    "Data Science: Turning coffee into insights. ☕📊",
    "Commit your notes before your brain crashes. 💾🧠",
    "99 problems, but a bug ain't one... oh wait. 🐞😵",
    "My brain = RAM, these notes = SSD. ⚡",
    "Tech moves fast, my notes move faster. 🚀📚",
    "AI will replace jobs, but not my note-taking. 🤓",
    "Ctrl + S before it's too late. 💾🔥",
    "Debugging is like being a detective in your own crime scene. 🕵️‍♂️🐛",
    "Where ‘Hello World’ meets deep learning. 🌍🤖",
    "This is where semicolons go to retire. ;)",
    "Code it. Break it. Fix it. Document it (maybe). 📜",
    "If (lost) { check notes(); } 🔍",
    "Machine Learning? More like Guesswork++. 🤔📈",
    "Building apps, breaking servers. 🛠️🔥",
    "I teach AI, yet my printer still won’t listen. 🤖🖨️",
    "Error 404: Motivation Not Found. ❌",
    "Because ‘just Google it’ isn’t always enough. 🔍",
    "When in doubt, console.log(‘check notes’); 📜",
    "Backend, frontend, mental breakdown-end. 💥",
    "Trust me, I'm a software engineer. 😏",
    "Notes: The real cloud storage. ☁️📚",
    "Data Science: The art of making spreadsheets sound cool. 📊🎩",
    "First, we train AI. Then, AI trains us. 🤖💡",
    "Deploying notes… please don’t crash. 🚀💀",
    "Everything is a database if you believe hard enough. 🗃️",
    "There’s an API for that... probably. 🌐",
    "Write code, not excuses. 💻📝",
    "One does not simply write clean code. 😆",
    "My AI can predict the future, but not my next error. 🛠️",
    "Documentation: The final boss of software development. 📖💀",
    "Coding is like magic, except when it’s debugging. 🎩🐞",
    "I write notes so Future Me won’t hate Past Me. ⏳",
    "Where dreams are coded and APIs are broken. 🧑‍💻",
    "AI: Making humans obsolete, one line at a time. 🤖💥",
    "May your commits be bug-free and your models be accurate. 🙏",
    "Emerging Tech: Fancy words for ‘not quite working yet’. 🤯",
    "Full-Stack Developer: Because one headache wasn't enough. 😵",
    "Data never lies, but it sure misleads. 📊🤡",
    "Logging my genius before I forget. 🔍📝",
    "Notes now, world domination later. 🌍🚀",
    "Syntax errors? Just another Tuesday. 🔥💻",
    "Tech evolves, my notes keep up. 📚⚡",
    "The only server I trust is in my notes. 🖥️",
    "Cloud computing? My notes were in the cloud first. ☁️",
    "Code runs, data flows, notes grow. 🌊",
    "Where bugs go to get documented. 🐛📖",
    "Read, code, debug, repeat. 🔄",
    "Learning one line at a time. 📜",
    "Git good or git lost. 🚀",
    "AI isn't scary... yet. 😬",
    "If AI takes over, at least I wrote the notes. 📝🤖",
    "Git commit, push, pray. 🙏💻",
    "Future Me will thank me for these notes. 📝⌛",
    "Because Google won’t always be there for you. 🔍😢",
    "Data Science: Where statistics meets sorcery. 🔮📊",
    "If (struggle) { checkNotes(); } 🛠️",
    "I break things so you don’t have to. 🛠️🔥",
    "Full-Stack: Jack of all trades, debugger of none. 😵‍💻",
    "Notes: Because my brain is just RAM with bad garbage collection. 🧠💾",
    "AI may take over, but my notes will survive. 🤖📚",
    "Running on coffee and API errors. ☕💥",
    "Where ‘Hello World’ meets deep learning. 🌍🤖",
    "One does not simply deploy on Friday. ⚠️",
    "Keeping track of errors so I don’t make them twice. 📝🐞",
    "Machine Learning? More like Machine Guessing. 🤔📈",
    "Debugging my code and my life. 🔍💀",
    "Writing notes like it's production-ready. 📝🚀",
    "Data never lies… except when it does. 📊🤡",
    "A place where semicolons go to die. ;)",
    "Ctrl + S is my superpower. 💾🦸‍♂️",
    "Backend, frontend… when does it end? 😵",
    "Full-Stack: Because single problems weren’t enough. 🛠️🔥",
    "Data Science is 90% cleaning, 10% panic. 📊😰",
    "There’s no place like 127.0.0.1 🏡",
    "Deploying notes… hoping for no merge conflicts. 🚀⚠️",
    "I make mistakes, but at least I document them. 📖😂",
    "If my AI model fails, I’ll just blame the data. 🤖🤷",
    "Debugging: Turning coffee into errors since forever. ☕🐞",
    "Notes are the only database I can trust. 💾",
    "Coding is just Google, copy, paste, debug. 🔄💻",
    "AI is cool, but have you ever fixed a CSS bug? 🎨💀",
    "Writing notes like a dev writes tests—almost never. 📜",
    "Because remembering is overrated. 🧠🚫",
    "Logging my thoughts so I don’t have to think. 📝💭",
    "Full-Stack: The art of suffering in both frontend and backend. 😭",
    "Deploying notes, please don’t crash. 🚀💀",
    "Emerging Tech: Just fancy words for ‘not stable yet’. 🤯",
    "99 problems, and JavaScript is most of them. ⚡",
    "AI won't take over if I keep writing bad code. 🤖💀",
    "Sometimes I write notes, sometimes I just panic. 😅",
    "Welcome to the cloud… where my thoughts live now. ☁️",
    "Trying to keep up with tech, failing gracefully. 🚀",
    "Tech evolves, my notes adapt. 📚⚡",
    "The only logs I read are my debugging logs. 🔍",
    "If it works, it’s not a bug—it’s a feature. 🚀",
    "Because I can’t afford to forget. 📝💸",
    "AI can predict trends, but not my coding errors. 🤖💥",
    "Trust me, I'm a developer. 🛠️😏",
    "Learning never stops, debugging neither. 🔄🐛",
    "Data speaks. My notes listen. 📊👂",
    "These notes are version-controlled… unlike my life. 🔀",
    "Coding is an art. Debugging is the reality check. 🎭",
    "AI is great, but it still can’t fix my bugs. 🤖🐛",
    "Writing notes so I can debug my brain later. 📝🧠",
    "Data-driven, coffee-fueled, sleep-deprived. ☕📊😴",
    "Backend, frontend, debug-end. 😵‍💻",
    "If my AI model fails, it’s a ‘feature,’ not a bug. 🤖",
    "Notes: The only documentation I actually read. 📖",
    "I only deploy on Fridays for the adrenaline rush. 🚀🔥",
    "Machine Learning? More like Machine Guessing. 📊🤷",
    "When in doubt, blame the caching. 🔄",
    "AI may take over the world, but not my notes. 🤖📝",
    "Debugging: Turning mistakes into learning moments. 🐞✨",
    "One tab for work, fifty for Stack Overflow. 🔥",
    "When all else fails, restart the server. 🔄🖥️",
    "My code runs on hopes and dreams. 💻💭",
    "Full-Stack dev: Too much work, not enough time. ⏳",
    "Data science: Making predictions, missing deadlines. 📊⏳",
    "Bug-free code? I don’t believe in fairy tales. 🧚‍♂️🐛",
    "AI learns, but I forget. 🤖🧠",
    "I write notes so I don’t have to think too hard. 🤯",
    "Every commit is a prayer to the coding gods. 🙏💾",
    "Where semicolons go missing. ;🚀",
    "I don’t always test my code, but when I do, it’s in production. 🔥",
    "Coding is easy. Debugging is an extreme sport. 🏅",
    "Trying to keep up with tech, failing gracefully. 🚀📉",
    "AI isn’t perfect, but neither am I. 🤖🤷‍♂️",
    "My browser history is 90% 'How to fix...'. 🔍",
    "Life’s too short for slow queries. 🚀🔍",
    "I break code for a living. 🛠️🔥",
    "My notes: Because Google won’t always be there. 🔍📚",
    "Learning today so I can forget tomorrow. 📝😆",
    "Cloud computing? My brain has been in the cloud for years. ☁️",
    "Where ‘Hello World’ meets deep learning. 🌍🤖",
    "Every problem is a database problem. 🗃️",
    "AI won’t replace me… yet. 😬",
    "Just another day of making software worse before making it better. 🔄",
    "You don’t need AI to predict I’ll need coffee. ☕",
    "Tech evolves, my notes try to keep up. 📚",
    "Notes: My personal Stack Overflow. 📝🔥",
    "Deploying notes… hoping for no merge conflicts. 🚀⚠️",
    "Full-Stack? More like Full-Stress. 😵‍💻",
    "Training AI, but my code still won’t listen. 🤖🖥️",
    "Tech moves fast, my memory doesn’t. 🧠💾",
    "If (stuck) { read_notes(); } 📝🔍",
    "AI can predict trends, but not my next error. 🤖💥",
    "Debugging is like being a detective in your own crime scene. 🔍🐛",
    "Future Me will be grateful for these notes. ⏳📝",
    "Documentation: The final boss of software development. 📜",
    "Machine learning: Fancy math with extra confusion. 🤯",
    "Every AI model I train is just slightly more confused than me. 🤖💭",
    "I don’t trust AI… yet. 😆",
    "Every API request is a cry for help. 🌐😢",
    "My notes: Because memory leaks aren’t just for code. 🧠💀",
    "Machine Learning is just statistics in disguise. 🎭📊",
    "Writing code is hard. Writing documentation is impossible. 😭",
    "I talk to my AI models. They don’t respond… yet. 🤖",
    "All I wanted was a simple project. Now I have 10 services running. 😵",
    "Cloud is just someone else’s computer. ☁️🖥️",
    "Working in tech means fixing the printer too. 🖨️🤦‍♂️",
    "If it's not in my notes, it doesn’t exist. 📝🚀",
    "I fix one bug, create five more. 🔄🐛",
    "Coding is like playing with fire—exciting and dangerous. 🔥",
    "First, we train AI. Then, AI trains us. 🤖",
    "The only logs I read are my debugging logs. 🔥📜",
    "I don’t code—I just argue with the compiler. 🤖💢",
    "Notes: The only thing between me and total confusion. 🤯",
    "I have a love-hate relationship with semicolons. ;🤬",
    "Write, test, fail, repeat. 🔄",
    "I teach AI, yet my smart speaker never listens. 🤖🔊",
    "Merge conflict: The reason I cry at night. 😭",
    "I make software. Sometimes, it even works. 💻",
    "One tab for work, twenty for debugging. 🤯",
    "Predicting the future… except for my deadlines. 📆📊",
    "You never forget a memory leak. 🧠💀",
    "Notes: My way of outsourcing my memory. 🔍📚",
    "My AI is learning, but I’m still debugging. 🤖🛠️",
    "Deploying AI… let’s hope it doesn’t go Skynet. 🤖💀",
    "Tech changes fast, but my debugging skills stay the same. 🛠️",
    "I keep notes because AI doesn’t read my mind yet. 📝🤖",
    "If my code runs, I get suspicious. 🤔",
    "Write code, break things, fix later. 🔄",
    "Notes are my personal cheatsheet for life. 📖",
    "Where ‘working fine’ means ‘I’m scared to touch it.’ 😆",
    "One does not simply write clean code. 😂",
    "Emerging Tech: Just fancy words for ‘not stable yet’. 🤯",
    "If AI takes over, I hope it reads my notes first. 🤖📝",
    "Programming: Because ‘just Google it’ isn’t always enough. 🔍",
    "Every AI model I make is just a fancier coin flip. 🤖🪙",
    "Syntax errors? Just another Tuesday. 🔥",
    "Data is power. My notes are the backup. ⚡",
    "The cloud remembers what I forget. ☁️",
    "If debugging is removing bugs, then programming must be adding them. 🐛",
    "Machine Learning: The science of making bad predictions faster. 🚀",
    "Coding is an art. Debugging is the reality check. 🎭",
    "These notes are version-controlled… unlike my life. 🔀",
    "Data never lies, but it sure misleads. 📊🤡",
    "If I had a dollar for every bug, I’d be rich. 💰🐛",
    "Every problem is a feature waiting to happen. 🚀",
    "Future AI will laugh at my code. 🤖😂",
    "This note-taking app is my backup brain. 🧠💾"
  ];
  const [showSideBar, setShowSideBar] = React.useState(false);
  const navigate = useNavigate(); // Hook to programmatically navigate
  const location = useLocation(); // Hook to get the current location
  const [count, setCount] = React.useState(0);
  const [slogan, setSlogan] = useState("The 🔑 to excellence");
  const [fade, setFade] = useState(true); // Control fade effect
  const [sloganIndex, setSloganIndex] = useState(Math.floor(Math.random() * slogans.length));


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
      }, 500); // Wait for fade-out to complete before changing text
    }, 5000); // 1000 ms (1 second)

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
    <div key={count} style={{ display: "flex", height: "100vh", overflow: "hidden", fontFamily: "Arial, sans-serif", color: "#333" }}>



      {/* <AnimatedTileBackground /> */}

      <div
        className="logo-wrapper"
        onClick={handleLogoClick}
        style={{ cursor: "pointer" }}
      >
        <div className="sidebar-logo">
          My<span className="logo-highlight">N😁tes</span>
        </div>
        <div className="sidebar-slogan">
          {/* 📚 OpenDev Handbook */}
          {/* 🔑 to excellence */}
          {/* Docs? Nah, These Are My Survival Notes 🛠️📝 */}
          {/* Because Memory Leaks Aren't Just for Code! 🧠💀 */}

          <div style={{
            opacity: fade ? 1 : 0,
            transition: "opacity 0.5s ease-in-out"
          }}>
            {slogan}
          </div>

          {/* Other suggestions : 
          
          Here are some other relevant name ideas for your open-source developer notes project that balance inclusivity, clarity, and appeal:

### 1. **DevNotes Collective**
   - **Why**: Emphasizes the collaborative and community-driven aspect of your notes while keeping it simple.

### 2. **The Code Chronicles**
   - **Why**: Adds a bit of personality while still keeping the focus on coding and sharing knowledge.

### 3. **OpenDev Handbook**
   - **Why**: Combines the idea of being open-source with a "handbook" concept, suggesting a comprehensive resource for developers.

### 4. **DevWiki**
   - **Why**: Simple and easy to remember. The "Wiki" implies a collaborative platform for information, much like Wikipedia.

### 5. **CodeCompendium**
   - **Why**: "Compendium" suggests a collection of diverse notes, making it feel both scholarly and expansive.

### 6. **DevNotes Vault**
   - **Why**: Conveys that your notes are a valuable resource, akin to a treasure chest of knowledge.

### 7. **The OpenCode Library**
   - **Why**: The word "library" implies a wide range of resources and information, perfect for a collaborative note-sharing project.

### 8. **CodeCraft Notes**
   - **Why**: Emphasizes the craft of development while suggesting your notes are crafted for learning and improvement.

### 9. **The Dev Codex**
   - **Why**: "Codex" suggests a collection of sacred or authoritative knowledge, which could appeal to developers looking for solid references.

### 10. **TechTome**
   - **Why**: A blend of "tech" and "tome," implying an authoritative collection of information for developers.

Let me know if you want more names, or if any of these resonate with you!
           */}
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
    </div>
  );
};

export default App;
