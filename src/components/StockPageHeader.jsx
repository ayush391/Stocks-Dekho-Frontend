import { Divider, Stack, Typography } from '@mui/material'
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
                console.log('price' , response.data.data.lastPrice)
                setStockPrice(response.data.data.lastPrice)
                setStockPriceChange(response.data.data.pChange)
            }
        }
        getStockData()
        getStockPrice()
    }, [symbol])
    return (
        <>
            <Stack direction='row' justifyContent='space-between' alignItems='center' paddingY={3}>
                <Stack direction='row' justifyContent='space-between' >
                    <Stack direction='column' justifyContent='flex-start' flex={1}>
                        <Typography variant='h5'>
                            {stockData.symbol}
                        </Typography>
                        <Typography variant='caption'>
                            {stockData.meta?.['NAME OF COMPANY']}
                        </Typography>

                        <Divider sx={{ my: 2 }} />

                        <Stack gap={2}
                            sx={{
                                flexDirection: { md: 'row' },
                                alignItems: { md: 'center' }
                            }}
                        >
                            <Typography variant='h3' >
                                ₹{stockPrice}
                            </Typography>
                            {/* <StockChange change={102.8} /> */}
                            <StockPChange pChange={stockPriceChange} />

                        </Stack>

                        <Typography variant='caption' fontSize='0.9rem' my={2} >
                            {new Date().toUTCString()}
                        </Typography>
                    </Stack>
                </Stack>
                {
                    stockData.icon ?
                        <img height={100} src={stockData.icon}></img>
                        :
                        <StockSymbol symbol={stockData.symbol} />
                }

            </Stack>
        </>
    )
}

export default StockPageHeader