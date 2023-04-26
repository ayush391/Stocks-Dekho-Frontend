import { Divider, List } from '@mui/material';
import Box from '@mui/material/Box';
import { useAppContext } from '../../context/AppState';
import SidebarMenuItem from './SidebarMenuItem';
import { menuItems } from './SidebarMenuItem/menuItems';

const SidebarMenu = () => {
  const { user } = useAppContext();

  return (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {menuItems(user).map((item, idx) => {
          if (item.divider) return <Divider key={idx} sx={{ my: 1 }} />;
          if (item.visible === undefined || item.visible)
            return <SidebarMenuItem key={item.name} item={item} />;
          return null;
        })}
      </List>
    </Box>
  );
};

export default SidebarMenu;
