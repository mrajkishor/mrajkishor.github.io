// import { createTheme } from '@mui/material/styles';

// const theme = createTheme({
//     palette: {
//         primary: {
//             main: '#1a237e', // Blue
//         },
//         secondary: {
//             main: '#000000', // Black
//         },
//         background: {
//             glass: 'rgba(255, 255, 255, 0.1)', // Glass effect background
//             gradient: 'linear-gradient(135deg, #1a237e, #000000)', // Gradient background
//         },
//         text: {
//             secondary: '#ccc', // Light grey
//         },
//         linkedin: {
//             main: '#0e76a8', // LinkedIn blue
//         },
//     },
//     components: {
//         MuiPaper: {
//             styleOverrides: {
//                 root: {
//                     backgroundColor: 'rgba(255, 255, 255, 0.1)', // Glass effect background
//                     boxShadow: '0 4px 30px rgba(0, 0, 0, 0.1)',
//                     backdropFilter: 'blur(10px)', // Blurred background effect
//                     border: '1px solid',
//                     borderImage: 'linear-gradient(135deg, #1a237e, #000000) 1', // Gradient border
//                     borderRadius: '16px',
//                 },
//             },
//         },
//     },
// });

// export default theme;


import { createTheme } from '@mui/material/styles';

const theme = createTheme({
    palette: {
        primary: {
            main: '#ffeb3b', // Yellow (primary color)
        },
        secondary: {
            main: '#000000', // Black (secondary color, for contrast)
        },
        background: {
            default: '#fffbea', // Soft yellow background for the theme (a light yellow)
            paper: '#ffffff', // White paper background
        },
        text: {
            primary: '#000000', // Black text for primary content
            secondary: '#757575', // Light grey for secondary text
        },
        linkedin: {
            main: '#0e76a8', // LinkedIn blue (unchanged)
        },
    },
    components: {
        MuiPaper: {
            styleOverrides: {
                root: {
                    backgroundColor: '#ffffff', // White background for paper components
                    boxShadow: '0 4px 15px rgba(0, 0, 0, 0.1)', // Light shadow for paper elements
                    border: '1px solid #fbc02d', // Yellow border to complement the theme
                    borderRadius: '16px', // Rounded corners
                },
            },
        },
        MuiButton: {
            styleOverrides: {
                root: {
                    color: '#ffeb3b', // Yellow button text
                    border: '1px solid #ffeb3b', // Border in yellow
                    '&:hover': {
                        backgroundColor: '#f7f4a0', // Light yellow background on hover
                    },
                },
            },
        },
    },
});

export default theme;
