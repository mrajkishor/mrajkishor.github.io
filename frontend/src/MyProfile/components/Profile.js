import React, { useEffect, useState, useRef } from 'react';
import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid2';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Divider from '@mui/material/Divider';
import LinearProgress from '@mui/material/LinearProgress';
import CodeIcon from '@mui/icons-material/Code';
import CloudIcon from '@mui/icons-material/Cloud';
import StorageIcon from '@mui/icons-material/Storage';
import BuildCircleIcon from '@mui/icons-material/BuildCircle';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import ProfilePic from '../assets/profile_pic3.png';
import AirPointer from '../assets/air_pointer.webp';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';
import Tooltip from '@mui/material/Tooltip';
import { motion } from 'framer-motion';


import invoiceScreen from '../assets/invoice_screen.jpeg';
import notesImg from '../assets/notes.jpg';
import dagImg from '../assets/dag.png';
import sSyncImg from '../assets/ssync.png'
import Footer from '../../components/Footer';


// Styled component for the Paper element
const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Glass effect background with white
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(10px)', // Blurred background effect
    // border: '1px solid #fbc02d', // Yellow border to complement the theme
    borderRadius: '16px',
    padding: theme.spacing(2),
    color: theme.palette.text.primary,
}));

export default function Profile() {
    const [isSmallScreen, setIsSmallScreen] = useState(window.innerWidth <= 1400);


    useEffect(() => {
        const handleResize = () => {
            setIsSmallScreen(window.innerWidth <= 1400);
        };

        window.addEventListener('resize', handleResize);
        return () => window.removeEventListener('resize', handleResize);
    }, []);



    return (

        <Box
            className="profile"

            sx={{
                flexGrow: 1,
                minHeight: '100vh', // Full height background
                background: 'rgba(0,0,0,0)', // White background for the entire page
                padding: 2, // Padding around the content
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 6,

            }}
        >

            {/* Waves start */}

            {/* <div
                    style={{
                        position: 'absolute',
                        zIndex: 1,
                        top: '-400px',
                        left: '0', // Mirror: Change from right to left
                        width: '100vw',
                        height: '500px',
                        background: '#3498db', // Solid blue
                        clipPath: 'polygon(100% 30%, 0 0, 0 70%, 100% 100%)', // Mirror clipPath
                        opacity: 0.7,
                        animation: 'waveMovement 6s infinite ease-in-out', // Wave animation
                    }}
                />

                <div
                    style={{
                        position: 'absolute',
                        zIndex: 2,
                        top: '-350px',
                        left: '0', // Mirror: Change from right to left
                        width: '100vw',
                        height: '450px',
                        background: '#6c5ce7', // Solid purple
                        clipPath: 'polygon(100% 40%, 0 10%, 0 60%, 100% 90%)', // Mirror clipPath
                        opacity: 0.5,
                        animation: 'waveMovement 6s infinite ease-in-out 0.5s', // Delayed wave animation
                    }}
                />

                <div
                    style={{
                        position: 'absolute',
                        zIndex: 3,
                        top: '-300px',
                        left: '0', // Mirror: Change from right to left
                        width: '100vw',
                        height: '400px',
                        background: '#00cec9', // Solid teal
                        clipPath: 'polygon(100% 50%, 0 20%, 0 50%, 100% 80%)', // Mirror clipPath
                        opacity: 0.3,
                        animation: 'waveMovement 6s infinite ease-in-out 1s', // Further delayed wave animation
                    }}
                />

                <div
                    style={{
                        position: 'absolute',
                        zIndex: 1,
                        bottom: '0',
                        left: '0', // Mirror: Change from right to left
                        width: '100vw',
                        height: '500px',
                        background: '#3498db', // Solid blue
                        clipPath: 'polygon(100% 70%, 0 100%, 0 30%, 100% 0)', // Mirror clipPath
                        opacity: 0.7,
                        animation: 'waveMovement 8s infinite ease-in-out', // Wave animation
                    }}
                />

                <div
                    style={{
                        position: 'absolute',
                        zIndex: 2,
                        bottom: '50px',
                        left: '0', // Mirror: Change from right to left
                        width: '100vw',
                        height: '450px',
                        background: '#6c5ce7', // Solid purple
                        clipPath: 'polygon(100% 80%, 0 90%, 0 40%, 100% 10%)', // Mirror clipPath
                        opacity: 0.5,
                        animation: 'waveMovement 8s infinite ease-in-out 0.5s', // Delayed wave animation
                    }}
                />

                <div
                    style={{
                        position: 'absolute',
                        zIndex: 3,
                        bottom: '100px',
                        left: '0', // Mirror: Change from right to left
                        width: '100vw',
                        height: '400px',
                        background: '#00cec9', // Solid teal
                        clipPath: 'polygon(100% 90%, 0 80%, 0 50%, 100% 20%)', // Mirror clipPath
                        opacity: 0.3,
                        animation: 'waveMovement 8s infinite ease-in-out 1s', // Further delayed wave animation
                    }}
                /> */}

            {/* Waves end */}

            {/* 
            <div
                style={{
                    position: 'absolute',
                    zIndex: 1,
                    top: '-500px',
                    right: '-300px',
                    width: '800px',
                    height: '800px',
                    borderRadius: '50%',
                    background: 'transparent', // Transparent center
                    border: '10px solid rgba(52, 152, 219, 0.5)', // Solid blue border
                    boxShadow: '0 0 50px 25px rgba(52, 152, 219, 0.8)', // Glow effect
                    animation: 'spin 10s linear infinite', // Spin animation
                }}
            />

            <div
                style={{
                    position: 'absolute',
                    zIndex: 2,
                    top: '-300px',
                    right: '50px',
                    width: '400px',
                    height: '400px',
                    borderRadius: '50%',
                    background: 'transparent',
                    border: '8px dashed rgba(108, 92, 231, 0.5)', // Solid purple border
                    animation: 'spinReverse 8s linear infinite', // Reverse spin animation
                }}
            />

            <div
                style={{
                    position: 'absolute',
                    zIndex: 3,
                    top: '-200px',
                    right: '-150px',
                    width: '200px',
                    height: '200px',
                    borderRadius: '50%',
                    background: 'transparent',
                    border: '5px solid rgba(0, 206, 201, 0.5)', // Solid teal border
                    boxShadow: '0 0 20px 10px rgba(0, 206, 201, 0.8)', // Glow effect
                    animation: 'pulse 4s infinite', // Pulse animation
                }}
            /> */}




            <Grid style={{ zIndex: 100 }} container direction={isSmallScreen ? 'column' : 'row'} spacing={2} columns={12}>
                {/* Left Grid for Profile */}
                <Grid item xs={4} sx={{
                    position: isSmallScreen ? 'relative' : 'sticky',
                    top: isSmallScreen ? 'auto' : '65px',
                    height: isSmallScreen ? 'auto' : 'fit-content',
                }}

                >
                    <Item sx={{ background: 'white', }}>
                        <Box sx={{

                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            minHeight: '100', // Center the card in the viewport
                            // background: 'linear-gradient(135deg, #ffeb3b, #ffffff)', // Yellow to white gradient
                            padding: '1px',
                        }}>
                            <Card sx={{
                                width: "100%",
                                borderRadius: 0,
                                // border: "none",
                                // width: 1,
                                // textAlign: 'center',
                                // padding: 2,
                                // background: '#fff ', // White background for card
                                // // boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                                // backdropFilter: 'blur(10px)', // Blurred background effect
                                // // border: '2px solid #fbc02d', // Yellow border

                                border: "none",
                                width: 1,
                                textAlign: 'center',
                                boxShadow: 'none',
                                padding: 2,
                                background: '#fff', // White background for the card
                                backdropFilter: 'blur(10px)', // Blurred background effect
                                // Neon glow effect on border and shadow
                                // boxShadow: '0 0 10px 2px rgba(255, 255, 255, 0.8), 0 0 20px 4px #ff00ff, 0 0 30px 6px #ff00ff', // Neon glow effect (pink glow)
                            }}>
                                <CardMedia
                                    component="img"
                                    image={ProfilePic}
                                    title="Profile Pic of Raj"
                                    sx={{
                                        height: 140,
                                        width: 140,
                                        borderRadius: '50%',
                                        display: 'block',
                                        margin: '20px auto',
                                        border: '4px solid white', // Border for the image
                                    }}
                                />
                                <CardContent>
                                    <Typography gutterBottom variant="h5" component="div">
                                        𝑅𝒶𝒿 𝒦𝒾𝓈𝒽𝑜𝓇 𝑀𝒶𝒽𝒶𝓇𝒶𝓃𝒶                                    </Typography>
                                    <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: 2 }}>
                                        Hyderabad, India
                                    </Typography>

                                    <Divider sx={{ marginY: 2 }} />

                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 1 }}>
                                        <EmailIcon sx={{ marginRight: 1, color: 'text.secondary' }} />
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            mrajkishor331@gmail.com
                                        </Typography>
                                    </Box>

                                    <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: 1 }}>
                                        <PhoneIcon sx={{ marginRight: 1, color: 'text.secondary' }} />
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            +91-7683922389
                                        </Typography>
                                    </Box>
                                </CardContent>

                                <CardActions sx={{ justifyContent: 'center' }}>
                                    <motion.div whileHover={{ scale: 1.05 }}>
                                        <Button size="small" startIcon={<LinkedInIcon />} href="https://www.linkedin.com/in/mrajkishor331/" sx={{ color: '#0e76a8' }}>
                                            LinkedIn
                                        </Button>

                                    </motion.div>

                                    <motion.div whileHover={{ scale: 1.05 }} >
                                        <Button size="small" startIcon={<GitHubIcon />} href="https://github.com/mrajkishor" sx={{ color: '#333' }}>
                                            GitHub
                                        </Button>
                                    </motion.div>

                                </CardActions>
                            </Card>
                        </Box>
                    </Item>

                </Grid>

                {/* Right Grid for Developer Info */}
                <Grid item xs={8}>


                    {/* <Item sx={{ background: 'white', textAlign: 'left', padding: '20px 30px', backdropFilter: 'blur(50px)' }}>
                        <div style={{ maxWidth: '800px' }}>
                            <Typography variant="h6" gutterBottom>
                                OCEAN – Organized Compendium for Efficient & Advanced Notetaking
                            </Typography>

                            <Typography variant="body1" sx={{ marginBottom: 2 }}>
                                The name <strong>OCEAN</strong> is inspired by the idea that the world of software is ever-evolving, deep, and boundless — just like the ocean.
                            </Typography>

                            <Typography variant="body1" sx={{ marginBottom: 2 }}>
                                OCEAN – Organized Compendium for Efficient & Advanced Notetaking
                            </Typography>

                            <Typography variant="body1" sx={{ marginBottom: 1 }}>
                                <strong>O</strong> – <strong>Organized</strong>: Well-structured, logically grouped content.
                            </Typography>
                            <Typography variant="body1" sx={{ marginBottom: 1 }}>
                                <strong>C</strong> – <strong>Compendium</strong>: A concise but comprehensive collection of essential concepts.
                            </Typography>
                            <Typography variant="body1" sx={{ marginBottom: 1 }}>
                                <strong>E</strong> – <strong>Efficient</strong>: Designed for quick revision, clarity, and maximum retention.
                            </Typography>
                            <Typography variant="body1" sx={{ marginBottom: 1 }}>
                                <strong>A</strong> – <strong>Advanced</strong>: Covers in-depth, real-world, and expert-level topics.
                            </Typography>
                            <Typography variant="body1" sx={{ marginBottom: 1 }}>
                                <strong>N</strong> – <strong>Notetaking</strong>: Focused on writing, summarizing, and learning notes in a digestible format.
                            </Typography>

                        </div>
                    </Item>


                    <br /> */}

                    <Item sx={{ background: 'white', textAlign: 'left', padding: '20px 30px', backdropFilter: 'blur(50px)' }}>

                        <div style={{ maxWidth: '800px' }}>
                            <Typography variant="h6" gutterBottom>
                                About Me
                            </Typography>

                            I have 6+ years of experience with SDLC, Agile delivery, designing and developing client facing softwares from scratch, converting POCs to MVP, migrating legacy systems, profiling, monitoring, performance optimization, feature enhancement, defect fixes, scaling the existing softwares for high traffic scenarios etc.





                            {/* <Typography variant="body1" sx={{ marginBottom: 2 }}>
                                I am a <strong>Full-Stack Developer  </strong> with <strong>6+ years of experience</strong> in designing and developing <strong>scalable, high-performance applications</strong>.
                                My expertise spans <strong>React, Redux, Node.js, Spring Boot, and AWS</strong>, enabling me to create efficient, maintainable, and user-friendly software solutions.
                            </Typography>

                            <Typography variant="body1" sx={{ marginBottom: 2 }}>
                                My passion lies in building <strong>robust backends</strong> and <strong>intuitive user interfaces</strong> that solve real-world challenges. I thrive in fast-paced environments,
                                leveraging automation and modern technologies to enhance workflow efficiency. I am a strong advocate of <strong>clean architecture, scalable design patterns, and cloud-native solutions</strong>.
                            </Typography>

                            <Typography variant="body1" sx={{ marginBottom: 2 }}>
                                Currently based in <strong>Hyderabad, India</strong>, I specialize in developing innovative and scalable software solutions while continuously staying updated with emerging technologies.

                            </Typography>




                            <Typography variant="body1" sx={{ marginBottom: 2 }}>
                                I am always eager to collaborate on challenging projects that push the boundaries of technology. Whether it's architecting <strong>microservices, optimizing frontend performance,
                                    or automating cloud deployments</strong>, I am committed to delivering impactful solutions.
                            </Typography>

                            <Typography variant="body1" sx={{ marginBottom: 1 }}>
                                <strong>Beyond Coding:</strong>
                            </Typography>

                            <Typography variant="body1" sx={{ marginBottom: 1 }}>
                                🎨 Experimenting with <strong>digital art</strong> – exploring creativity through design and visualization.
                            </Typography>

                            <Typography variant="body1" sx={{ marginBottom: 1 }}>
                                🎵 Producing <strong>music</strong> – blending technology with creativity to create unique compositions.
                            </Typography>

                            <Typography variant="body1" sx={{ marginBottom: 1 }}>
                                📖 Reading about <strong>emerging technologies</strong> – keeping up with advancements in AI, cloud computing, and software architecture.
                            </Typography>

                            <Typography variant="body1" sx={{ marginBottom: 1 }}>
                                🌍 Exploring <strong>new places</strong> – 🏍️ passionate about bike riding and exploring scenic mountain ranges, embracing adventure and new experiences.

                            </Typography>

                            <Typography variant="body1" sx={{ marginBottom: 1 }}>
                                👨‍👩‍👦 Spending time with <strong>family & friends</strong> –   fostering meaningful connections beyond the digital world.

                            </Typography>

                            <Typography variant="body1" sx={{ marginBottom: 1 }}>
                                📌 <strong>TL;DR:</strong> Full-Stack Developer | Tech Enthusiast | Problem Solver | Debugging Survivor | Mechanical Engineer-Turned-Coder 🚀💻
                            </Typography> */}
                        </div>

                        <br />
                        <Divider sx={{ marginBottom: 2 }} />

                        <Typography variant="h6" gutterBottom>
                            My Digital Storefront
                        </Typography>

                        <List sx={{ width: "800px" }}>
                            {/* <ListItem sx={{ padding: 0 }}>
                             <Card sx={{ maxWidth: '800px', marginBottom: 4 }}>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={invoiceScreen}
                                        alt="Chalaan.com Invoice Management Solution"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div">
                                            🚀 Chalaan.com - for Invoicing & Inventory Management
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            Chalaan.com is a <strong>modern Invoice & Inventory management solution</strong> designed to streamline <strong>billing, invoicing, and financial tracking</strong> for
                                            businesses of all sizes. Whether you're managing a <strong>small business, a retail store, or an enterprise</strong>,
                                            Chalaan.com simplifies invoicing operations with automation and real-time tracking.
                                        </Typography>

                                        <Typography variant="body2" sx={{ color: 'text.primary', paddingTop: '10px' }}>
                                            What's Next for Chalaan?
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            While currently focused on <strong>invoice management</strong>, Chalaan.com is evolving to become a <strong>complete business operations platform</strong>,
                                            with future plans to expand into <strong>inventory management</strong>, making it a <strong>one-stop solution</strong> for businesses.
                                        </Typography>

                                        <Typography variant="body2" sx={{ color: 'text.secondary', marginTop: 2 }}>
                                            <strong>Key Features:</strong>
                                            <ul>
                                                <li>✅ <strong>Automated Invoice Generation</strong> – Create, customize, and send invoices effortlessly.</li>
                                                <li>✅ <strong>Payment Tracking</strong> – Monitor due payments, settlements, and transaction history.</li>
                                                <li>✅ <strong>Role-Based Access</strong> – Secure and control user access for seamless collaboration.</li>
                                                <li>✅ <strong>Cloud Storage & Backup</strong> – Ensure secure and hassle-free access to your invoices anytime.</li>
                                                <li>🔜 <strong>Upcoming Feature:</strong> Inventory Management – Expanding capabilities to track and manage stock efficiently.</li>
                                            </ul>
                                        </Typography>

                                        <Typography variant="body2" sx={{ color: 'text.secondary', marginTop: 2 }}>
                                            <strong>TL;DR:</strong> Chalaan.com simplifies <strong>invoice management</strong> today and is set to transform into a <strong>comprehensive business management tool</strong> in the future.
                                        </Typography>
                                    </CardContent>

                                    <CardActions>
                                        <Button
                                            size="small"
                                            variant="outlined"
                                            color="primary"
                                            href="https://chalaan.com"
                                            target="_blank"
                                        >
                                            Visit Project
                                        </Button>
                                        <Button
                                            size="small"
                                            variant="outlined"
                                            href="https://gitlab.com/ims2712841/invoice-services"
                                            target="_blank"
                                        >
                                            View Code
                                        </Button>
                                    </CardActions>
                                </Card> 

                            </ListItem> */}

                            <ListItem sx={{ padding: 0 }}>


                                <Card sx={{ width: '48%', marginBottom: 4, padding: "1%", boxShadow: 'none' }}>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={invoiceScreen}
                                        alt="Chalaan.com Invoice Management Solution"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div">
                                            Chalaan.com - Invoicing & Inventory Management for MSME
                                        </Typography>

                                    </CardContent>

                                    <CardActions>
                                        <Button
                                            size="small"
                                            variant="outlined"
                                            color="primary"
                                            href="https://chalaan.com"
                                            target="_blank"
                                        >
                                            Visit Project
                                        </Button>
                                        <Button
                                            size="small"
                                            variant="outlined"
                                            href="https://github.com/mrajkishor/IMS-Invoice-services"
                                            target="_blank"
                                        >
                                            View Code
                                        </Button>
                                    </CardActions>
                                </Card>
                                <Card sx={{ width: '48%', marginBottom: 4, padding: "1%", boxShadow: 'none' }}>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={dagImg}
                                        alt="Chalaan.com Invoice Management Solution"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div">
                                            Distributed Task Scheduler (DAG based)
                                        </Typography>

                                    </CardContent>

                                    <CardActions>
                                        {/* <Button
                                            size="small"
                                            variant="outlined"
                                            color="primary"
                                            href="https://chalaan.com"
                                            target="_blank"
                                        >
                                            Visit Project
                                        </Button> */}
                                        <Button
                                            size="small"
                                            variant="outlined"
                                            href="https://github.com/mrajkishor/Distributed-Task-Scheduler"
                                            target="_blank"
                                        >
                                            View Code
                                        </Button>
                                    </CardActions>
                                </Card>
                            </ListItem>


                            <ListItem sx={{ padding: 0 }}>


                                <Card sx={{ width: '48%', marginBottom: 4, padding: "1%", boxShadow: 'none' }}>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={sSyncImg}
                                        alt="Chalaan.com Invoice Management Solution"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div">
                                            ShopSync | Edge-Powered Inventory and Logistics Suit
                                        </Typography>

                                    </CardContent>

                                    <CardActions>
                                        {/* <Button
                                            size="small"
                                            variant="outlined"
                                            color="primary"
                                            href="https://chalaan.com"
                                            target="_blank"
                                        >
                                            Visit Project
                                        </Button> */}
                                        <Button
                                            size="small"
                                            variant="outlined"
                                            href="https://github.com/mrajkishor/ShopSync"
                                            target="_blank"
                                        >
                                            View Code
                                        </Button>
                                    </CardActions>
                                </Card>

                                <Card sx={{ width: '48%', marginBottom: 4, padding: "1%", boxShadow: 'none' }}>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={notesImg}
                                        alt="Chalaan.com Invoice Management Solution"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div">
                                            O.C.E.A.N - Concept Notes (for Developers and College Graduates)
                                        </Typography>

                                    </CardContent>

                                    <CardActions>
                                        {/* <Button
                                            size="small"
                                            variant="outlined"
                                            color="primary"
                                            href="https://chalaan.com"
                                            target="_blank"
                                        >
                                            Visit Project
                                        </Button> */}
                                        {/* <Button
                                            size="small"
                                            variant="outlined"
                                            href="https://github.com/mrajkishor/Distributed-Task-Scheduler"
                                            target="_blank"
                                        >
                                            View Code
                                        </Button> */}
                                    </CardActions>
                                </Card>
                            </ListItem>
                        </List>



                        <Typography variant="h6" gutterBottom>
                            Skills
                        </Typography>
                        <List>
                            {/* Frontend Skills */}
                            <ListItem>
                                <ListItemIcon>
                                    <CodeIcon />
                                </ListItemIcon>
                                <ListItemText primary="Frontend: React, Redux, HTML5, CSS3" />
                                <Box sx={{ width: '50%', marginLeft: 2 }}>
                                    <LinearProgress variant="determinate" value={85} />
                                </Box>
                            </ListItem>

                            {/* Backend Skills */}
                            <ListItem>
                                <ListItemIcon>
                                    <CodeIcon />
                                </ListItemIcon>
                                <ListItemText primary="Backend: Spring, Node.js, Express.js, RESTful APIs" />
                                <Box sx={{ width: '50%', marginLeft: 2 }}>
                                    <LinearProgress variant="determinate" value={80} />
                                </Box>
                            </ListItem>

                            {/* Cloud Skills */}
                            <ListItem>
                                <ListItemIcon>
                                    <CloudIcon />
                                </ListItemIcon>
                                <ListItemText primary="Cloud: AWS, Azure, Docker" />
                                <Box sx={{ width: '50%', marginLeft: 2 }}>
                                    <LinearProgress variant="determinate" value={75} />
                                </Box>
                            </ListItem>

                            {/* Database Skills */}
                            <ListItem>
                                <ListItemIcon>
                                    <StorageIcon />
                                </ListItemIcon>
                                <ListItemText primary="Database: MongoDB, PostgreSQL, MySQL" />
                                <Box sx={{ width: '50%', marginLeft: 2 }}>
                                    <LinearProgress variant="determinate" value={70} />
                                </Box>
                            </ListItem>

                            {/* DevOps Skills */}
                            <ListItem>
                                <ListItemIcon>
                                    <BuildCircleIcon />
                                </ListItemIcon>
                                <ListItemText primary="DevOps: Jenkins, CI/CD, Kubernetes" />
                                <Box sx={{ width: '50%', marginLeft: 2 }}>
                                    <LinearProgress variant="determinate" value={65} />
                                </Box>
                            </ListItem>
                        </List>

                        <Divider sx={{ marginBottom: 2, marginTop: 2 }} />

                        <Typography variant="h6" gutterBottom>
                            Experience
                        </Typography>

                        <List>
                            <ListItem sx={{ alignItems: 'flex-start', marginBottom: 2, maxWidth: '800px' }}>
                                <ListItemText
                                    primary={
                                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                            Software Developer  - Cognizant, Hyderabad, IN
                                        </Typography>
                                    }
                                    secondary={
                                        <>
                                            <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: 1 }}>
                                                July 2022 - Present
                                            </Typography>
                                            <Typography variant="body2">
                                                - Working as a Full-Stack Developer, specializing in building scalable enterprise applications.
                                            </Typography>
                                            <Typography variant="body2">
                                                - Key contributions include designing and developing RESTful APIs, optimizing application performance, and collaborating with cross-functional teams to deliver high-quality solutions.
                                            </Typography>
                                            <Typography variant="body2">
                                                - Tech stack: React, Redux, Spring Boot, AWS (Lambda, DynamoDB, S3).
                                            </Typography>
                                        </>
                                    }
                                />
                            </ListItem>
                            <Divider sx={{ marginBottom: 2 }} />
                            <ListItem sx={{ alignItems: 'flex-start', marginBottom: 2, maxWidth: '800px' }}>
                                <ListItemText
                                    primary={
                                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                            Software Consultant - Capgemini, Navi Mumbai, IN
                                        </Typography>
                                    }
                                    secondary={
                                        <>
                                            <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: 1 }}>
                                                June 2018 - July 2022
                                            </Typography>
                                            <Typography variant="body2">
                                                - Led the development of key modules for enterprise applications, delivering solutions within tight deadlines.
                                            </Typography>
                                            <Typography variant="body2">
                                                - Streamlined business processes by integrating cloud services and modernizing legacy systems.
                                            </Typography>
                                            <Typography variant="body2">
                                                - Gained expertise in DevOps tools such as Jenkins and Kubernetes for CI/CD pipelines.
                                            </Typography>
                                        </>
                                    }
                                />
                            </ListItem>
                        </List>

                        <Typography variant="h6" gutterBottom>
                            Education
                        </Typography>

                        <List>
                            {/* <ListItem sx={{ alignItems: 'flex-start', marginBottom: 2, maxWidth: '800px', opacity: '.5' }}>
                                <ListItemText
                                    primary={
                                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                            Master of Computer Applications (MCA)
                                        </Typography>
                                    }
                                    secondary={
                                        <>
                                            <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: 1 }}>
                                                Kalinga Institute of Industrial Technology, BBSR, IN | 2023 - 2025
                                            </Typography>
                                            <Typography variant="body2">
                                                - Currently pursuing MCA with a focus on software engineering, Big data analytics, AI/ML and cloud computing.

                                            </Typography>

                                        </>
                                    }
                                />
                            </ListItem> */}
                            <Divider sx={{ marginBottom: 2 }} />
                            <ListItem sx={{ alignItems: 'flex-start', marginBottom: 2, maxWidth: '800px' }}>
                                <ListItemText
                                    primary={
                                        <Typography variant="h6" sx={{ fontWeight: 'bold' }}>
                                            Bachelor of Technology (BTech)
                                        </Typography>
                                    }
                                    secondary={
                                        <>
                                            <Typography variant="body2" sx={{ color: 'text.secondary', marginBottom: 1 }}>
                                                Government College of Engineering, Kalahandi, IN | 2012 - 2016
                                            </Typography>
                                            <Typography variant="body2">
                                                - Specialized in Mechanical Engineering with projects focused on automation and computational mechanics.
                                            </Typography>
                                        </>
                                    }
                                />
                            </ListItem>
                        </List>

                    </Item>


                </Grid>
            </Grid>

        </Box>
    );
}
