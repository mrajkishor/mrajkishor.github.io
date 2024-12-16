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
import ProfilePic from '../assets/profile_pic.jpg';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import GitHubIcon from '@mui/icons-material/GitHub';
import EmailIcon from '@mui/icons-material/Email';
import PhoneIcon from '@mui/icons-material/Phone';

import invoiceScreen from '../assets/invoice_screen.jpeg';


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
                    <Item>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            minHeight: '100', // Center the card in the viewport
                            // background: 'linear-gradient(135deg, #ffeb3b, #ffffff)', // Yellow to white gradient
                            padding: '1px',
                        }}>
                            <Card sx={{
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
                                        Rajkishor Maharana
                                    </Typography>
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
                                    <Button size="small" startIcon={<LinkedInIcon />} href="https://www.linkedin.com/in/mrajkishor331/" sx={{ color: '#0e76a8' }}>
                                        LinkedIn
                                    </Button>
                                    <Button size="small" startIcon={<GitHubIcon />} href="https://github.com/mrajkishor" sx={{ color: '#333' }}>
                                        GitHub
                                    </Button>
                                </CardActions>
                            </Card>
                        </Box>
                    </Item>
                </Grid>

                {/* Right Grid for Developer Info */}
                <Grid item xs={8}>
                    <Item sx={{ textAlign: 'left', padding: '20px', backdropFilter: 'blur(50px)' }}>

                        <div style={{ maxWidth: '800px' }}>
                            <Typography variant="h6" gutterBottom>
                                About Me
                            </Typography>



                            <Typography variant="body1" sx={{ marginBottom: 2 }}>
                                I am a motivated and skilled Full-Stack Developer with 6+ years of experience in building robust and scalable software applications. My expertise includes technologies like React, Redux, Node.js, Spring Boot, and AWS. I am passionate about crafting intuitive user interfaces and efficient backend systems to solve real-world problems.
                            </Typography>

                            <Typography variant="body1" sx={{ marginBottom: 2 }}>
                                Currently based in Hyderabad, India, I enjoy working on innovative projects that have practical applications.

                                {/* One of my key side projects, <strong>Chalaan.com</strong>, is a business management solution designed to help enterprises streamline their daily operations, manage invoicing, and improve productivity. */}
                            </Typography>

                            <Typography variant="body1" sx={{ marginBottom: 2 }}>
                                I thrive on learning new technologies and exploring how software can simplify processes for individuals and businesses. My goal is to leverage my technical skills to create impactful solutions and continue growing as a developer.
                            </Typography>

                            <Typography variant="body1">
                                Outside of work, I enjoy experimenting with digital art, music production, reading about emerging technologies, exploring new places, and spending time with family and friends.
                            </Typography>

                        </div>
                        <br />
                        <Divider sx={{ marginBottom: 2 }} />

                        <Typography variant="h6" gutterBottom>
                            Portfolio
                        </Typography>

                        <List>
                            <ListItem sx={{ padding: 0 }}>
                                <Card sx={{ maxWidth: '800px', marginBottom: 4 }}>
                                    <CardMedia
                                        component="img"
                                        height="200"
                                        image={invoiceScreen}
                                        alt="Chalaan.com Business Management App Preview"
                                    />
                                    <CardContent>
                                        <Typography gutterBottom variant="h6" component="div">
                                            Chalaan.com - Business Management Solution
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary' }}>
                                            Chalaan.com is a comprehensive **business management platform** designed to cater to small, medium,
                                            and large enterprises. It streamlines daily operations, automates invoicing, and provides detailed
                                            insights to help businesses grow and operate efficiently.
                                        </Typography>
                                        <Typography variant="body2" sx={{ color: 'text.secondary', marginTop: 2 }}>
                                            <strong>Key Features:</strong>
                                            <ul>
                                                <li>Customizable invoicing templates</li>
                                                <li>Inventory and expense management</li>
                                                <li>Role-based access for team collaboration</li>
                                                <li>Cloud storage integration for seamless data access</li>
                                            </ul>
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
                                        {/* <Button
                                            size="small"
                                            variant="outlined"
                                            href="https://github.com/mrajkishor/chalaan" // Replace with your GitHub repo URL
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
                                <ListItemText primary="Cloud: AWS (Lambda, EC2, S3, DynamoDB), Docker" />
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
                                            Associate - Cognizant, Hyderabad, IN
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
                                            Associate Consultant - Capgemini, Navi Mumbai, IN
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
                            <ListItem sx={{ alignItems: 'flex-start', marginBottom: 2, maxWidth: '800px' }}>
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
                            </ListItem>
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
