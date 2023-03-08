import React from 'react'
import axios from 'axios';
import { useEffect, useState } from 'react';
import LineGraph from '../components/Portfolio/LineGraph';
import { AntTabs } from '../components/Tabs/AntTabs';
import { AntTab } from '../components/Tabs/AntTab';
import { TabPanel } from '../components/Tabs/TabPanel';
import { Box } from '@mui/material';

const PriceHistoryPanel = ({ symbol }) => {
    const [stockPriceHistoryList, setStockPriceHistoryList] = useState([])
    const [labelsData, setLabels] = useState([])
    const [stockNewsList, setStockNewsList] = useState([])


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

    const [value, setValue] = useState(2);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Box>
            <AntTabs variant='scrollable' allowScrollButtonsMobile value={value} onChange={handleChange} aria-label="basic tabs example" sx={{ marginBottom: 2 }}>
                <AntTab label="5D" />
                <AntTab label="1M" />
                <AntTab label="6M" />
                <AntTab label="1Y" />
                <AntTab label="2Y" />
            </AntTabs>
            <TabPanel value={value} index={0} >
                <LineGraph labels={labelsData.slice(0, 5).reverse()} data={stockPriceHistoryList.slice(0, 5).reverse()} />
            </TabPanel>
            <TabPanel value={value} index={1} >
                <LineGraph labels={labelsData.slice(0, 30).reverse()} data={stockPriceHistoryList.slice(0, 30).reverse()} />
            </TabPanel>
            <TabPanel value={value} index={2} >
                <LineGraph labels={labelsData.slice(0, 180).reverse()} data={stockPriceHistoryList.slice(0, 180).reverse()} />
            </TabPanel>
            <TabPanel value={value} index={3} >
                <LineGraph labels={labelsData.slice(0, 710).reverse()} data={stockPriceHistoryList.slice(0, 710).reverse()} />
            </TabPanel>
            <TabPanel value={value} index={4} >
                <LineGraph labels={labelsData.slice(0, 710).reverse()} data={stockPriceHistoryList.slice(0, 710).reverse()} />
            </TabPanel>
        </Box>
    )
}

export default PriceHistoryPanel