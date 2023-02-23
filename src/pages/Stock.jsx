import { Container, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const defaultStock = {
    "_id": "63d3cf1a9acce2ba9f960905",
    "symbol": "BAJAJ-AUTO",
    "open": 3850,
    "dayHigh": 3995,
    "dayLow": 3830,
    "lastPrice": 3941,
    "previousClose": 3717.4,
    "change": "223.6",
    "pChange": "6.01",
    "totalTradedVolume": 2375899,
    "totalTradedValue": 9362681430.31,
    "lastUpdateTime": "2023-01-27T10:26:45.000Z",
    "yearHigh": 4131.75,
    "ffmc": 445572951642.6,
    "yearLow": 3125,
    "nearWKH": 4.616687844133842,
    "nearWKL": -26.112,
    "perChange365d": "7.16",
    "perChange30d": "3.52",
    "meta": {
        "symbol": "BAJAJ-AUTO",
        "companyName": "Bajaj Auto Limited",
        "industry": "AUTOMOBILES - 2 AND 3 WHEELERS",
        "activeSeries": [
            "EQ"
        ],
        "debtSeries": [],
        "tempSuspendedSeries": [],
        "isFNOSec": true,
        "isCASec": false,
        "isSLBSec": true,
        "isDebtSec": false,
        "isSuspended": false,
        "isETFSec": false,
        "isDelisted": false,
        "isin": "INE917I01010"
    }
}


const Stock = () => {

    const params = useParams()

    const { symbol } = params

    const [stock, setStock] = useState(defaultStock)

    const url = 'https://lobster-app-zl2g6.ondigitalocean.app//stocks/' + symbol

    useEffect(() => {
        (async () => {
            console.log(symbol)
            const result = await axios.get(url)
            setStock(result.data.stockDetails)
        })()
    })

    return (
        <Container maxWidth='md'>
            <Typography variant='h2'>{stock.symbol}</Typography>
            <Typography variant='h6'>{'Company Name =>' + stock.meta.companyName}</Typography>
            <Typography variant='h6'>{'Open Price =>' + stock.meta.open}</Typography>
            {/* <Typography variant='h6'>{'Company Name =>' + stock.meta.companyName}</Typography> */}


        </Container>
    )
}

export default Stock