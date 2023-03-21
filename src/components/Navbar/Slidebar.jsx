import { AccountBox, House, Login, LogoutRounded, VerifiedUser, Wallet } from '@mui/icons-material';
import { List } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { getAuth, signOut } from 'firebase/auth';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { app } from '../Firebase';

export default function TemporaryDrawer({ open, onClose }) {
  const auth = getAuth(app);
  const [user, loading, error] = useAuthState(auth);

  const navigate = useNavigate();

  const checkUser = () => {
    if (user === null) {
      navigate('/login');
      return false;
    }
    return true;
  };

  const Logout = () => {
    if (user != null) {
      signOut(auth)
        .then(() => {
          console.log('logging out');
        })
        .catch((e) => alert(e));
    }
  };

  const NavList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      // onClick={() => toggleDrawer(anchor, false)}
      // onKeyDown={() => toggleDrawer(anchor, false)}
    >
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
          <ListItemButton onClick={() => checkUser() && navigate('/holdings')}>
            <ListItemIcon>
              <Wallet />
            </ListItemIcon>
            <ListItemText>Holdings</ListItemText>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton onClick={() => checkUser() && navigate('/profile')}>
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
    </Box>
  );

  return (
    <>
      <Drawer anchor="left" open={open} onClose={onClose}>
        <NavList />
      </Drawer>
    </>
  );
}
