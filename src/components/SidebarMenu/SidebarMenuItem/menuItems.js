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

export const menuItems = (user) => [
  { Icon: House, name: 'Home', link: '/' },
  { Icon: YouTube, name: 'Shorts', link: '/shorts' },
  { Icon: Wallet, name: 'Transaction History', link: '/transactionHistory' },
  { Icon: VerifiedUser, name: 'Portfolio', link: '/portfolio' },
  { Icon: AccountBox, name: 'Profile', link: '/profile' },
  { divider: true },
  { Icon: DarkMode, name: 'Dark Mode', link: '/', action: true },
  { Icon: Login, name: 'Login', link: '/', visible: !user },
  { Icon: LogoutRounded, name: 'Logout', link: '/', visible: !!user }
];
