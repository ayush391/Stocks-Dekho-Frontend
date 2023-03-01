import { Box } from '@mui/material'
import React from 'react'
import { getRandomColor } from '../../utils/randomColor'

const StockSymbol = ({ symbol, idx }) => {
    return (
        <Box
            sx={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                width: '13ch',
                fontSize: '0.6rem',
                fontFamily: 'Roboto,Arial,sans-serif',
                fontWeight: 'bold',
                color: 'white',
                whiteSpace: 'nowrap',
                backgroundColor: getRandomColor(++idx),
                borderRadius: '5px',
            }}
        >
            {symbol}
        </Box>
    )
}

export default StockSymbol