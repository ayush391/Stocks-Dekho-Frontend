import { background } from '@chakra-ui/react';
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
        variant="outlined"
        position="sticky"
        color="white"
        elevation={0}
        sx={{
          top: 0,
          // backgroundImage: 'linear-gradient(45deg,#73b9ff,#73b9ff20)',
          // backdropFilter: 'blur(5px)'
          backgroundColor:'primary'
        }}>
        <Toolbar
          variant="dense"
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: 3
          }}>
          <Button onClick={handleBack} size="medium">
            <ArrowBackIosNewRounded sx={{ marginRight: 1 }} />
            Back
          </Button>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppNavigation;
