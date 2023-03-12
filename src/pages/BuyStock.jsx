import * as React from 'react';

import { FormLabel, Input, Select } from '@chakra-ui/react';

import {
    Stat,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
    ChakraProvider,
} from '@chakra-ui/react'
import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import axios from 'axios';
import { getAuth } from 'firebase/auth';
import { app } from '../components/Firebase';
import ConfirmOrder from '../components/Order/ConfirmOrder';
import { useParams } from 'react-router-dom';
import useStockData from '../hooks/StockHooks/useStockData';
import { Typography } from '@mui/material';
import CircularLoading from '../components/Loading/CircularLoading';

export default function BuyStock(props) {

    const params = useParams()
    const { symbol } = params

    const { stockData, loading, error } = useStockData(symbol)
    // const stockPrice = useStockPrice(symbol)

    const [stockQty, setStockQty] = useState(1)
    const user = getAuth(app)
    const buyUrl = process.env.REACT_APP_BASE_URL + '/transaction/review/buy'

    const [open, setOpen] = useState(false)
    const [orderReview, setOrderReview] = useState({})

    const BuyReview = async () => {
        const response = await axios.post(buyUrl, {
            "userId": user.currentUser.uid,
            "stockSymbol": stockData != null ? stockData.symbol : 'Symbol',
            "quantity": Number(stockQty)
        })
        console.log(response.data)
        setOrderReview(response.data)
        
        setOpen(true)
    }
    const StockVal = () => {
        return (
            <div style={{ marginLeft: 26 }}>
                <StatGroup>
                    <Stat>
                        <StatNumber>{stockData != null ? stockData.lastPrice : 2452}</StatNumber>
                        <StatHelpText>
                            <StatArrow type={stockData != null && stockData.pChange.substring(0, 1) == '-' ? 'decrease' : 'increase'} />
                            {stockData != null ? stockData.pChange : 2452}
                        </StatHelpText>
                    </Stat>
                </StatGroup>
            </div>
        )
    }

    const handleQty = (e) => {
        setStockQty(e.target.value)
    }

    return (
        <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>
            {
                error ? <Typography>An error occured</Typography> :
                    loading ? <CircularLoading /> : <>
                        <div style={{ display: 'flex', flexDirection: 'row' }}>

                            <h1 style={{ textAlign: 'initial', fontSize: 22, fontWeight: 'bold', margin: 10 }}>{"Price"}</h1>

                            <ChakraProvider>
                                <StockVal />
                            </ChakraProvider>
                        </div>
                        <div style={{ display: 'flex', flexDirection: 'row' }} >

                            <FormLabel style={{ marginRight: 10, fontWeight: 'bold', fontSize: 22 }} >QTY</FormLabel>
                            <Input

                                onChange={handleQty}
                                endDecorator={
                                    <React.Fragment>

                                        <Select
                                            variant="plain"
                                            value={'INR'}

                                            sx={{ mr: -1.5, '&:hover': { bgcolor: 'transparent' } }}
                                        >


                                        </Select>
                                    </React.Fragment>
                                }
                                sx={{ width: 300 }}
                            />

                        </div>
                        <p>Buying {stockQty} stock : {stockData != null ? stockData.symbol : 'Symbol'} at {stockData != null ? stockData.lastPrice * stockQty : 2452}</p>
                        <Button style={{ width: '100%', marginRight: 'auto', marginLeft: 'auto', color: 'white', backgroundColor: 'green' }} onClick={BuyReview}> Buy {props.symbol} </Button>
                        <ConfirmOrder onClose={() => setOpen(false)} open={open} icon={stockData != null ? stockData.icon : 'Symbol'} reviewOrder={orderReview} transactionType='buy' />
                    </>
            }
        </div>
    )
}