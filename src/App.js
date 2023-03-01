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

function App() {


  return (

    <div className="App">
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path='/' element={<StockPanel />}></Route>
          <Route path='/allstocks' element={<AllStocks />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/:symbol' element={<StockPage />}></Route>
          <Route path='/search' element={<Search />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
