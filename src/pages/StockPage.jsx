'use client'
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Bar, Line } from 'react-chartjs-2';
import { CategoryScale, Chart, registerables } from 'chart.js'
import { StockNews } from '../components/News/NewsCard';
import { ChakraProvider } from '@chakra-ui/react'
import { StockCard } from '../components/News/NewsCard';
import News from '../components/News';
import { Button } from '@mui/material';
import { Navigate , Link , useParams } from 'react-router-dom';
// import { StockNews } from '@/app/Component/StocksPage/StockNews';

const StockPage = () => {
    const [stockPriceHistoryList, setStockPriceHistoryList] = useState([])
    const [labelsData, setLabels] = useState([])
    const params = useParams()
    console.log(params)
    const [stockNewsList, setStockNewsList] = useState([])
    const pid =  params.symbol||'Stock'
    const url = 'http://localhost:8000/graph/' + pid?.toString()
    const newsUrl = 'http://localhost:8000/news/' + pid?.toString()
    
    // console.log('router' ,url)

    useEffect(() => {
        async function getStockPriceHistoryList() {
            const response = await axios.get(url)
            // console.log()
            let tempLt = []
            let tempLtLabel = []
            response.data.data.map((item) => {
                tempLt.push(parseFloat(item['HIGH '].replace(/,/g, '')))
                tempLtLabel.push(item['Date '])
            })
            // console.log('data' , tempLt)
            // console.log('label' , tempLtLabel)
            setStockPriceHistoryList(tempLt)
            setLabels(tempLtLabel)
        }

        async function getStockNews() {
            const response = await axios.get(newsUrl)
            // console.log(response.data)
            if (response.data != null) {
                setStockNewsList(response.data.data.articles)

            }
        }
        getStockPriceHistoryList()
        getStockNews()
    }, [pid])

    const data = {
        labels: labelsData.slice(0, 60).reverse(),
        datasets: [
            {
                label: 'high stock prices',
                borderRadius: 30,
                data: stockPriceHistoryList.slice(0, 60).reverse(),
                barThickness: 10,
                backgroundColor: "rgba(1,166,255,1)",
            }
        ]
    }
    Chart.register(CategoryScale, ...registerables)

    const handleBuyBtn=()=>{
        console.log('Buy Btn')
    }
    const handleSellBtn=()=>{
        console.log('Sell Btn')
        
    }
    const BuySell=()=>{

        return (
            <div style={{display:'flex' , flexDirection:'row' , marginTop:30 , marginBottom:10 , fontSize:22 , fontWeight:'bolder'}}>
                <Link  style={{width:'50%' , }} to={'/Sell/'+ pid||'symbol'}><Button style={{width:'100%' , color:'white' , backgroundColor:'red'}} onClick={handleSellBtn}>Sell</Button></Link>
                <Link  style={{width:'50%' , }} to={'/Buy/'+pid||'symbol'}><Button style={{width:'100%' , color:'white' , backgroundColor:'green'}} onClick={handleBuyBtn}>Buy</Button></Link>
            </div>
        )
    }

    return (

        <div style={{ width: '50%', minWidth: 400, marginRight: 'auto', marginLeft: 'auto' }}>
            <h1 style={{ fontWeight: 'bold', fontSize: 22 }}>{pid}</h1>
            <Line data={data} height={200} style={{ border: "1px solid", padding: 15, borderRadius: 10 }} />
            <News />
            {/* <ChakraProvider>
                <StockCard item={pid} />
                {
                    stockNewsList.map((news) => (
                        <StockNews items={news} />
                    ))
                }

            </ChakraProvider> */}
            <BuySell/>
        </div>

    )
}

export default StockPage;