import { AccountCircle } from '@mui/icons-material';
import { AppBar, Avatar, Button, IconButton, Stack, Toolbar, Typography } from '@mui/material';
import { getAuth, signOut } from 'firebase/auth';
import Hamburger from 'hamburger-react';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { app } from '../Firebase';
import Search from './Search';
import TemporaryDrawer from './Slidebar';

const NavbarHome = () => {
  const [isOpen, setOpen] = useState(false);
  const [loggedIn, setLoggedIn] = useState(false);
  const auth = getAuth(app);
  const [user, loading, error] = useAuthState(auth);

  const Logout = () => {
    if (user != null) {
      signOut(auth)
        .then(() => {
          console.log('logging out');
          setLoggedIn(false);
        })
        .catch((e) => alert(e));
    }
  };
  const LoggedInComponent = () => {
    console.log('photo', user != null && user.photoURL != null ? user.photoURL : '');
    return (
      <IconButton component={Link} to="/profile">
        <Avatar
          style={{ width: 40, height: 40 }}
          src={user?.photoURL ? user.photoURL.toString() : ''}
        />
      </IconButton>
    );
  };
  const RenderComponent = (props) => {
    const user = getAuth(app);
    if (user.currentUser != null) {
      return <LoggedInComponent />;
    } else {
      return (
        <>
          <IconButton
            size="small"
            variant="contained"
            disableElevation
            component={Link}
            to="/login"
            sx={{
              backgroundColor: 'linear-gradient(55deg,#73b9ff,#73b9ff20)'
            }}>
            <AccountCircle fontSize="large" color="info" />
          </IconButton>
        </>
      );
    }
  };
  useEffect(() => {
    if (loading) {
      /* empty */
    } else {
      const user = getAuth(app);
      console.log(user.currentUser);
      if (user.currentUser != null) {
        setLoggedIn(true);
      } else {
        setLoggedIn(false);
      }
    }
  }, [user, loading]);
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
        <Button component={Link} to="/" sx={{ color: '#fff', textDecoration: 'none' }}>
          <Typography variant="h4" fontWeight="bold" textTransform="none" fontFamily="Righteous">
            StoxDekho
          </Typography>
        </Button>
        <Toolbar
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            gap: 3
          }}>
          <Stack direction="row">
            <Hamburger color="white" toggled={isOpen} toggle={setOpen} />
          </Stack>

          <Search />

          <RenderComponent loggedIn={loggedIn} />
        </Toolbar>
        <TemporaryDrawer open={isOpen} onClose={() => setOpen(false)} />
      </AppBar>
    </>
  );
};

export default NavbarHome;
