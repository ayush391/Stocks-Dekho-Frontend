import { Box } from '@mui/system'
import axios from 'axios';
import React, { useEffect, useState } from 'react'
import HorizontalCard from './HorizontalCard';
import { Typography } from '@mui/material';

const COLORS = ['#f04211', '#e60ac1', '#a4693a', '#3e86f2', '#6bf66f']
const BASE_URL = process.env.REACT_APP_BASE_URL + '/prices/top-gainers'

function TopGainers() {
  const [stocks, setStocks] = useState([]);
  useEffect(() => {
    (async () => {
      const result = await axios.get(BASE_URL);
      setStocks(result.data.data);
      console.log(result);
    })()


  }, [])
  return (
    <>
      <Typography variant="h4" component="div">
        Top-Gainers
      </Typography>
      <Box sx={{
        display: 'flex',
        flex: 1,
        gap: 2
      }}>

        {stocks.map((stock, idx) => {
          console.log({ stock });
          return (
            <HorizontalCard stock={stock} color={COLORS[idx % 5]} ></HorizontalCard>
          )
        })}

      </Box>
    </>

  )
}

export default TopGainers