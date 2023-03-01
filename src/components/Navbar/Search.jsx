import { ArrowDownwardRounded, ArrowUpwardRounded, SearchOff, SearchOutlined } from '@mui/icons-material'
import { Box, Button, Card, CardContent, Input, InputAdornment, List, ListItem, Table, TableBody, TableCell, TableRow, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import StockPChange from '../Table/StockPChange'


const BASE_URL = process.env.REACT_APP_BASE_URL + '/prices/search'

const Search = () => {

  const [stocksData, setStocksData] = useState([])
  const [searchQuery, setSearchQuery] = useState('')
  const [showSuggest, setShowSuggest] = useState(false)


  useEffect(() => {
    const timeout = setTimeout(async () => {
      const url = BASE_URL + '?symbol=' + searchQuery
      if (searchQuery.length > 0) {
        const result = await axios.get(url)
        setStocksData(result.data.data)
      }
      else {
        setStocksData([])
      }
    }, 500)

    return () => clearTimeout(timeout)
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
    <Box
      width='350px'
    >
      <Input
        onChange={handleQuery}
        value={searchQuery}
        onFocus={() => handleSuggest(true)}
        onBlur={() => handleSuggest(false)}
        fullWidth
        disableUnderline
        placeholder="Search..."
        startAdornment={
          <InputAdornment position="start"  >
            <SearchOutlined color='primary' />
          </InputAdornment>
        }
        sx={{
          backgroundColor: '#fff',
          borderRadius: '10px',
          padding: '5px',
        }}
      />
      <Box
        sx={{
          position: 'relative',
        }}
      >
        <Card
          sx={{
            display: (stocksData.length > 0 && showSuggest) ? 'block' : 'none',
            top: '-5px',
            position: 'absolute',
            maxHeight: '500px',
            overflow: 'scroll',
            borderRadius: '20px',
            borderTopLeftRadius: '0',
            borderTopRightRadius: '0',
            width: '100%'

          }}
        >
          <Table>
            <TableBody>
              {stocksData.map((stock) => {
                return (
                  <TableRow key={stock.symbol}>
                    <TableCell component="th" scope="row">
                      {stock.symbol}
                    </TableCell>
                    <TableCell align="right">
                      ₹{parseFloat(stock.lastPrice).toFixed(2)}
                    </TableCell>
                    <TableCell align="right">
                      <StockPChange pChange={stock.pChange} />
                    </TableCell>
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </Card>
      </Box >

    </Box >
  );
};

export default Search;
