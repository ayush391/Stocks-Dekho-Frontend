import { Container, Divider, Stack, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import StockPChange from './Table/StockPChange'
import StockSymbol from './Table/StockSymbol'


const StockPageHeader = ({ symbol }) => {
    const stockUrl = process.env.REACT_APP_BASE_URL + '/stocks/' + symbol?.toString()
    const priceUrl = process.env.REACT_APP_BASE_URL + '/prices/' + symbol?.toString()

    const [stockData, setStockData] = useState({})
    const [stockPrice, setStockPrice] = useState(0)
    const [stockPriceChange, setStockPriceChange] = useState(0)

    useEffect(() => {
        async function getStockData() {
            const response = await axios.get(stockUrl)
            console.log(response.data)
            if (response.data !== null) {
                setStockData(response.data.stockDetails)
            }
        }
        async function getStockPrice() {
            const response = await axios.get(priceUrl)
            console.log(response.data)
            if (response.data !== null) {
                console.log('price', response.data.data.lastPrice)
                setStockPrice(response.data.data.lastPrice)
                setStockPriceChange(response.data.data.pChange)
            }
        }
        getStockData()
        getStockPrice()
    }, [symbol])
    return (
        <>
            <Stack alignItems='center' paddingY={5} sx={{
                textAlign: 'center',
                backgroundImage: 'linear-gradient(0deg, #7abbfc60 1%, #7abbfc00 100%)',
                borderRadius: '20px',
                width: '100%',
                paddingY: 3
            }}>

                <Typography variant='h5' fontWeight='bold'>
                    {stockData != null ? stockData.meta?.['NAME OF COMPANY'] : ''}
                </Typography>
                <Typography variant='caption' gutterBottom>
                    {stockData != null ? stockData.symbol : ""}
                </Typography>
                <Stack alignItems='center' sx={{

                }}>

                    {
                        stockData != null && stockData.icon ?
                            <img width={150} src={stockData != null ? stockData.icon : ''}></img>
                            :
                            <StockSymbol symbol={stockData != null ? stockData.symbol : ''} />
                    }

                    <Divider sx={{ my: 2 }} />

                    <Stack gap={2}
                        sx={{
                            flexDirection: { md: 'row' },
                            alignItems: { md: 'center' }
                        }}
                    >
                        <Typography variant='h1' fontWeight='bold'>
                            ₹{stockPrice}
                        </Typography>
                        {/* <StockChange change={102.8} /> */}
                        <StockPChange pChange={stockPriceChange} />

                    </Stack>

                    <Typography variant='caption' fontSize='0.8rem' my={2} >
                        {new Date().toUTCString()}
                    </Typography>
                </Stack>
            </Stack>
        </>
    )
}

export default StockPageHeader