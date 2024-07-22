import React, { useEffect } from 'react';
import { Box, Typography, Button, Paper } from '@mui/material';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';
import { useNavigate } from 'react-router-dom';

const styles = {
    container: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        height: '100vh',
        backgroundColor: '#f0f0f0',
        padding: '20px',
    },
    paper: {
        padding: '40px',
        textAlign: 'center',
        boxShadow: '0px 4px 20px rgba(0, 0, 0, 0.1)',
        backgroundColor: '#ffffff',
        borderRadius: '8px',
    },
    icon: {
        fontSize: '100px',
        color: '#fb6340',
        marginBottom: '20px',
    },
    button: {
        marginTop: '20px',
        backgroundColor: '#fb6340',
        color: 'white',
        '&:hover': {
            backgroundColor: '#e55d33',
        },
    },
};

function NotFound() {
    const navigate = useNavigate();

    useEffect(() => {
        const timer = setTimeout(() => {
            navigate('/');
        }, 3000);
        return () => clearTimeout(timer); // Cleanup the timer if the component unmounts
    }, [navigate]);

    const handleGoHome = () => {
        navigate('/');
    };

    return (
        <Box sx={styles.container}>
            <Paper sx={styles.paper}>
                <WarningAmberIcon sx={styles.icon} />
                <Typography variant="h1">404</Typography>
                <Typography variant="h5" gutterBottom>Oops! That page can't be found.</Typography>
                <Typography variant="body1">It looks like nothing was found at this location.</Typography>
                <Button
                    variant="contained"
                    sx={styles.button}
                    onClick={handleGoHome}
                >
                    Go to Homepage
                </Button>
            </Paper>
        </Box>
    );
}

export default NotFound;
