import React, { useState } from 'react';
import { AppBar, Toolbar, IconButton, Typography, Box } from '@mui/material';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import PersonIcon from '@mui/icons-material/Person';
import RequestQuoteIcon from '@mui/icons-material/RequestQuote';
import LogoutIcon from '@mui/icons-material/Logout';
import { Link, useNavigate } from 'react-router-dom';
import LogoutDialog from './LogoutDialog'; 

const styles = {
    navButton: {
        color: '#333',
        backgroundColor: 'white',
        marginBottom: 1,
        borderRadius: 4,
        border: '2px solid transparent',
        '&:hover': {
            borderColor: 'orange',
        },
        fontWeight: 'bold',
        display: 'flex',
        alignItems: 'center',
        padding: '8px 16px',
        cursor: 'pointer',
        position: 'relative',
    },
    icon: {
        marginRight: 1,
    },
    appBar: {
        backgroundColor: 'transparent',
        boxShadow: 'none',
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        padding: 0,
        display: 'flex',
        alignItems: 'center',
    },
    toolbar: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start', // Align items to the right
        width: '100%', // Ensure it takes full width
    },
    typography: {
        fontWeight: 'bold',
    },
    selected: {
        '&::after': {
            content: '""',
            position: 'absolute',
            left: 0,
            top: 0,
            bottom: 0,
            width: '5px',
            backgroundColor: 'orange',
        },
    },
};

function NavigationBar() {
    const [selected, setSelected] = useState('');
    const [openDialog, setOpenDialog] = useState(false);
    const navigate = useNavigate();

    const handleSelect = (button) => {
        if (button === 'logout') {
            setOpenDialog(true);
        } else {
            setSelected(button);
        }
    };

    return (
        <>
            <AppBar sx={styles.appBar}>
                <Toolbar sx={styles.toolbar}>
                    <Box>
                        <Link to="/mymoves" style={{ textDecoration: 'none' }}>
                            <IconButton
                                sx={{
                                    ...styles.navButton,
                                    ...(selected === 'my-moves' && styles.selected),
                                }}
                                aria-label="my-moves"
                                onClick={() => handleSelect('my-moves')}
                            >
                                <LocalShippingIcon sx={styles.icon} />
                                <Typography variant="button" sx={styles.typography}>
                                    My Moves
                                </Typography>
                            </IconButton>
                        </Link>
                        <Link to="/pagenotcreated" style={{ textDecoration: 'none' }}>
                            <IconButton
                                sx={{
                                    ...styles.navButton,
                                    ...(selected === 'my-profile' && styles.selected),
                                }}
                                aria-label="my-profile"
                                onClick={() => handleSelect('my-profile')}
                            >
                                <PersonIcon sx={styles.icon} />
                                <Typography variant="button" sx={styles.typography}>
                                    My Profile
                                </Typography>
                            </IconButton>
                        </Link>
                        <Link to="/pagenotcreated" style={{ textDecoration: 'none' }}>
                            <IconButton
                                sx={{
                                    ...styles.navButton,
                                    ...(selected === 'get-quote' && styles.selected),
                                }}
                                aria-label="get-quote"
                                onClick={() => handleSelect('get-quote')}
                            >
                                <RequestQuoteIcon sx={styles.icon} />
                                <Typography variant="button" sx={styles.typography}>
                                    GET QUOTE
                                </Typography>
                            </IconButton>
                        </Link>
                        <IconButton
                            sx={{
                                ...styles.navButton,
                                ...(selected === 'logout' && styles.selected),
                            }}
                            aria-label="logout"
                            onClick={() => handleSelect('logout')}
                        >
                            <LogoutIcon sx={styles.icon} />
                            <Typography variant="button" sx={styles.typography}>
                                LOGOUT
                            </Typography>
                        </IconButton>
                    </Box>
                </Toolbar>
            </AppBar>
            <LogoutDialog open={openDialog} onClose={() => setOpenDialog(false)} />
        </>
    );
}

export default NavigationBar;
