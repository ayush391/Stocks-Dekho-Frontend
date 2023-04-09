import {
  AccountBox,
  House,
  Login,
  LogoutRounded,
  VerifiedUser,
  Wallet,
  YouTube
} from '@mui/icons-material';
import { List } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import Switch from '@mui/material/Switch';
import { getAuth, signOut } from 'firebase/auth';
import { useContext, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import AppContext from '../../context/AppContext';
import { app } from '../Firebase';

const Sidebar = ({ open, onClose }) => {
  const context = useContext(AppContext);
  const { themeMode, setThemeMode } = context;

  const auth = getAuth(app);
  const [user] = useAuthState(auth);
  const [switchState, setSwitchState] = useState(false);
  const navigate = useNavigate();

  const checkUser = () => {
    if (!user) {
      navigate('/login');
      return false;
    }
    return true;
  };

  const Logout = () => {
    if (user) {
      signOut(auth)
        .then(() => {
          console.log('logging out');
        })
        .catch((e) => alert(e));
    }
  };

  const NavList = () => (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => navigate('/')}>
            <ListItemIcon>
              <House />
            </ListItemIcon>
            <ListItemText>Home</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => checkUser() && navigate('/YoutubePage')}>
            <ListItemIcon>
              <YouTube />
            </ListItemIcon>
            <ListItemText>Shorts</ListItemText>
            <ListItemText sx={{ color: 'red' }}>Beta</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => checkUser() && navigate('/transactionHistory')}>
            <ListItemIcon>
              <Wallet />
            </ListItemIcon>
            <ListItemText>Transaction History</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => checkUser() && navigate('/portfolio')}>
            <ListItemIcon>
              <VerifiedUser />
            </ListItemIcon>
            <ListItemText>Portfolio</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
      <Divider />
      <List>
        <ListItem disablePadding>
          <ListItemButton onClick={() => checkUser() && navigate('/profile')}>
            <ListItemIcon>
              <AccountBox />
            </ListItemIcon>
            <ListItemText>Profile</ListItemText>
          </ListItemButton>
        </ListItem>
        {user ? (
          <ListItem disablePadding>
            <ListItemButton onClick={Logout}>
              <ListItemIcon>
                <LogoutRounded />
              </ListItemIcon>
              <ListItemText>Logout</ListItemText>
            </ListItemButton>
          </ListItem>
        ) : (
          <ListItem disablePadding>
            <ListItemButton onClick={() => navigate('/login')}>
              <ListItemIcon>
                <Login />
              </ListItemIcon>
              <ListItemText>Login</ListItemText>
            </ListItemButton>
          </ListItem>
        )}
      </List>
      <List>
        <Divider />
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Switch
                defaultChecked={themeMode === 'dark'}
                onClick={() => {
                  themeMode === 'dark' ? setThemeMode('light') : setThemeMode('dark');
                  setSwitchState(!switchState);
                }}
              />
            </ListItemIcon>
            <ListItemText>Dark Theme</ListItemText>
            <ListItemText sx={{ color: 'red' }}>Beta</ListItemText>
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <>
      <Drawer anchor="left" open={open} onClose={onClose}>
        <NavList />
      </Drawer>
    </>
  );
};

export default Sidebar;
