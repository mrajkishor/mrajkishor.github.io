import React from 'react';
import PropTypes from 'prop-types';
import '../assets/css/Projects.scss';
import { Helmet } from 'react-helmet';
import Accordion from 'react-bootstrap/Accordion';
import StackGrid, { transitions } from "react-stack-grid";

import MultiActionAreaCard from './mui/Card';

import aiCom from '../assets/image/ai_ecom.png';
import appGen from '../assets/image/appgen.jpg';
import gyvor from '../assets/image/gyvor.jpg';
import Xhara from '../assets/image/ishara.webp';
import Invoices from '../assets/image/Invoices.webp';
import TimeTally from '../assets/image/TimeTally.webp';
import MovieLobby from '../assets/image/MovieLobby.webp';



import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


const { scaleDown } = transitions;

function ProjectsItem(props) {
    return <>
        <div class={props.vp.vp === "m" ? 'card-container-cool-m' : 'card-container-cool'}>
            <h4>BEBSAA SaaS Platform</h4>
            <p>This Platform can enable small to medium scale shop owners in India to explore online opportunities. Bebsaa is derived from the the Sanskrit word "Vyavashaaya" which means "Business".</p>
            <div className={props.vp.vp === "m" ? '' : 'release'}>
                <p>
                    Will be available in the following Modes [Site can be down due to maintenance]
                </p>
                <ul>
                    <li> Website [  <a target='_blank' href='https://www.bebsaa.com'>www.bebsaa.com</a>]</li>
                    <li>Desktop (Linux/Win/Mac)</li>

                    <li>Mobile (Android/iOS)  </li>

                </ul>

            </div>

        </div>
    </>;
}


// function TabMaker(props) {
//     return (
//         <Tabs
//             defaultActiveKey="ps"
//             id="portfolio-tab"
//             className="mb-3"
//         >
//             <Tab eventKey="ps" title="Products/Services(1)">
//                 <ProjectsItem vp={props} />
//             </Tab>
//             <Tab eventKey="art" title="Art(0)" disabled>

//             </Tab>
//             <Tab eventKey="msc" title="Music(0)" disabled>

//             </Tab>
//             <Tab eventKey="ppr" title="Papers(0)" disabled>

//             </Tab>
//         </Tabs>
//     );
// }

function CommonGrid(props) {

    return (<div>
        <StackGrid
            columnWidth={props.vp === "m" ? "100%" : "50%"}
            appear={scaleDown.appear}
            appeared={scaleDown.appeared}
            enter={scaleDown.enter}
            entered={scaleDown.entered}
            leaved={scaleDown.leaved}

        >
            {/* <div key="key1"><MultiActionAreaCard
                title="Bebsaa"
                image={aiCom}
                desc="AR based e-commerce platform for Indian local product/service owners."
            /></div>
            <div key="key2"><MultiActionAreaCard
                title="UI-Matrix"
                desc="Its is a SaaS platform to develop apps with AI bot. The goal is to create rapid development of scalable frontend and micro services."
                image={appGen}
            /></div> */}
            <div key="key3"><MultiActionAreaCard
                enableImg={true}
                title="Vyro "
                desc='{"Domain": "Rent on demand", "Mode": "public", "Status": "complete", "Description": "Its a Vehicle Rental Application! This mobile application connects users looking to rent vehicles with vehicle owners willing to rent out their vehicles. The application is divided into two main components: the Buyer\"s App and the Seller\"s App."}'
                image={gyvor}
                link={'https://github.com/mrajkishor/Vyro'}
                isStatic
            /></div>

            <div key="key4"><MultiActionAreaCard
                enableImg={true}
                title="Xhara"
                desc='{"Domain" : "Social media dating", "Mode": "private", "Status": "hold", "Description": "confidential"}'
                image={Xhara}
                link={'https://github.com/mrajkishor/Ishara'}
                isStatic
            /></div>

            <div key="key5"><MultiActionAreaCard
                enableImg={true}
                title="IMS - Invoice"
                desc='{"Domain" : "Inventory Management Service", "Mode": "public", "Status": "active", "Description": "confidential"}'
                image={Invoices}
                link={'https://github.com/mrajkishor/IMS-Invoice-services'}
                isStatic
            /></div>


            <div key="key6"><MultiActionAreaCard
                enableImg={true}
                title="TimeTally"
                desc='{"Domain" : "Time Management Application","Mode": "public", "Status": "complete", "Description" : "This project implements a dynamic table in React, utilizing Ant Design for UI components, to track and manage timers. Each row in the table represents a unique timer, allowing users to start, pause, resume, and reset individual timers. Additionally, the application tracks context switches (start/pause sequences) for each timer and calculates the total accumulated time across all timers. This feature-rich table is designed to assist in time management and productivity tracking, showcasing React state management, effect hooks, and context API integration."}'
                image={TimeTally}
                link={'https://github.com/mrajkishor/TimeTally'}
                isStatic
            /></div>

            <div key="key7"><MultiActionAreaCard
                enableImg={true}
                title="Movie Lobby APIs"
                desc='{"Domain" : "Movie Lobby OTT Apis", "Mode": "public", "Status":"complete", "Description": "API for a movie lobby for OTT applications. The lobby has a collection of movies with genre, rating, and streaming link."}'
                image={MovieLobby}
                link={'https://github.com/mrajkishor/Movie-Lobby-OTT-API'}
                isStatic
            /></div>
        </StackGrid>
    </div>)
}

function ProjectsMobile(props) {
    return (
        <Accordion className="portfolio-mobile" defaultActiveKey="0">
            <Accordion.Item eventKey="0">
                <Accordion.Header>Products/Services (1)</Accordion.Header>
                <Accordion.Body>
                    <ProjectsItem vp={props} />
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="1">
                <Accordion.Header>Music (0)</Accordion.Header>
                <Accordion.Body>
                    No records found!
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="2">
                <Accordion.Header>Art (0)</Accordion.Header>
                <Accordion.Body>
                    No records found!
                </Accordion.Body>
            </Accordion.Item>
            <Accordion.Item eventKey="3">
                <Accordion.Header>Papers (0)</Accordion.Header>
                <Accordion.Body>
                    No records found!
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
    );
}

function Projects(props) {
    return (
        <>
            <Helmet>
                <title>Rajkishor | Projects</title>
            </Helmet>

            {props.vp === "m" && <>

                {/* <ProjectsMobile vp={props.vp}> </ProjectsMobile> */}
                <CommonGrid {...props} />

            </>}

            {props.vp !== "m" && <>

                <div className='Projects'>

                    {/* <TabMaker vp={props.vp} /> */}

                    <CommonGrid {...props} />


                </div>

            </>}

        </>

    );
}

export default Projects;