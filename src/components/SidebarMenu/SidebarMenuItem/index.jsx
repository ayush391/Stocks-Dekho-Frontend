import { ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useThemeContext } from '../../../context/ThemeContext';

const SidebarMenuItem = ({ item }) => {
  const { Icon, link, name, action, onClick } = item;
  const { toggleDarkMode } = useThemeContext();
  const [switchState, setSwitchState] = useState(false);

  return (
    <ListItem disablePadding>
      <ListItemButton
        component={link ? Link : 'button'}
        to={link && link}
        onClick={onClick && onClick}>
        <ListItemIcon>
          <Icon />
        </ListItemIcon>
        <ListItemText primary={name} />
        {action && (
          <Switch
            checked={switchState}
            onClick={() => {
              toggleDarkMode();
              setSwitchState(!switchState);
            }}
          />
        )}
      </ListItemButton>
    </ListItem>
  );
};

export default SidebarMenuItem;
