import React from 'react'
import { Card, Container, Table, TableBody, TableCell, TableContainer, TableRow, Typography } from '@mui/material';
import { Box } from '@mui/system';
import StockSymbol from '../Table/StockSymbol';
import StockPChange from '../Table/StockPChange';
import StockChange from '../Table/StockChange';
import TableSkeleton from '../Loading/TableSkeleton';
import { Link } from 'react-router-dom';


const StockTable = ({ stocksData }) => {

    return (
        <>
            {
                stocksData.length > 0 ?
                    <TableContainer component={Card} variant='outlined'>
                        <Table>
                            <TableBody>
                                {
                                    stocksData.map((stock, idx) => {
                                        return (
                                            <TableRow key={stock.symbol} component={Link} to={'/' + stock.symbol}>
                                                <TableCell >
                                                    <Box sx={{ display: 'flex', alignItems: 'center', gap: 1, fontWeight: 'bold', }}>
                                                        {
                                                            stock.icon ?
                                                                <img height={50} width={50} src={stock.icon}></img>
                                                                :
                                                                <StockSymbol symbol={stock.symbol} idx={idx} />
                                                        }
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

                    : <TableSkeleton rows={7} columns={4} />
            }
        </>
    )
}

export default StockTable