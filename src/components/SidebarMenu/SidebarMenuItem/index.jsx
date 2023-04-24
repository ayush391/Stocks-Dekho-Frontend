import { ListItem, ListItemButton, ListItemIcon, ListItemText, Switch } from '@mui/material';
import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import AppContext from '../../../context/AppContext';

const SidebarMenuItem = ({ item }) => {
  const { Icon, link, name, action } = item;
  const context = useContext(AppContext);
  const { themeMode, setThemeMode } = context;
  const [switchState, setSwitchState] = useState(false);

  return (
    <ListItem disablePadding>
      <ListItemButton component={Link} to={link}>
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
