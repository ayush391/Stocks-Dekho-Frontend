import { ArrowDownwardRounded, ArrowUpwardRounded, SearchOff, SearchOutlined } from '@mui/icons-material'
import { Box, Button, Card, CardContent, ClickAwayListener, Input, InputAdornment, List, ListItem, MenuItem, Stack, Table, TableBody, TableCell, TableRow, TextField, Typography } from '@mui/material'
import { handleBreakpoints } from '@mui/system'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
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

  return (
    <ClickAwayListener onClickAway={() => handleSuggest(false)}
    >

      <Box
        width='350px'
      >
        <Input
          onChange={handleQuery}
          value={searchQuery}
          onFocus={() => handleSuggest(true)}
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
              overflowY: 'scroll',
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
                    <TableRow key={stock.symbol} component={Link} to={'/' + stock.symbol} onClickCapture={() => handleSuggest(false)}
                      sx={{
                        '&:hover': {
                          backgroundColor: '#00000010'
                        }
                      }}
                    >
                      <TableCell component="th" scope="row">
                        <Stack>
                          {stock.symbol}
                          <Typography variant='caption'>
                            {stock.meta?.companyName}
                          </Typography>
                        </Stack>
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
                <TableRow>
                  <TableCell>
                    <Typography variant='caption'>
                      No more results found
                    </Typography>
                  </TableCell>
                </TableRow>
              </TableBody>
            </Table>
          </Card>
        </Box >

      </Box >
    </ClickAwayListener>

  );
};

export default Search;
