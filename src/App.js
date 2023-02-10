import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import TextField from "@mui/material/TextField";  // added
import AllStocks from './pages/AllStocks';
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import Stock from './pages/Stock';

function App() {


  return (
    
    <div className="App">
      <center>
      <div className="search">
        <TextField
          id="outlined-basic"
          variant="outlined"
          fullWidth
          label="Search"
        />
        </div>
        </center>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<AllStocks />}></Route>
          <Route path='/:symbol' element={<Stock />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
