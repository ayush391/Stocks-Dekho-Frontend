import { Box, Container, Tab, Tabs, Typography } from '@mui/material'
import React, { useMemo } from 'react'
import MostActive from './Tabs/MostActive';
import TopLoosers from './Tabs/TopLoosers';
import TopGainers from './Tabs/TopGainers';
import { BarChart, TrendingDown, TrendingUp } from '@mui/icons-material';

import { styled } from '@mui/material/styles';
import News from './News';
import { AntTabs } from './Tabs/AntTabs';
import { AntTab } from './Tabs/AntTab';
import { TabPanel } from './Tabs/TabPanel';

const StockPanel = () => {
    const [value, setValue] = React.useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <>
            <AntTabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                <AntTab iconPosition='top' icon={<TrendingUp color='success' />} label="Top Gainers" />
                <AntTab iconPosition='top' icon={<BarChart color='grey' />} label="Most Active" />
                <AntTab iconPosition='top' icon={<TrendingDown color='error' />} label="Top Loosers" />
            </AntTabs>
            <TabPanel value={value} index={0} >
                <TopGainers />
            </TabPanel>
            <TabPanel value={value} index={1} >
                <MostActive />
            </TabPanel>
            <TabPanel value={value} index={2} >
                <TopLoosers />
            </TabPanel>
        </>
    )
}

export default StockPanel