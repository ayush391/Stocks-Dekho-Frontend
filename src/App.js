import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import TextField from "@mui/material/TextField";  // added
import AllStocks from './pages/AllStocks';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Stock from './pages/Stock';
import SearchBar from './components/Navbar/SearchBar'
import Search from './components/Navbar/Search';

import { LoginPage } from './pages/Login';

import Navbar from './components/Navbar/Navbar';
import StockPage from './pages/StockPage';
import StockPanel from './components/StockPanel';
import Home from './pages/Home';
import { Profile } from './pages/profile';
import BuyPage from './pages/BuyStock';
import SellPage from './pages/SellStock';

function App() {


  return (

    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<Home />}></Route>
          <Route path='/allstocks' element={<AllStocks />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/:symbol' element={<StockPage />}></Route>
          <Route path='/search' element={<Search />}></Route>
          <Route path='/profile' element={<Profile/>}></Route>
          <Route path='/Buy/:symbol' element={<BuyPage/>}></Route>
          <Route path='/Sell/:symbol' element={<SellPage/>}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
