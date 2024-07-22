import React, { useEffect } from 'react';
import Draggable from 'react-draggable';
import { Dialog, DialogTitle, DialogContent, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const styles = {
    dialogPaper: {
        minWidth: 300,
        backgroundColor: 'white',
        boxShadow: '0 4px 8px rgba(0, 0, 0, 0.2)', 
    },
    dialogTitle: {
        cursor: 'move',
        backgroundColor: '#f5f5f5',
        padding: '16px',
    },
    dialogContent: {
        textAlign: 'center',
        padding: '20px',
        backgroundColor: 'white',
    },
    message: {
        marginTop: '20px',
    },
};

function LogoutDialog({ open, onClose }) {
    const navigate = useNavigate();

    useEffect(() => {
        if (open) {
            const timer = setTimeout(() => {
                navigate('/'); // Redirect to home page
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [open, navigate]);

    return (
        <Dialog
            open={open}
            onClose={onClose}
            PaperComponent={(props) => (
                <Draggable>
                    <div {...props} />
                </Draggable>
            )}
            PaperProps={{
                sx: styles.dialogPaper,
            }}
            onBackdropClick={onClose}
            maxWidth="xs" 
            fullWidth
        >
            <DialogTitle sx={styles.dialogTitle}>Logged Out</DialogTitle>
            <DialogContent sx={styles.dialogContent}>
                <Typography variant="h6" sx={styles.message}>
                    Logged out successfully!
                </Typography>
            </DialogContent>
        </Dialog>
    );
}

export default LogoutDialog;
