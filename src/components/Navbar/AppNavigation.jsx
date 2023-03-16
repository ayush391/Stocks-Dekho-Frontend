import { ArrowBackIosNewRounded } from '@mui/icons-material';
import { AppBar, Button, Toolbar } from '@mui/material';
import React from 'react';
import { useNavigate } from 'react-router-dom';

const AppNavigation = () => {
  const navigate = useNavigate();

  const handleBack = () => {
    navigate(-1);
  };

  return (
    <>
      <AppBar
        variant="elevation"
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{
          top: 0,
          backgroundImage: 'linear-gradient(45deg,#73b9ff,#73b9ff20)',
          backdropFilter: 'blur(5px)'
        }}>
        <Toolbar
          variant="dense"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: 3
          }}>
          <Button onClick={handleBack} size="medium" color="white">
            <ArrowBackIosNewRounded color="white" sx={{ marginRight: 1 }} />
            Back
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppNavigation;
