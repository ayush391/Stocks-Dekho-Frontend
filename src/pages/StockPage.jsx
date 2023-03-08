import axios from 'axios';
import { useEffect, useState } from 'react';
import News from '../components/News';
import { Button } from '@chakra-ui/react';
import { Navigate , Link , useParams } from 'react-router-dom';
import LineGraph from '../components/Portfolio/LineGraph';
import { Container, Typography } from '@mui/material';
import { Tabs, TabList, TabPanels, Tab, TabPanel, ChakraProvider } from '@chakra-ui/react'
import BuyComp from '../components/BuyStock';
import SellComp from '../components/SellStock';

// import { StockNews } from '@/app/Component/StocksPage/StockNews';
const StockPage = () => {
    const [stockPriceHistoryList, setStockPriceHistoryList] = useState([])
    const [labelsData, setLabels] = useState([])
    const params = useParams()
    console.log(params)
    const [stockNewsList, setStockNewsList] = useState([])
    const pid =  params.symbol||'Stock'

    
    // console.log('router' ,url)

    const { symbol } = params

    const url = process.env.REACT_APP_BASE_URL + '/graph/' + symbol?.toString()
    const newsUrl = process.env.REACT_APP_BASE_URL + '/news/' + symbol?.toString()

    useEffect(() => {
        async function getStockPriceHistoryList() {
            const response = await axios.get(url)
            let tempLt = []
            let tempLtLabel = []
            response.data.data.forEach((item) => {
                tempLt.push(parseFloat(item['HIGH '].replace(/,/g, '')))
                tempLtLabel.push(item['Date '])
            })

            setStockPriceHistoryList(tempLt)
            setLabels(tempLtLabel)
        }

        async function getStockNews() {
            const response = await axios.get(newsUrl)
            console.log(response.data)
            if (response.data !== null) {
                setStockNewsList(response.data.data.articles)
            }
        }
        if (symbol !== null) {
            getStockPriceHistoryList()
            getStockNews()
        }
    }, [symbol])

    const handleBuyBtn=()=>{
        console.log('Buy Btn')
    }
    const handleSellBtn=()=>{
        console.log('Sell Btn')
        
    }
    const StockDetailCard=()=>{

        return (
            <div>

            </div>
        )
    }


    const BuySell=()=>{

        return (
            <div style={{display:'flex' , flexDirection:'column' , marginTop:30 , marginBottom:10 , fontSize:22 , fontWeight:'bolder'}}>
              <Tabs isFitted variant='enclosed' colorScheme='green'>
                <TabList>
                    <Tab>Buy</Tab>
                    <Tab>Sell</Tab>
                    
                </TabList>
                <TabPanels>
                    <TabPanel>
                        <BuyComp symbol={symbol}/>
                    </TabPanel>
                    <TabPanel>
                        <SellComp symbol={symbol}/>
                    </TabPanel>
                    
                </TabPanels>
            </Tabs>
            </div>
        )
    }

    return (

        <Container maxWidth='md'>
            <Typography variant='h4'>{symbol}</Typography>
            <ChakraProvider>
            <Tabs isFitted variant='enclosed' colorScheme='green'>
                <TabList>
                    <Tab>5D</Tab>
                    <Tab>1M</Tab>
                    <Tab>6M</Tab>
                    <Tab>1Y</Tab>
                    <Tab>2Y</Tab>
                </TabList>
                <TabPanels>
                    <TabPanel>
                    <LineGraph labels={labelsData.slice(0, 5).reverse()} data={stockPriceHistoryList.slice(0, 5).reverse()} />
                    </TabPanel>
                    <TabPanel>
                    <LineGraph labels={labelsData.slice(0, 30).reverse()} data={stockPriceHistoryList.slice(0, 30).reverse()} />
                    </TabPanel>
                    <TabPanel>
                    <LineGraph labels={labelsData.slice(0, 180).reverse()} data={stockPriceHistoryList.slice(0, 180).reverse()} />
                    </TabPanel>
                    <TabPanel>
                    <LineGraph labels={labelsData.slice(0, 365).reverse()} data={stockPriceHistoryList.slice(0, 365).reverse()} />
                    </TabPanel>
                    <TabPanel>
                    <LineGraph labels={labelsData.slice(0, 710).reverse()} data={stockPriceHistoryList.slice(0, 710).reverse()} />
                    </TabPanel>
                    
                </TabPanels>

            </Tabs>
            </ChakraProvider>
            {/* <ChakraProvider>
                <StockCard item={pid} />
                {
                    stockNewsList.map((news) => (
                        <StockNews items={news} />
                    ))
                }

            </ChakraProvider> */}
            <ChakraProvider>
            <BuySell/>
            </ChakraProvider>
            <News />
        </Container>

    )
}

export default StockPage;