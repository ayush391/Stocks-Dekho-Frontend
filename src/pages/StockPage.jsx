import axios from 'axios';
import { useEffect, useState } from 'react';
import News from '../components/News';
import { useParams } from 'react-router-dom';
import { LineGraph } from '../components/Portfolio/LineGraph';
import { Container, Typography } from '@mui/material';
// import { StockNews } from '@/app/Component/StocksPage/StockNews';


const StockPage = () => {
    const [stockPriceHistoryList, setStockPriceHistoryList] = useState([])
    const [labelsData, setLabels] = useState([])
    const [stockNewsList, setStockNewsList] = useState([])

    const params = useParams()
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

    return (

        <Container maxWidth='md'>
            <Typography variant='h4'>{symbol}</Typography>
            <LineGraph labels={labelsData.slice(0, 60).reverse()} data={stockPriceHistoryList.slice(0, 60).reverse()} />
            <News />
        </Container>

    )
}

export default StockPage;