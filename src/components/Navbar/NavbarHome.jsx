import { AccountCircle, Menu } from '@mui/icons-material';
import {
  AppBar,
  Avatar,
  Button,
  IconButton,
  SwipeableDrawer,
  Toolbar,
  Typography
} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/AppState';
import { LOCAL } from '../../utils/routes';
import SidebarMenu from '../SidebarMenu';
import Search from './Search';

const NavbarHome = () => {
  const { user } = useAppContext();
  const [isOpen, setOpen] = useState(false);
  // console.log('user => ', user);

  const LoggedInComponent = () => {
    return (
      <IconButton component={Link} to={LOCAL.PROFILE}>
        <Avatar
          style={{ width: 40, height: 40 }}
          src={user?.photoURL ? user.photoURL.toString() : ''}
        />
      </IconButton>
    );
  };

  const RenderComponent = () => {
    return (
      <>
        {user ? (
          <LoggedInComponent />
        ) : (
          <IconButton
            size="small"
            variant="contained"
            component={Link}
            to={LOCAL.LOGIN}
            sx={{
              backgroundColor: 'linear-gradient(55deg,#73b9ff,#73b9ff20)'
            }}>
            <AccountCircle fontSize="large" color="info" />
          </IconButton>
        )}
      </>
    );
  };

  return (
    <>
      <AppBar
        position="sticky"
        color="transparent"
        elevation={0}
        sx={{
          top: 0,
          backgroundImage: 'linear-gradient(45deg,#73b9ff,#73b9ff40)',
          backdropFilter: 'blur(5px)'
        }}>
        <Button component={Link} to={LOCAL.EXPLORE} sx={{ color: '#fff', textDecoration: 'none' }}>
          <Typography variant="h4" fontWeight="bold" textTransform="none" fontFamily="Righteous">
            StoxDekho
          </Typography>
        </Button>
        <Toolbar sx={{ justifyContent: 'space-between', gap: 3 }}>
          <IconButton color="white" onClick={setOpen}>
            <Menu fontSize="large" />
          </IconButton>
          <Search />
          <RenderComponent />
        </Toolbar>
      </AppBar>
      <SwipeableDrawer open={isOpen} onClose={() => setOpen(false)} onOpen={() => setOpen(true)}>
        <SidebarMenu />
      </SwipeableDrawer>
    </>
  );
};

export default NavbarHome;
