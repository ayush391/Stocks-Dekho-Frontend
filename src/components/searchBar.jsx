import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TextField from "@mui/material/TextField";
import axios from 'axios';

const BASE_URL = 'http://localhost:8000/prices/search'

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('')
  const [stocksData, setStocksData] = useState([])

  const handleSearch = (event) => {
    setSearchQuery(event.target.value)
  }

  useEffect(() => {
    (
      async () => {
        const url = BASE_URL + '?symbol=' + searchQuery
        const result = await axios.get(url)
        console.log(result)
        setStocksData(result.data.data)
      }
    )()
  }, [searchQuery])

  return (
    <center>
      <div className="main">

        <div className="search">
          <TextField
            id="outlined-basic"
            onChange={handleSearch}
            variant="outlined"
            fullWidth
            label="Search..."
          />
        </div>
      </div>
    </center>
  );
}
