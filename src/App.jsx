import { CssBaseline, ThemeProvider, createTheme, responsiveFontSizes } from '@mui/material';
import { useContext } from 'react';
import { HashRouter, Route, Routes } from 'react-router-dom';
import './App.css';
import { LoginPage } from './components/LoginPage';
import Navbar from './components/Navbar/Navbar';
import Search from './components/Navbar/Search';
import { SignUpPage } from './components/SignupPage';
import { SectorTab } from './components/Tabs/Sectors';
import AppContext from './context/AppContext';
import { BankHistory } from './pages/BankHistory';
import BuyStock from './pages/BuyStock';
import { ForgetPassword } from './pages/ForgetPassword';
import { HoldingPage } from './pages/Holdings';
import Home from './pages/Home';
import { Portfolio } from './pages/Portoflio';
import SellStock from './pages/SellStock';
import StockPage from './pages/StockPage';
import { TransactionHistory } from './pages/TransactionHistory';
import Profile from './pages/profile';
import createThemeWithMode from './theme';
import SectorPage from './pages/SectorPage';
import YoutubePage from './pages/YoutubePage';
import EditProfile from './pages/EditProfile';
import EventsPage from './pages/Events';

function App() {
  const context = useContext(AppContext);
  const { themeMode } = context;

  const AppTheme = createThemeWithMode(themeMode);
  const theme = responsiveFontSizes(createTheme(AppTheme));

  return (
    <div className="App">
      <HashRouter>
        <ThemeProvider theme={theme}>
          <CssBaseline />
          <Navbar />

          <Routes>
            <Route path="/" element={<Home />}></Route>
            <Route path="/login" element={<LoginPage />}></Route>
            <Route path="/signup" element={<SignUpPage />}></Route>
            <Route path="/forgetpassword" element={<ForgetPassword />}></Route>
            <Route path="/:symbol" element={<StockPage />}></Route>
            <Route path="/search" element={<Search />}></Route>
            <Route path="/profile" element={<Profile />}></Route>
            <Route path="/portfolio" element={<Portfolio />}></Route>
            <Route path="/holdings" element={<HoldingPage />}></Route>
            <Route path="/transactionHistory" element={<TransactionHistory />}></Route>
            <Route path="/bankHistory" element={<BankHistory />}></Route>
            <Route path="/buy/:symbol" element={<BuyStock />}></Route>
            <Route path="/sell/:symbol" element={<SellStock />}></Route>
            <Route path="/test" element={<SectorTab />}></Route>
            <Route path="/SectorPage/:sectorName" element={<SectorPage />}></Route>
            <Route path="/shorts" element={<YoutubePage />}></Route>
            <Route path="/EditProfile" element={<EditProfile />}></Route>
            <Route path="/Events" element={<EventsPage />}></Route>
          </Routes>
        </ThemeProvider>
      </HashRouter>
    </div>
  );
}

export default App;
