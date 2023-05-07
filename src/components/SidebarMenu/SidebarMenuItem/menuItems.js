import {
  AccountBox,
  DarkMode,
  House,
  Login,
  LogoutRounded,
  VerifiedUser,
  Wallet,
  YouTube
} from '@mui/icons-material';
import { LOCAL } from '../../../utils/routes';

export const menuItems = (user, logout) => [
  { Icon: House, name: 'Home', link: LOCAL.EXPLORE },
  { Icon: YouTube, name: 'Shorts', link: LOCAL.SHORTS },
  { Icon: Wallet, name: 'Transaction History', link: LOCAL.TRANSACTION_HISTORY },
  { Icon: VerifiedUser, name: 'Portfolio', link: LOCAL.PORTFOLIO },
  { Icon: AccountBox, name: 'Profile', link: LOCAL.PROFILE },
  { divider: true },
  { Icon: DarkMode, name: 'Dark Mode', action: true },
  { Icon: Login, name: 'Login', link: LOCAL.LOGIN, visible: !user },
  { Icon: LogoutRounded, name: 'Logout', onClick: logout, visible: !!user }
];
