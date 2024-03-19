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
                    Will be available in the following modes [Site can be down due to maintenance]
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

function CommonGrid() {
    return (<div>
        <StackGrid
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
                title="Vyro"
                desc="Helping vehicle owners in setting up their online rental business"
                image={gyvor}
                link={'https://github.com/mrajkishor/Vyro'}
            /></div>

            <div key="key4"><MultiActionAreaCard
                title="Xhara"
                desc="{'domain' : 'social media', 'mode': 'private'}"
                image={Xhara}
                link={'https://github.com/mrajkishor/Ishara'}
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
                <CommonGrid />

            </>}

            {props.vp !== "m" && <>

                <div className='Projects'>

                    {/* <TabMaker vp={props.vp} /> */}

                    <CommonGrid />


                </div>

            </>}

        </>

    );
}

export default Projects;