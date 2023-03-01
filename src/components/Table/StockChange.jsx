import { ArrowDownwardRounded, ArrowUpwardRounded } from '@mui/icons-material'
import { Box } from '@mui/material'
import React from 'react'

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


const StockChange = ({ change }) => {
    return (
        <Box sx={{
            display: 'flex', alignItems: 'flex-end', justifyContent: 'center',
            color: change > 0 ? 'green' : 'red',
            borderRadius: '5px',
            padding: '0.5rem 0.8rem',
            fontWeight: 'bold',
        }}>
            {change > 0 ? '+' : '-'}₹{Math.abs(parseFloat(change)).toFixed(2)}
        </Box>
    )
}

export default StockChange