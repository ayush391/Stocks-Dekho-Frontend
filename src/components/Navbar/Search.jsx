import { ArrowDownwardRounded, ArrowUpwardRounded } from '@mui/icons-material'
import { Box, Button, Card, CardContent, List, ListItem, Table, TableBody, TableCell, TableRow, TextField } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'


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
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        gap: 2
      }}
    >
      <TextField
        id="outlined-basic"
        variant="outlined"

        onChange={handleQuery}
        value={searchQuery}

        onFocus={() => handleSuggest(true)}
        onBlur={() => handleSuggest(false)}

        fullWidth
        label="Search..."
      />
      <CardContent>
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
                  <TableCell
                    align="right"
                    sx={{
                      color: stock.pChange > 0 ? "green" : "red",
                      fontWeight: "",
                    }}
                  >
                    <Box
                      sx={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        backgroundColor:
                          stock.pChange > 0 ? "#e6f4ea" : "#fce8e6",
                        // width: 'max-content',
                        borderRadius: "5px",
                        padding: "0.5rem 1rem",
                      }}
                    >
                      {parseFloat(stock.pChange).toFixed(2)}%
                      {stock.pChange > 0 ? <GreenArrow /> : <RedArrow />}
                    </Box>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </CardContent>
    </Box >
  );
};

export default Search;
