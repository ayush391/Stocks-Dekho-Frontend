import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import TextField from "@mui/material/TextField";  // added
import AllStocks from './pages/AllStocks';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Stock from './pages/Stock';
import SearchBar from './components/searchBar'
import Search from './pages/Search';
import { LoginPage } from './pages/Login';

function App() {


  return (
    
    <div className="App">
        <SearchBar/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AllStocks />}></Route>
          <Route path='/login' element={<LoginPage />}></Route>
          <Route path='/:symbol' element={<Stock />}></Route>
          <Route path='/search' element={<Search />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
