import { Card, CardContent, CardHeader, Typography } from '@mui/material'
import React, { useEffect, useState } from 'react'
import TextField from "@mui/material/TextField";
import axios from 'axios';
import { ArrowDownwardRounded, ArrowUpwardRounded } from '@mui/icons-material'
import { Box, Button, List, ListItem, Table, TableBody, TableCell, TableRow } from '@mui/material'

const BASE_URL = 'https://lobster-app-zl2g6.ondigitalocean.app/prices/search'

export default function SearchBar() {
  const [searchQuery, setSearchQuery] = useState('')
  const [stocksData, setStocksData] = useState([])
  const [showSuggest, setShowSuggest] = useState(false)
  const handleSearch = (event) => {
    setSearchQuery(event.target.value)
  }

  useEffect(() => {
    (
      async () => {
        if (searchQuery.length > 0) {
        const url = BASE_URL + '?symbol=' + searchQuery
        const result = await axios.get(url)
        console.log("Res",result)
        setStocksData(result.data.data)
        console.log(stocksData)
        }else{
          setStocksData([])
        }
      }
    )()
  }, [searchQuery])

  const handleQuery = (e) => {
    setSearchQuery(e.target.value)
}

const handleSuggest = (val) => {
    setShowSuggest(val)
}


const RedArrow = () => {
    return (
        <ArrowDownwardRounded fontSize='small' color='red' />
    )
}
const GreenArrow = () => {
    return (
        <ArrowUpwardRounded fontSize='small' color='green' />
    )
}

  return (
    <center>
      <div className="main">

        <Box className="search">
          <TextField
            id="outlined-basic"
            onChange={handleSearch}
            variant="outlined"
            onFocus={() => handleSuggest(true)}
            onBlur={() => handleSuggest(false)}
            
            fullWidth
            label="Search..."
          />
           <Box
            >
                <Card

                    sx={{
                        display: (stocksData.length > 0 && showSuggest) ? 'block' : 'none',
                        position: 'absolute',
                        maxHeight: '500px',
                        overflowY: 'scroll',
                        transform: 'translate(-50%)'
                    }}
                >
                    <CardContent>
                        <Table>
                            <TableBody>
                                {
                                    stocksData.map((stock) => {
                                        return (

                                            <TableRow key={stock.symbol}>
                                                <TableCell component="th" scope="row">
                                                    {stock.symbol}
                                                </TableCell>
                                                <TableCell align="right">₹{parseFloat(stock.lastPrice).toFixed(2)}</TableCell>
                                                <TableCell align="right"
                                                    sx={{
                                                        color: stock.pChange > 0 ? 'green' : 'red',
                                                        fontWeight: ''
                                                    }}>
                                                    <Box sx={{
                                                        display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                        backgroundColor: stock.pChange > 0 ? '#e6f4ea' : '#fce8e6',
                                                        // width: 'max-content',
                                                        borderRadius: '5px',
                                                        padding: '0.5rem 1rem'
                                                    }}>
                                                        {parseFloat(stock.pChange).toFixed(2)}%
                                                        {stock.pChange > 0 ? <GreenArrow /> : <RedArrow />}
                                                    </Box>
                                                </TableCell>
                                            </TableRow>
                                        )
                                    })
                                }
                            </TableBody>
                        </Table>
                    </CardContent>
                </Card>
            </Box>
        </Box>
      </div>
    </center>
  );
}
