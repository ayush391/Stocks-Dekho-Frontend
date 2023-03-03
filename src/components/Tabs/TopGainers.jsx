import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { Card, Container, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/system';
import StockSymbol from '../Table/StockSymbol';
import StockPChange from '../Table/StockPChange';
import StockChange from '../Table/StockChange';
import TableSkeleton from '../Loading/TableSkeleton';
import StockTable from '../Table/StockTable';

const BASE_URL = process.env.REACT_APP_BASE_URL + '/prices/top-gainers'
const LIMIT = 10




const TopGainers = () => {
    const [stocksData, setStocksData] = useState([])

    const [currentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        (
            async () => {
                const url = BASE_URL + '?skip=' + currentPage * LIMIT
                const result = await axios.get(url)
                console.log(result)
                setStocksData(result.data.data)
            }
        )()
    }, [currentPage])


    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNext = () => {
        setCurrentPage(currentPage + 1)
    }



    return (
        <>
            <StockTable stocksData={stocksData} />

        </>
    )
}

export default React.memo(TopGainers)