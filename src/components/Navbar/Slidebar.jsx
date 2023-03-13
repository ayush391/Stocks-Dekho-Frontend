import { House, VerifiedUser, Wallet } from '@mui/icons-material';
import MailIcon from '@mui/icons-material/Mail';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import { List } from '@mui/material';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import Drawer from '@mui/material/Drawer';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import { Link } from 'react-router-dom';

export default function TemporaryDrawer({ open, onClose }) {
  const NavList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
      // onClick={() => toggleDrawer(anchor, false)}
      // onKeyDown={() => toggleDrawer(anchor, false)}
    >
      <List>
        <Link to="/">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <House />
              </ListItemIcon>
              <ListItemText>Home</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/holdings">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <Wallet />
              </ListItemIcon>
              <ListItemText>Holdings</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
        <Link to="/portfolio">
          <ListItem disablePadding>
            <ListItemButton>
              <ListItemIcon>
                <VerifiedUser />
              </ListItemIcon>
              <ListItemText>Portfolio</ListItemText>
            </ListItemButton>
          </ListItem>
        </Link>
      </List>
      <Divider />
      <List>
        {['Profile', 'Logout'].map((text, index) => (
          <Link key={index} to="/profile">
            <ListItem key={text} disablePadding components={Link} to="/profile">
              <ListItemButton>
                <ListItemIcon>{index % 2 === 0 ? <InboxIcon /> : <MailIcon />}</ListItemIcon>
                <ListItemText primary={text} />
              </ListItemButton>
            </ListItem>
          </Link>
        ))}
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
