import axios from 'axios';
import React, { useEffect, useState } from 'react'
import BuyComp from '../components/BuyStock';
import SellComp from '../components/SellStock';
import { AntTab } from './Tabs/AntTab';
import { AntTabs } from './Tabs/AntTabs';
import { TabPanel } from './Tabs/TabPanel';


const BuySellPanel = ({ symbol }) => {

    const [value, setValue] = useState(0);
    const [stockPrice, setStockPrice] = useState({})
    const priceUrl = process.env.REACT_APP_BASE_URL + '/prices/' + symbol?.toString()

    useEffect(() => {
        async function getStockPrice() {
            const response = await axios.get(priceUrl)
            if (response.data != null) {
                console.log('Price ', response.data)
                setStockPrice(response.data)
            }

        }
        getStockPrice()
    }, [symbol])

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    const handleBuyBtn = () => {
        console.log('Buy Btn')
    }
    const handleSellBtn = () => {
        console.log('Sell Btn')

    }

    return (
        <>
            <AntTabs value={value} onChange={handleChange} aria-label="basic tabs example" sx={{ marginBottom: 2 }}>
                <AntTab label="Buy" />
                <AntTab label="Sell" />
            </AntTabs>
            <TabPanel value={value} index={0} >
                <BuyComp data={stockPrice} />
            </TabPanel>
            <TabPanel value={value} index={1} >
                <SellComp data={stockPrice} />
            </TabPanel>
        </>
    )
}
export default BuySellPanel