import './App.css';
import AllStocks from './pages/AllStocks';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Search from './components/Navbar/Search';

import { LoginPage } from './pages/Login';

import StockPage from './pages/StockPage';
import Home from './pages/Home';
import Profile from './pages/profile';
import { Portfolio } from './pages/Portoflio';
import { BankHistory } from './pages/BankHistory';
import { TransactionHistory } from './pages/TransactionHistory';
import { Holdings } from './pages/Holdings';
import { ThemeProvider } from '@mui/material';
import AppTheme from './theme';

function App() {


  return (

    <div className="App">
      <BrowserRouter>
        <ThemeProvider theme={AppTheme}>
          <Routes>
            <Route path='/' element={<Home />}></Route>
            <Route path='/allstocks' element={<AllStocks />}></Route>
            <Route path='/login' element={<LoginPage />}></Route>
            <Route path='/:symbol' element={<StockPage />}></Route>
            <Route path='/search' element={<Search />}></Route>
            <Route path='/profile' element={<Profile />}></Route>
            <Route path='/portfolio' element={<Portfolio />}></Route>
            <Route path='/holdings' element={<Holdings />}></Route>
            <Route path='/transactionHistory' element={<TransactionHistory />}></Route>
            <Route path='/bankHistory' element={<BankHistory />}></Route>
          </Routes>
        </ThemeProvider>
      </BrowserRouter>
    </div>
  );
}

export default App;
