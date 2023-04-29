import { Suspense, lazy } from 'react';
import { HashRouter, Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import Navbar from './components/Navbar/Navbar';
import { LOCAL } from './utils/routes';

const LoginPage = lazy(() => import('./components/LoginPage'));
const SignUpPage = lazy(() => import('./components/SignupPage'));
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
  return (
    <HashRouter>
      <Navbar />
      <Suspense fallback="Loading...">
        <Routes>
          <Route path="/" element={<Navigate to={LOCAL.EXPLORE} />}></Route>
          <Route path={LOCAL.EVENTS} element={<EventsPage />}></Route>
          <Route path={LOCAL.EXPLORE} element={<Home />}></Route>
          <Route path={LOCAL.FORGOT} element={<ForgetPassword />}></Route>
          <Route path={LOCAL.LOGIN} element={<LoginPage />}></Route>
          <Route path={LOCAL.PORTFOLIO} element={<Portfolio />}></Route>
          <Route path={LOCAL.PROFILE} element={<Profile />}></Route>
          <Route path={`${LOCAL.PROFILE}/edit`} element={<EditProfile />}></Route>
          <Route path={`${LOCAL.SECTORS}/:sectorName`} element={<SectorPage />}></Route>
          <Route path={LOCAL.SIGNUP} element={<SignUpPage />}></Route>
          <Route path={LOCAL.SHORTS} element={<YoutubePage />}></Route>
          <Route path={`${LOCAL.STOCKS}/:symbol`} element={<StockPage />}></Route>
          <Route path={`${LOCAL.STOCKS}/:symbol/buy`} element={<BuyStock />}></Route>
          <Route path={`${LOCAL.STOCKS}/:symbol/sell`} element={<SellStock />}></Route>
          <Route path={LOCAL.TRANSACTION_HISTORY} element={<TransactionHistory />}></Route>
          <Route path="*" element={<div>404! Route Not Found</div>}></Route>
        </Routes>
      </Suspense>
    </HashRouter>
  );
};

export default App;
