import React, { useState } from 'react';
import {
    Box,
    TextField,
    Button,
    Typography,
    Link,
    InputAdornment,
    IconButton,
} from '@mui/material';
import EmailIcon from '@mui/icons-material/Email';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import { useNavigate } from 'react-router-dom';
import BoxigoLogo from './logo.png';

const styles = {
    logo: {
        width: 80,
        height: 80,
        marginBottom: '10px',
    },
    container: {
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        minHeight: '100vh',
        backgroundColor: '#ffffff',
        position: 'relative',
        paddingBottom: '60px', 
    },
    formBox: {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        width: '90%',
        maxWidth: 350,
        backgroundColor: '#ffffff',
        borderRadius: 2,
        boxShadow: 4,
        padding: 4,
        marginTop: '180px', 
    },
    heading: {
        fontSize: '1rem',
        textAlign: 'center',
        color: '#666',
        marginBottom: '16px',
        fontWeight: 'bold',
    },
    textField: {
        fontSize: '0.875rem',
        marginBottom: '16px',
    },
    button: {
        mt: 4,
        backgroundColor: '#fb6340',
        color: 'white',
        '&:hover': {
            backgroundColor: '#fb6340',
            opacity: 0.9,
        },
        fontSize: '0.875rem',
        width: '40%',
        margin: '0 auto',
        display: 'block',
    },
    link: {
        fontSize: '0.90rem',
        color: 'black',
        fontWeight: 'bold',
        textDecoration: 'none',
        '&:hover': {
            color: '#fb6340',
        },
    },
    welcomeText: {
        whiteSpace: 'nowrap', 
    },
};

function Loginpg() {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const [emailError, setEmailError] = useState('');
    const [passwordError, setPasswordError] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();
        let valid = true;

        if (!email) {
            setEmailError('Email is required');
            valid = false;
        } else if (!/\S+@\S+\.\S+/.test(email)) {
            setEmailError('Email is not valid');
            valid = false;
        } else {
            setEmailError('');
        }

        if (!password) {
            setPasswordError('Password is required');
            valid = false;
        } else if (password.length < 6) {
            setPasswordError('Password must be at least 6 characters long');
            valid = false;
        } else {
            setPasswordError('');
        }

        if (valid) {
            console.log('Email:', email);
            console.log('Password:', password);
            navigate('/navigationBar'); 
        }
    };

    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    return (
        <Box sx={styles.container}>
            <Box
                sx={{
                    position: 'absolute',
                    top: 20, 
                    left: '50%',
                    transform: 'translateX(-50%)',
                    textAlign: 'center',
                }}
            >
                <img src={BoxigoLogo} alt="Boxigo Logo" style={styles.logo} />
                <Typography variant="h4" component="h1" gutterBottom sx={styles.welcomeText}>
                    Welcome to Boxigo!
                </Typography>
                <Typography variant="body1" sx={styles.welcomeText}>
                    Pack your emotions with us
                </Typography>
            </Box>
            <Box
                sx={styles.formBox}
                component="form"
                onSubmit={handleSubmit}
            >
                <Typography variant="body1" align="center" sx={styles.heading}>
                    Admin Login
                </Typography>
                <TextField
                    label="Email Id"
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <EmailIcon />
                            </InputAdornment>
                        ),
                    }}
                    sx={styles.textField}
                    error={!!emailError}
                    helperText={emailError}
                />
                <TextField
                    label="Password"
                    type={showPassword ? 'text' : 'password'}
                    variant="outlined"
                    margin="normal"
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                <LockOpenIcon />
                            </InputAdornment>
                        ),
                        endAdornment: (
                            <InputAdornment position="end">
                                <IconButton
                                    aria-label="toggle password visibility"
                                    onClick={handleClickShowPassword}
                                    edge="end"
                                >
                                    {showPassword ? <VisibilityOff /> : <Visibility />}
                                </IconButton>
                            </InputAdornment>
                        ),
                    }}
                    sx={styles.textField}
                    error={!!passwordError}
                    helperText={passwordError}
                />
                <Button
                    type="submit"
                    variant="contained"
                    sx={styles.button}
                >
                    Log In
                </Button>
                <Typography variant="body2" align="center" sx={{ mt: 3, fontSize: '0.875rem' }}>
                    Not a member?{' '}
                    <Link
                        to="/pagenotcreated"
                        sx={styles.link}
                    >
                        Register Here
                    </Link>
                </Typography>
            </Box>
        </Box>
    );
}

export default Loginpg;
