import { Divider, List } from '@mui/material';
import Box from '@mui/material/Box';
import { useAppContext } from '../../context/AppState';
import SidebarMenuItem from './SidebarMenuItem';
import { menuItems } from './SidebarMenuItem/menuItems';
import { signOut } from 'firebase/auth';

const SidebarMenu = () => {
  const { auth, user } = useAppContext();

  const logout = () => signOut(auth);

  return (
    <Box sx={{ width: 250 }} role="presentation">
      <List>
        {menuItems(user, logout).map((item, idx) => {
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
