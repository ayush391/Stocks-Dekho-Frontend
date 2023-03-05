import * as React from 'react';
import Box from '@mui/material/Box';
import Drawer from '@mui/material/Drawer';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import Divider from '@mui/material/Divider';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';
import InboxIcon from '@mui/icons-material/MoveToInbox';
import MailIcon from '@mui/icons-material/Mail';
import { Profile } from '../../pages/profile';
import { Link , useNavigate } from 'react-router-dom'

export default function TemporaryDrawer() {
  const [state, setState] = React.useState({
    top: false,
    left: true,
    bottom: false,
    right: false,
  });
  const navigate = useNavigate()
  const toggleDrawer = (anchor, open) => (event) => {
    // console.log('toggle drwaer' , open)
    if (event.type === 'keydown' && (event.key === 'Tab' || event.key === 'Shift')) {
      return;
    }

    setState({ ...state, [anchor]: open });
  };
  const handleNav = (event) =>{
    // Do whatever you need to do then push to the new page
    console.log('handle navbar')
    navigate('/profile')
    console.log('handle navbar')
  }

  const list = (anchor) => (
    <Box
      sx={{ width: anchor === 'top' || anchor === 'bottom' ? 'auto' : 250 }}
      role="presentation"
      onClick={toggleDrawer(anchor, false)}
      onKeyDown={toggleDrawer(anchor, false)}

    >
      <List>
        
      <ListItem key={'Home'} disablePadding >
        <ListItemButton>
          <ListItemIcon>
          <MailIcon />
          </ListItemIcon>
          <ListItemText primary={'Home'} />
        </ListItemButton>
      </ListItem>
  
      </List>
      <Divider />
      <List>
      
      <ListItem key={'Profile'}   > 
        <ListItemButton  onClick={handleNav}>
          <ListItemIcon>
            <InboxIcon /> 
          </ListItemIcon>
          <ListItemText primary={'Profile'} />
        </ListItemButton>
      </ListItem>
      
      </List>
    </Box>
  );

  return (
    <div >
      {['left'].map((anchor) => (
        <React.Fragment key={anchor} >
          
          <Drawer
            anchor={anchor}
            open={state[anchor]}
            // onClose={toggleDrawer(anchor, false)}
            
          >
            {list(anchor)}
          </Drawer>
        </React.Fragment>
      ))}
    </div>
  );
}