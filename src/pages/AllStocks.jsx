import React, { useEffect, useState } from 'react'

import axios from 'axios'
import StockCard from '../components/Card';
import { Avatar, Button, Card, CardContent, Chip, Container, Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, TextField, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { Box } from '@mui/system';
import { ArrowDownward, ArrowDownwardRounded, ArrowUpward, ArrowUpwardRounded } from '@mui/icons-material';
import Search from './Search';

const BASE_URL = 'https://lobster-app-zl2g6.ondigitalocean.app/prices'
const LIMIT = 10

const COLORS = ['#f04211', '#e60ac1', '#a4693a', '#3e86f2', '#6bf66f']

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

const getRandomColor = () => {
    return COLORS[Math.floor(Math.random()) * COLORS.length]
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
            <Button style={{color:'white' , backgroundColor:'lightblue' , width:50 , marginLeft:'auto'}}><Link to='/login'>Login</Link> </Button>
            <Container maxWidth='sm' sx={{

            }}>
            </Container>
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
                                stocksData.map((stock, idx) => {
                                    return (
                                        <TableRow key={stock.symbol}>
                                            <TableCell component="th" scope="row">
                                                <Box sx={{ display: 'flex', gap: 1, }}>
                                                    <Chip
                                                        label={stock.symbol}
                                                        variant='filled'
                                                        size='small'
                                                        sx={{
                                                            width: '25%',
                                                            fontSize: '0.6rem',
                                                            color: 'white',
                                                            backgroundColor: COLORS[idx % COLORS.length]
                                                        }}
                                                    />
                                                    {stock.symbol}
                                                </Box>
                                            </TableCell>
                                            <TableCell align="center">₹{stock.lastPrice}</TableCell>
                                            <TableCell align="center">₹{stock.dayHigh}</TableCell>
                                            <TableCell align="center">₹{stock.dayLow}</TableCell>
                                            <TableCell align="center"
                                                sx={{
                                                    color: stock.pChange > 0 ? 'green' : 'red',
                                                }}>
                                                <Box sx={{
                                                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                                                    backgroundColor: stock.pChange > 0 ? '#e6f4ea' : '#fce8e6',
                                                    borderRadius: '5px',
                                                    padding: '0.5rem 1rem'

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

        </Container >
    )
}

export default AllStocks