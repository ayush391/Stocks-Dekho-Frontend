import React, { useEffect, useState } from 'react'

import axios from 'axios'
import { Avatar, Button, Card, CardContent, Chip, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import { Box } from '@mui/system';
import TopGainers from '../TopGainers';
import StockSymbol from '../Table/StockSymbol';
import StockPChange from '../Table/StockPChange';
import StockChange from '../Table/StockChange';

const BASE_URL = process.env.REACT_APP_BASE_URL + '/prices/most-active'
const LIMIT = 10




const MostActive = () => {
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
        <Container maxWidth='md' sx={{
            display: 'flex',
            flexDirection: 'column',
            gap: 2, marginTop: '0rem'
        }}>
            <TableContainer component={Card} sx={{ marginTop: '1rem', borderRadius: '20px' }}>
                <Table>
                    <TableBody>
                        {
                            stocksData.map((stock, idx) => {
                                return (
                                    <TableRow key={stock.symbol}>
                                        <TableCell >
                                            <Box sx={{ display: 'flex', gap: 1, fontWeight: 'bold', }}>
                                                <StockSymbol symbol={stock.symbol} idx={idx} />
                                                <Typography
                                                    sx={{
                                                        whiteSpace: 'nowrap', textOverflow: 'ellipsis', overflow: 'hidden'
                                                    }}
                                                >
                                                    {stock.meta ? stock.meta.companyName : stock.symbol}
                                                </Typography>
                                            </Box>
                                        </TableCell>
                                        <TableCell align="right">₹{parseFloat(stock.lastPrice).toFixed(2)}</TableCell>
                                        <TableCell align="right"><StockChange change={stock.change} /></TableCell>
                                        <TableCell align="right">
                                            <StockPChange pChange={stock.pChange} />
                                        </TableCell>
                                    </TableRow>
                                )
                            }
                            )
                        }
                    </TableBody>
                </Table>


            </TableContainer>


        </Container >
    )
}

export default MostActive