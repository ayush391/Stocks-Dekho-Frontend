import React, { useState } from 'react'
import BuyComp from '../components/BuyStock';
import SellComp from '../components/SellStock';
import { AntTab } from './Tabs/AntTab';
import { AntTabs } from './Tabs/AntTabs';
import { TabPanel } from './Tabs/TabPanel';


const BuySellPanel = ({ symbol }) => {

    const [value, setValue] = useState(0);

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
                <BuyComp symbol={symbol} />
            </TabPanel>
            <TabPanel value={value} index={1} >
                <SellComp symbol={symbol} />
            </TabPanel>
        </>
    )
}
export default BuySellPanel