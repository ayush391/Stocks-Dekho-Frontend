import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { List, Paper } from '@mui/material';
import { House, Pages, Report, VerifiedUser, Wallet } from '@mui/icons-material';

export default function TemporaryDrawer({ open, onClose }) {

  const NavList = () => (
    <Box
      sx={{ width: 250 }}
      role="presentation"
    // onClick={() => toggleDrawer(anchor, false)}
    // onKeyDown={() => toggleDrawer(anchor, false)}
    >
      <List>
        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <House />
            </ListItemIcon>
            <ListItemText>
              Home
            </ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <Wallet />
            </ListItemIcon>
            <ListItemText>
              Holdings
            </ListItemText>
          </ListItemButton>
        </ListItem>

        <ListItem disablePadding>
          <ListItemButton>
            <ListItemIcon>
              <VerifiedUser />
            </ListItemIcon>
            <ListItemText>
              Portfolio
            </ListItemText>
          </ListItemButton>
        </ListItem>

      </List>
      <Divider />
      <List>
        {['Profile', 'Logout'].map((text, index) => (
          <ListItem key={text} disablePadding>
            <ListItemButton>
              <ListItemIcon>
                {index % 2 === 0 ? <InboxIcon /> : <MailIcon />}
              </ListItemIcon>
              <ListItemText primary={text} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Box>
  );

  return (
    <>
      <Drawer
        anchor='left'
        open={open}
        onClose={onClose}
      >
        <NavList />
      </Drawer>
    </>
  );
}