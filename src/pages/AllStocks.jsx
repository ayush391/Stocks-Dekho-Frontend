import React, { useEffect, useState } from 'react'

import axios from 'axios'
import StockCard from '../components/Card';
import { Avatar, Button, Card, CardContent, Chip, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import { ArrowDownward, ArrowDownwardRounded, ArrowUpward, ArrowUpwardRounded } from '@mui/icons-material';
import Search from '../components/Navbar/Search';
import TopGainers from '../components/TopGainers';
import { getRandomColor } from '../utils/randomColor';

const BASE_URL = process.env.REACT_APP_BASE_URL + '/prices'
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
            gap: 2, marginTop: '0rem'
        }}>
            <Container maxWidth='sm' sx={{

            }}>
            </Container>
            <TableContainer component={Card} sx={{ marginTop: '1rem', borderRadius: '20px' }}>
                <CardContent>
                    <Table>
                        <TableBody>
                            {
                                stocksData.map((stock, idx) => {
                                    return (
                                        <TableRow key={stock.symbol}>
                                            <TableCell component="th" scope="row">
                                                <Box sx={{ display: 'flex', gap: 1, }}>
                                                    <Box
                                                        sx={{
                                                            display: 'flex',
                                                            justifyContent: 'center',
                                                            alignItems: 'center',
                                                            width: '12ch',
                                                            fontSize: '0.6rem',
                                                            fontFamily: 'Roboto,Arial,sans-serif',
                                                            fontWeight: 'bold',
                                                            color: 'white',
                                                            whiteSpace: 'nowrap',
                                                            backgroundColor: getRandomColor(++idx),
                                                            borderRadius: '10px',
                                                        }}
                                                    >
                                                        {stock.symbol}
                                                    </Box>
                                                    {stock.meta ? stock.meta.companyName : stock.symbol}
                                                </Box>
                                            </TableCell>
                                            <TableCell align="right">₹{parseFloat(stock.lastPrice).toFixed(2)}</TableCell>
                                            <TableCell align="right">₹{parseFloat(stock.change).toFixed(2)}</TableCell>
                                            <TableCell align="center"
                                                sx={{
                                                    color: stock.pChange > 0 ? 'green' : 'red',
                                                }}>
                                                <Box sx={{
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                    backgroundColor: stock.pChange > 0 ? '#e6f4ea' : '#fce8e6',
                                                    borderRadius: '5px',
                                                    padding: '0.5rem 1rem',
                                                    fontWeight: 'bold'
                                                }}>
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

            <TopGainers />

        </Container >
    )
}

export default AllStocks