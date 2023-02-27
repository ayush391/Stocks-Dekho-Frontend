import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import TextField from "@mui/material/TextField";  // added
import AllStocks from './pages/AllStocks';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Stock from './pages/Stock';
import SearchBar from './components/searchBar'
import Search from './pages/Search';
import HorizontalCard from './components/HorizontalCard';
import TopGainers from './components/TopGainers';

function App() {


  return (
    
    <div className="App">
        <Search/>
        <TopGainers/>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AllStocks />}></Route>
          <Route path='/:symbol' element={<Stock />}></Route>
          <Route path='/search' element={<Search />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
