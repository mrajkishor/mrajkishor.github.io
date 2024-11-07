import React, { useEffect, useState } from 'react';
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

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: 'rgba(255, 255, 255, 0.1)', // Glass effect background
    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
    backdropFilter: 'blur(10px)', // Blurred background effect
    border: '1px solid',
    borderImage: 'linear-gradient(135deg, #1a237e, #000000) 1', // Gradient border
    borderRadius: '16px',
    padding: theme.spacing(1),
    color: theme.palette.text.primary,
}));

export default function ColumnsGrid() {
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
            sx={{
                flexGrow: 1,
                minHeight: '100vh', // Full height background
                background: 'linear-gradient(135deg, #1a237e, #000000)', // Blue to black gradient
                padding: 2, // Padding around the content
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
            }}
        >
            <Grid container direction={isSmallScreen ? 'column' : 'row'}
                spacing={2} columns={12}>
                {/* Left Grid for Profile */}
                <Grid item xs={4} sx={{
                    position: isSmallScreen ? 'relative' : 'sticky',
                    top: isSmallScreen ? 'auto' : '20px',
                    height: isSmallScreen ? 'auto' : 'fit-content',
                }}>
                    <Item>
                        <Box sx={{
                            display: 'flex',
                            justifyContent: 'center',
                            alignItems: 'center',
                            minHeight: '100', // Center the card in the viewport
                            background: 'linear-gradient(135deg, #1a237e, #000000)', // Background gradient (blue to black)
                            padding: '1px',
                        }}>
                            <Card
                                sx={{
                                    width: 1,

                                    textAlign: 'center',
                                    padding: 2,
                                    borderRadius: 3,
                                    background: 'rgba(255, 255, 255, 0.1)', // Glass effect background
                                    boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
                                    backdropFilter: 'blur(10px)', // Blurred background effect
                                    border: '2px solid',
                                    borderImage: 'linear-gradient(135deg, #1a237e, #000000) 1', // Gradient border

                                }}
                            >
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
                                        border: '4px solid white', // Optional border for the image
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
                                    <Button size="small" startIcon={<GitHubIcon />} href="https://github.com/mrajkishor" sx={{ color: '#ccc' }}>
                                        GitHub
                                    </Button>
                                </CardActions>
                            </Card>
                        </Box>
                    </Item>
                </Grid>

                {/* Right Grid for Developer Info */}
                <Grid item xs={8}>
                    <Item sx={{ textAlign: 'left', padding: '20px' }}>
                        <Typography variant="h6" gutterBottom>
                            Full-Stack Developer
                        </Typography>

                        <Divider sx={{ marginBottom: 2 }} />

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
                        <Typography variant="body1">
                            6+ years of experience in building scalable web and mobile applications, contributing to full-stack projects, and working with cloud-native solutions.
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText
                                    primary="Associate Software Engineer - Cognizant, IN"
                                    secondary="July 2022 - Present"
                                />
                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Senior Full-Stack Developer - Capgemini, IN"
                                    secondary="June 2018 - July 2022"
                                />
                            </ListItem>
                        </List>

                        <Typography variant="h6" gutterBottom>
                            Internship / Training
                        </Typography>
                        <List>
                            <ListItem>
                                <ListItemText
                                    primary="Jspiders OAR, Bengaluru, IN"
                                    secondary={
                                        <>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.secondary"
                                            >
                                                2017 - 2018
                                            </Typography>
                                            <br />
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.secondary"
                                            >
                                                Trained in Java full stack (J2EE, Spring, Hibernate, Oracle 10g)
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
                            <ListItem>
                                <ListItemText
                                    primary="Kalinga Institute of Industrial Technology, BBSR, IN"
                                    secondary={
                                        <>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.secondary"
                                            >
                                                2023 - 2025
                                            </Typography>
                                            <br />
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.secondary"
                                            >
                                                MCA - Master of Computer Applications
                                            </Typography>
                                        </>
                                    }
                                />

                            </ListItem>
                            <ListItem>
                                <ListItemText
                                    primary="Government College of Engineering, Kalahandi, IN"
                                    secondary={
                                        <>
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.secondary"
                                            >
                                                2012 - 2016
                                            </Typography>
                                            <br />
                                            <Typography
                                                sx={{ display: 'inline' }}
                                                component="span"
                                                variant="body2"
                                                color="text.secondary"
                                            >
                                                B.Tech in Mechanical Engineering
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
