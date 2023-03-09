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


const StockPChange = ({ pChange, style }) => {
    return (
        <Box sx={{
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            backgroundColor: pChange > 0 ? '#e6f4ea' : '#fce8e6',
            color: pChange > 0 ? 'green' : 'red',
            borderRadius: '5px',
            padding: '0.5rem 0.8rem',
            fontWeight: 'bold',
            ...style
        }}>
            {pChange > 0 ? <GreenArrow /> : <RedArrow />}
            {Math.abs(parseFloat(pChange)).toFixed(2)}%
        </Box>
    )
}

export default StockPChange