import React, { useState, useEffect } from 'react';
import Dialog from '@mui/material/Dialog';
import DialogTitle from '@mui/material/DialogTitle';
import DialogContent from '@mui/material/DialogContent';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import Typography from '@mui/material/Typography';
import { useNavigate } from 'react-router-dom';

export default function PageNotCreated() {
  const [open, setOpen] = useState(true);
  const navigate = useNavigate();

  const handleClose = () => {
    setOpen(false);
  };

  useEffect(() => {
    const timer = setTimeout(() => {
      navigate(-1); // Go back one step
    }, 5000);

    return () => clearTimeout(timer);
  }, [navigate]);

  return (
    <div>
      <Dialog onClose={handleClose} open={open} maxWidth="md" fullWidth>
        <DialogTitle>
          Seems like <span style={{ fontWeight: 'bold', color: 'orange' }}>Page is Under</span> Construction.
          <IconButton
            aria-label="close"
            onClick={handleClose}
            style={{ position: 'absolute', top: '8px', right: '8px', color: 'orange' }}
          >
            <CloseIcon />
          </IconButton>
        </DialogTitle>
        <DialogContent dividers>
          <Typography gutterBottom>
            <span style={{ color: 'orange', fontWeight: 'bold' }}>Thank</span> You...!
          </Typography>
        </DialogContent>
      </Dialog>
    </div>
  );
}
