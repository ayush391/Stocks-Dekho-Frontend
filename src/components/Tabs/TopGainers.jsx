import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { Card, Container, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/system';
import StockSymbol from '../Table/StockSymbol';
import StockPChange from '../Table/StockPChange';
import StockChange from '../Table/StockChange';
import TableSkeleton from '../Loading/TableSkeleton';
import StockTable from '../Table/StockTable';
import useAllStocks from '../../hooks/StockHooks/useAllStocks';

const BASE_URL = process.env.REACT_APP_BASE_URL + '/prices/top-gainers'
const LIMIT = 10




const TopGainers = () => {
    const { stocksData, loading, error } = useAllStocks('/top-gainers')

    return (
        <>
            <StockTable stocksData={stocksData} />
        </>
    )
}

export default React.memo(TopGainers)