import { Suspense, lazy } from 'react';
import { Navigate, Route, Routes } from 'react-router-dom';
import './App.css';
import RequireAuth from './RequireAuth';
import Navbar from './components/Navbar/Navbar';
import Auth from './pages/auth';
import { LOCAL } from './utils/routes';

const BuyStock = lazy(() => import('./pages/BuyStock'));
const EditProfile = lazy(() => import('./pages/EditProfile'));
const EventsPage = lazy(() => import('./pages/Events'));
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
    <>
      <Navbar />
      <Suspense fallback="Loading...">
        <Routes>
          <Route path="/*" element={<Auth />} />
          <Route path="/" element={<Navigate to={LOCAL.EXPLORE} />} />
          <Route path={LOCAL.EVENTS} element={<EventsPage />} />
          <Route path={LOCAL.EXPLORE} element={<Home />} />
          <Route path={`${LOCAL.SECTORS}/:sectorName`} element={<SectorPage />} />
          <Route path={LOCAL.SHORTS} element={<YoutubePage />} />
          <Route path={`${LOCAL.STOCKS}/:symbol`} element={<StockPage />} />
          <Route element={<RequireAuth />}>
            <Route path={LOCAL.PORTFOLIO} element={<Portfolio />} />
            <Route path={LOCAL.PROFILE} element={<Profile />} />
            <Route path={`${LOCAL.PROFILE}/edit`} element={<EditProfile />} />
            <Route path={`${LOCAL.STOCKS}/:symbol/buy`} element={<BuyStock />} />
            <Route path={`${LOCAL.STOCKS}/:symbol/sell`} element={<SellStock />} />
            <Route path={LOCAL.TRANSACTION_HISTORY} element={<TransactionHistory />} />
          </Route>
          <Route path="*" element={<div>404! Route Not Found</div>} />
        </Routes>
      </Suspense>
    </>
  );
};

export default App;
