import React, { useState, useEffect } from 'react';
import '../assets/css/About.scss';
import { Helmet } from 'react-helmet';
import Raj from '../assets/image/raj.jpeg';
import { SkillBars } from 'react-skills';
import AudioMp3 from '../assets/audio/a.mp3';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import { MdWorkHistory } from 'react-icons/md'
import { BiSolidSchool } from 'react-icons/bi'
import { IoMdSchool } from 'react-icons/io'
import { PiShieldStarThin } from 'react-icons/pi'
import { FaInfinity, FaPhone, FaHandsHelping, FaGithub, FaStackOverflow, FaQuora, FaHome, FaCopy, FaUserCircle, FaMailchimp, FaLinkedin, FaInstagram, FaYoutube, FaDev } from 'react-icons/fa';
import myProfilePic from '../assets/image/raj_profile.png';

import Loader2 from '../assets/image/loader2.gif';
import AboutMe from './cards/AboutMe';


import { useAudio } from '../hooks/useAudio';

const skillsData = [
    {
        name: 'ReactJS',
        level: 100,
        color: '#9b59b6',
    },
    {
        name: 'Redux',
        level: 90,
        color: '#9b59b6',
    },
    {
        name: 'Java',
        level: 98,
        color: '#9b59b6',
    },
    {
        name: 'Spring',
        level: 95,
        color: '#9b59b6',
    },
    {
        name: 'JavaScript',
        level: 92,
        color: '#9b59b6',
    }
    ,
    {
        name: 'TypeScript',
        level: 85,
        color: '#9b59b6',
    },
    {
        name: 'Kafka',
        level: 80,
        color: '#9b59b6',
    }
]

function About(props) {




    return (
        <>






            <Helmet>
                <title>Rajkishor | About </title>
            </Helmet>


            <div className={props.vp === "m" ? 'blog-wrapper-m' : 'blog-wrapper'}>

                {
                    props.vp === "m" &&
                    <>
                        <div class="card__content_m">

                            <div>
                                <img src={myProfilePic} className='profile-pc-m' />
                                <div className='phone-header'>
                                    <p>Rajkishor Maharana</p>


                                    <div className='phone headline'>
                                        +91 - 7683922389 {'\u00A0'} <FaPhone />
                                    </div>
                                    <div className='clear-line' />
                                    <div className='email headline'>
                                        mrajkishor331@gmail.com{'\u00A0'}<FaMailchimp />
                                    </div>
                                    <div className='clear-line' />
                                </div>


                            </div>

                        </div>
                        {/* <div class="blob_m"></div>
                        <div class="blob_m"></div>
                        <div class="blob_m"></div>
                        <div class="blob_m"></div> */}


                    </>
                }



                {/* <h4>About Raj</h4>
                <h6>

      
                    5 years of work experience in web and mobile UI development, object-oriented analysis and design, object modelling, DOM manipulation, UI responsiveness, JavaScript object model ,distributed system and micro frontend architecture, design patterns, system design, activity monitoring, UX design and agile methodology.                </h6>
               */}
                {
                    props.vp !== "m" && <>
                        <AboutMe />
                    </>
                }




                {/* <br /> */}
                <div className={props.vp === "m" ? 'mobile-wrapper' : ''}>
                    {/* <h5>Primary Skills</h5> */}
                    {/* <h6><p>DAW</p>/<p></p>/<p>Piano/Keyboard</p>/<p>PC Games</p>/<p>Vector/digital arts</p>/<p>Independent research</p>/<p>Startups</p> / <p>Psychology</p></h6> */}


                    {
                        props.vp !== "m" &&
                        <>
                            {/* <button className='btn-demand'>
                                <span> React
                                </span>
                            </button>
                            <button className='btn-demand'>
                                <span> JavaScript
                                </span>
                            </button>
                            <button className='btn-demand'>
                                <span>
                                    HTML/CSS
                                </span>
                            </button>
                            <button className='btn-demand'>
                                <span> NodeJS
                                </span>
                            </button>
                            <button className='btn-demand'>
                                <span> Java
                                </span>
                            </button> */}
                            {/* <br />
                            <br /> */}
                        </>
                    }





                    {/* 
                    <h5>Primary Skills</h5>




                    <h6>Front-end</h6>

                    <p>React JS, Redux, Redux Thunk, Redux Saga, Redux Persist, React Native, Angular 2+, Ionic, HTML, CSS, JavaScript, TypeScript, NgRx, RxJS</p>


                    <h6>DevOps</h6>

                    <p>Docker, Jenkins, Azure DevOps</p>


                    <h6>SDLC</h6>

                    <p>Agile (SCRUM), Confluence, Jira, Git, TDD, BRD, SRS, GoF Design Patterns, UML, System design</p>


                    <h6>Testing</h6>

                    <p>Jest, Enzyme, RTL, react test utils, react test renderer</p> */}

                    {/* <div className='skillset'>
    <SkillBars skills={skillsData} />

</div> */}


                    {
                        props.vp === "m" && <>
                            <div className='mob-share-wrapper'>
                                <div class="share-m">
                                    <a target="_blank" href="https://www.linkedin.com/in/rajkishor-maharana-773b0a290/">
                                        <FaLinkedin />
                                    </a>
                                    <a target="_blank" href="https://www.youtube.com/@mrajkishor331">
                                        <FaYoutube />
                                    </a>
                                    <a target="_blank" href="https://www.quora.com/profile/Rajkishor-Maharana-4">
                                        <FaQuora />
                                    </a>
                                    <a target="_blank" href="https://github.com/mrajkishor">
                                        <FaGithub />
                                    </a>
                                </div>
                                <br />
                                <a href='/resume/Rajkishor_Maharana_Resume.pdf' download><button> Resume</button></a>
                            </div>

                        </>
                    }


                    {/* <hr /> */}
                    <div className={props.vp === "m" ? `about-m` : `about`}>

                        <h6>Short Bio</h6>
                        <p>
                            {/* Unwilling to sit idle, I love being occupied with challenges. Always craving crazy ideas and eager to execute them, regardless of the cost. Consistently side with logic, ensuring that reason guides my actions and decisions. However, also balance this with intuition, allowing it to play a crucial role in the overall decision-making process without solely depending on logic */}

                            Driven by an aversion to idleness, I thrive on engaging with challenges and am perpetually drawn to innovative, even unconventional ideas, ready to bring them to fruition at any expense. My approach to problem-solving is firmly rooted in logic, ensuring that reason is the primary guide for my actions and decisions. Yet, I consciously integrate intuition into my decision-making process, allowing it to significantly influence outcomes without being entirely reliant on logic.
                        </p>

                        <h6>Profession</h6>
                        <p>
                            IT Consultant | Software Developer | Aspiring Entrepreneur
                        </p>

                        <hr />
                        <h5>Skills</h5>
                        <div>
                            <h6>Techincal</h6>
                            <div>
                                <h6>Primary</h6>
                                <ul>
                                    <li>
                                        UI
                                        <p>
                                            React (web & native), JavaScript, Jest
                                        </p>
                                    </li>
                                </ul>

                                <h6>Secondary</h6>
                                <ul>
                                    <li>
                                        BACKEND
                                        <p>
                                            AWS, NodeJs, Java
                                        </p>
                                    </li>
                                    <li>
                                        CI/CD
                                        <p>
                                            Azure DevOps, Jenkins
                                        </p>
                                    </li>
                                    <li>
                                        DATABASES
                                        <p>
                                            RDBMS and NoSQL
                                        </p>
                                    </li>
                                </ul>
                            </div>

                            <h6>Functional</h6>
                            <ul>

                                <li>
                                    ORGANIZATION MANAGEMENT
                                    <p>
                                        Solve Problems, Meet Deadlines, Initiate Projects,Organize,  Coordinate, Put Theory into Practice, Assume Responsibility, Apply Policy, Set Priorities, Strategize
                                    </p>
                                </li>
                                <li>
                                    COMMUNICATION
                                    <p>
                                        Consult, Sell, Negotiate, Promote, Work in a Team
                                    </p>
                                </li>
                            </ul>
                        </div>
                    </div>


                    <div className='timeline'>

                        <VerticalTimeline>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                date="Jul 2023-Jul 2025"
                                iconStyle={{ background: '#9EDDFF', color: '#5D12D2' }}
                                icon={<IoMdSchool />}
                            >
                                <h4 className="vertical-timeline-element-title glow">KiiT, Bhubaneswar, Odisha, IN</h4>
                                <hr />
                                <h5 className="vertical-timeline-element-subtitle">MCA</h5>

                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: '#F8F0E5', color: '#0F2C59' }}
                                contentArrowStyle={{ borderRight: '7px solid  #f5f6fa' }}
                                date="11th Jul, 2022 - present"
                                iconStyle={{ background: '#F8F0E5', color: '#0F2C59' }}
                                icon={<MdWorkHistory />}
                            >
                                <h3 className="vertical-timeline-element-title">Full Stack Developer</h3>
                                <hr />
                                <h4 className="vertical-timeline-element-subtitle">Cognizant, IN</h4>



                                <p>Roles and responsibilites: <br />

                                    <ul>
                                        <li>
                                            Provided cost-cutting solutions to the clients
                                        </li>
                                        <li>
                                            Developed new features from scratch
                                        </li>
                                        <li>
                                            Application monitoring

                                        </li>
                                        <li>
                                            Performance improvement
                                        </li>
                                        <li>
                                            100% unit test coverage
                                        </li>
                                        <li>
                                            Application deployment etc.
                                        </li>
                                    </ul>



                                </p>
                                <p>
                                    <b>Tech stack:</b> <br /> <i>
                                        React, AWS lambda/API GateWay/S3, SAP CDC, Azure DevOps, Serverless, Terraform, NodeJS, ExpressJS, Spring, PostgreSQL, Java, Python etc.
                                    </i>
                                </p>

                                <p>Projects done : <b>2</b>
                                </p>

                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className="vertical-timeline-element--work"
                                contentStyle={{ background: '#FFFFFF', color: '#0F2C59' }}
                                date="15th Jun, 2018 - 11th Jul, 2022"
                                iconStyle={{ background: '#EADBC8', color: '#0F2C59' }}
                                icon={<MdWorkHistory />}
                            >
                                <h3 className="vertical-timeline-element-title">Full stack Developer</h3>
                                <hr />
                                <h4 className="vertical-timeline-element-subtitle">Capgemini, IN</h4>

                                <p>Roles and responsibilites: <br />

                                    <ul>
                                        <li>
                                            Made POCs, pitched and converted to successful applications
                                        </li>
                                        <li>
                                            Client interactions and deployment on premise basis
                                        </li>
                                        <li>
                                            Developed applications from scratch

                                        </li>
                                        <li>
                                            100% unit test coverage etc.
                                        </li>
                                    </ul>



                                </p>


                                <p>
                                    <b>Tech stack:</b> <br /> <i>
                                        React (Native and JS), Angular 2+, Ionic, Azure DevOps, NLP (Google BERT, AWS Comprehend), Chatbots, Spring Boot, Dot Net, MongoDB, ELK, Oracle, PostgreSQL etc.
                                    </i>
                                </p>
                                <p>Projects done : <b>5</b>
                                </p>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                contentStyle={{ background: '#FFFFFF', color: '#0F2C59' }}
                                date="1st Aug 2017 to 14th Jun, 2018"
                                iconStyle={{ background: '#618264', color: '#D0E7D2' }}
                                icon={<BiSolidSchool />}
                            >
                                <h3 className="vertical-timeline-element-title">JSpiders Java Training Center, Banglore</h3>
                                <hr />
                                <h4 className="vertical-timeline-element-subtitle">Training</h4>
                                <p>
                                    Trained on full-stack software development.
                                </p>
                                <p>
                                    <b>Tech stack:</b> <br /> <i>
                                        Java 6, J2EE, HTML, CSS, AngularJS, JSP, Servlets, JDBC, Spring, Hibernate, Oracle 11g
                                    </i>
                                </p>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                contentStyle={{ background: '#FFFFFF', color: '#0F2C59' }}
                                date="Jan 2017 to Jul, 2017"
                                iconStyle={{ background: '#618264', color: '#D0E7D2' }}
                                icon={<BiSolidSchool />}
                            >
                                <h3 className="vertical-timeline-element-title">Freelancing</h3>
                                <hr />
                                <h4 className="vertical-timeline-element-subtitle">Android Developer</h4>
                                <p>
                                    Developed native Android applications from scratch.
                                </p>
                                <p>
                                    <b>Tech stack:</b> <br /> <i>
                                        Java, XML, SQLite, MySQL, XAMPP, Linux
                                    </i>
                                </p>
                            </VerticalTimelineElement>
                            <VerticalTimelineElement
                                className="vertical-timeline-element--education"
                                date="2012- Dec 2016"
                                iconStyle={{ background: '#9EDDFF', color: '#5D12D2' }}
                                icon={<IoMdSchool />}
                            >
                                <h4 className="vertical-timeline-element-title glow">Government College of Engineering Kalahandi, Bhawanipatna</h4>
                                <hr />
                                <h5 className="vertical-timeline-element-subtitle">B.Tech</h5>
                                <h6>Mechanical Engineering</h6>
                            </VerticalTimelineElement>

                            <VerticalTimelineElement
                                iconStyle={{ background: 'rgb(16, 204, 82)', color: '#fff' }}

                                icon={<PiShieldStarThin />}
                            />
                        </VerticalTimeline>
                    </div>



                    {/* < div style={{
                        opacity: 0.5
                    }}> */}

                    {/* <h5>Work Experience</h5> */}

                    {/* 
                        <div id="aca-cover">


                            <h6>Cognizant, Hyderabad, India</h6>
                            <p>Full Stack Developer</p>
                            <p>2022, jul - present</p>


                            <p>Skills <br />

                                React, AWS lambda/API GateWay/S3, SAP CDC, Azure DevOps, Serverless, Terraform, NodeJS, ExpressJS, Spring, PostgreSQL, Java, Python etc.


                            </p>
                            <p>Number of projects worked on <br /> 2<br /><br />
                            </p>
                            <p>Roles and responsibilites: <br />

                                <ul>
                                    <li>
                                        Developed Application from Scratch
                                    </li>
                                    <li>
                                        Developed features
                                    </li>
                                    <li>
                                        Application monitoring

                                    </li>
                                    <li>
                                        Performance improvement
                                    </li>
                                    <li>
                                        100% unit test coverage
                                    </li>
                                    <li>
                                        Application deployment etc.
                                    </li>
                                </ul>



                            </p>
                        </div> */}


                    {/* <div id="aca-cover">


                            <h6>Capgemini, Mumbai, India</h6>
                            <p>Full Stack Developer</p>
                            <p>2018, Jun - 2022, jul</p>


                            <p>Skills <br />

                                React (Native and JS), Angular 2+, Ionic, Azure DevOps, NLP (Google BERT, AWS Comprehend), Chatbots, Spring Boot, Dot Net, MongoDB, ELK, Oracle, PostgreSQL etc.

                            </p>
                            <p>Number of projects worked on <br /> 5<br /><br />
                            </p>
                            <p>Roles and responsibilites: <br />

                                <ul>
                                    <li>
                                        Made POCs and Converted to successful applications
                                    </li>
                                    <li>
                                        Client interactions and deployment on premise basis
                                    </li>
                                    <li>
                                        Developed applications from scratch

                                    </li>
                                    <li>
                                        100% unit test coverage etc.
                                    </li>
                                </ul>



                            </p>
                        </div> */}
                    {/* </div> */}

                    {/* <hr />
                    < div style={{
                        opacity: 0.5
                    }}> */}

                    {/* <h5>Academics</h5> */}


                    {/* <div id="aca-cover">


                            <h6>Chandigarh University, India</h6>
    <p>Master in Computer Applications</p>
    <p>OS, Networks, Algo, AI/ML, Distributed and Cloud Computing</p>

                            <h6 class="glow">KiiT, Bhubaneswar, Odisha, IN</h6>
                            <p>MCA - Master of Computer Applications [2023-2025]</p>
                            <p>General</p>
                            <p>Favorite : <br /> Computer Neworks, Operating Systems, Databases, Data Structure & Algorithms, NLP, Computer Vision, Audio/video processing </p>
                        </div> */}

                    {/* <div id="aca-cover">


                            <h6>Chandigarh University, India</h6>
    <p>Master in Computer Applications</p>
    <p>OS, Networks, Algo, AI/ML, Distributed and Cloud Computing</p>

                            <h6 class="glow">Government College of Engineering Kalahandi, Bhawanipatna, Odisha, IN</h6>
                            <p>B.Tech - Bachelor of Technology [2012-2016]</p>
                            <p>Mechanical Engineering</p>
                            <p>Favorite : <br />Fluid Dynamics (Navier-Stokes), Engineering Math, Programming, Data structures/Algorithms, Database design</p>
                        </div> */}
                    {/* </div> */}


                </div>


                {
                    props.vp === "t" &&
                    <>
                        <hr />
                        <div className='contact-t'>
                            <div className='phone headline'>
                                +91 - 7683922389 {'\u00A0'} <FaPhone />
                            </div>
                            <div className='clear-line' />
                            <div className='email headline'>
                                mrajkishor331@gmail.com{'\u00A0'}<FaMailchimp />
                            </div>
                            <div className='clear-line' />
                        </div>


                    </>
                }



            </div >
        </>


    );
}

export default About;