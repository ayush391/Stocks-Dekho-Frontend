import { CssBaseline, ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';
import { Suspense, lazy } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { useAppContext } from './context/AppState';
import createThemeWithMode from './theme';

const LoginPage = lazy(() => import('./components/LoginPage'));
const Search = lazy(() => import('./components/Navbar/Search'));
const SignUpPage = lazy(() => import('./components/SignupPage'));
const BankHistory = lazy(() => import('./pages/BankHistory'));
const BuyStock = lazy(() => import('./pages/BuyStock'));
const EditProfile = lazy(() => import('./pages/EditProfile'));
const EventsPage = lazy(() => import('./pages/Events'));
const ForgetPassword = lazy(() => import('./pages/ForgetPassword'));
const Home = lazy(() => import('./pages/Home'));
const Portfolio = lazy(() => import('./pages/Portoflio'));
const SectorPage = lazy(() => import('./pages/SectorPage'));
const SellStock = lazy(() => import('./pages/SellStock'));
const StockPage = lazy(() => import('./pages/StockPage'));
const TransactionHistory = lazy(() => import('./pages/TransactionHistory'));
const YoutubePage = lazy(() => import('./pages/YoutubePage'));
const Profile = lazy(() => import('./pages/profile'));

const App = () => {
  const { themeMode } = useAppContext();

  const AppTheme = createThemeWithMode(themeMode);
  const theme = responsiveFontSizes(createTheme(AppTheme));

  return (
    <HashRouter>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <Navbar />
        <Suspense fallback="Loading...">
          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/signup" element={<SignUpPage />}></Route>
            <Route path="/forgetpassword" element={<ForgetPassword />}></Route>
            <Route path="/:symbol" element={<StockPage />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
            <Route path="/transactionHistory" element={<TransactionHistory />}></Route>
            <Route path="/bankHistory" element={<BankHistory />}></Route>
            <Route path="/buy/:symbol" element={<BuyStock />}></Route>
            <Route path="/sell/:symbol" element={<SellStock />}></Route>
            <Route path="/SectorPage/:sectorName" element={<SectorPage />}></Route>
            <Route path="/shorts" element={<YoutubePage />}></Route>
            <Route path="/EditProfile" element={<EditProfile />}></Route>
            <Route path="/Events" element={<EventsPage />}></Route>
          </Routes>
        </Suspense>
      </ThemeProvider>
    </HashRouter>
  );
};

export default App;
