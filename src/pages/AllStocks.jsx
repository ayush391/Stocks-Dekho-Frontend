import React, { useEffect, useState } from 'react'

import axios from 'axios'
import StockCard from '../components/Card';
import { Button, Card, CardContent, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import { ArrowDownward, ArrowDownwardRounded, ArrowUpward, ArrowUpwardRounded } from '@mui/icons-material';

const BASE_URL = 'http://localhost:8000/prices'
const LIMIT = 10


const RedArrow = () => {
    return (
        <ArrowDownwardRounded color='red' />
    )
}
const GreenArrow = () => {
    return (
        <ArrowUpwardRounded color='green' />
    )
}

const AllStocks = () => {
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
            gap: 2
        }}>
            <TableContainer component={Card} sx={{ marginTop: '1rem', borderRadius: '20px' }}>
                <CardContent>
                    <Table>
                        <TableHead>
                            <TableRow>
                                <TableCell>
                                    <Typography fontWeight='bold'>
                                        Stock
                                    </Typography>
                                </TableCell>

                                <TableCell align="center">
                                    <Typography fontWeight='bold'>
                                        Price
                                    </Typography>
                                </TableCell>

                                <TableCell align="center">
                                    <Typography fontWeight='bold'>
                                        Day High
                                    </Typography>
                                </TableCell>

                                <TableCell align="center">
                                    <Typography fontWeight='bold'>
                                        Day Low
                                    </Typography>
                                </TableCell>

                                <TableCell align="center">
                                    <Typography fontWeight='bold'>
                                        Change
                                    </Typography>
                                </TableCell>
                            </TableRow>
                        </TableHead>
                        <TableBody>
                            {
                                stocksData.map((stock) => {
                                    return (
                                        <TableRow key={stock.symbol}>
                                            <TableCell component="th" scope="row">
                                                {stock.symbol}
                                            </TableCell>
                                            <TableCell align="center">₹{stock.lastPrice}</TableCell>
                                            <TableCell align="center">₹{stock.dayHigh}</TableCell>
                                            <TableCell align="center">₹{stock.dayLow}</TableCell>
                                            <TableCell align="center"
                                                sx={{
                                                    color: stock.pChange > 0 ? 'green' : 'red'
                                                }}>
                                                <Box sx={{ display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                                                    {stock.pChange}%
                                                    {stock.pChange > 0 ? <GreenArrow /> : <RedArrow />}
                                                </Box>
                                            </TableCell>
                                        </TableRow>
                                    )
                                }
                                )
                            }
                        </TableBody>
                    </Table>
                    <Box sx={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 2 }}>
                        <Typography variant='caption' color='grey'>{(currentPage * 10) + 1}-{(currentPage * 10) + LIMIT}</Typography>

                        <Box sx={{ display: 'flex', gap: 2 }}>
                            <Button variant='contained' onClick={handlePrev}>Prev</Button>
                            <Button variant='contained' onClick={handleNext}>Next</Button>
                        </Box>
                    </Box>
                </CardContent>

            </TableContainer>

        </Container >
    )
}

export default AllStocks