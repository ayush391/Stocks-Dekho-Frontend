import { ArrowBackOutlined } from '@mui/icons-material';
import { AppBar, IconButton, Toolbar } from '@mui/material';
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
          top: 0
          // backdropFilter: 'blur(5px)'
        }}>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: 3
          }}>
          <IconButton onClick={handleBack} size="large">
            <ArrowBackOutlined color="primary" />
          </IconButton>
        </Toolbar>
      </AppBar>
    </>
  );
};

export default AppNavigation;
