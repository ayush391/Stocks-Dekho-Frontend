import { ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../../context/AppState';

const SidebarMenuItem = ({ item }) => {
  const { Icon, link, name, action, onClick } = item;
  const { themeMode, setThemeMode } = useAppContext();
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
              themeMode === 'dark' ? setThemeMode('light') : setThemeMode('dark');
              setSwitchState(!switchState);
            }}
          />
        )}
      </ListItemButton>
    </ListItem>
  );
};

export default SidebarMenuItem;
