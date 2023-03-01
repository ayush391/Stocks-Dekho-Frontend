import { Box, Container, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'
import MostActive from './Tabs/MostActive';
import TopLoosers from './Tabs/TopLoosers';
import TopGainers from './Tabs/TopGainers';
import { BarChart, TrendingDown, TrendingUp } from '@mui/icons-material';

import { styled } from '@mui/material/styles';

const AntTabs = styled(Tabs)({
    borderBottom: '1px solid #e8e8e8',
    '& .MuiTabs-indicator': {
        display: 'none',
        backgroundColor: '#1890ff',
    },
});

const AntTab = styled(Tab)({
    borderRadius: '10px',
    '&.Mui-selected': {
        backgroundImage: 'linear-gradient(0deg,#73b9ff30,#73b9ff00)',
    },
});

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <div
            role="tabpanel"
            hidden={value !== index}
            id={`simple-tabpanel-${index}`}
            aria-labelledby={`simple-tab-${index}`}
            {...other}
        >
            {value === index && (
                <>
                    {children}
                </>
            )}
        </div>
    );
}

const StockPanel = () => {
    const [value, setValue] = React.useState(1);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container maxWidth='md'>
            <AntTabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
                <AntTab iconPosition='start' icon={<TrendingUp color='success' />} label="Top Gainers" />
                <AntTab iconPosition='start' icon={<BarChart color='grey' />} label="Most Active" />
                <AntTab iconPosition='start' icon={<TrendingDown color='error' />} label="Top Loosers" />
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
        </Container>
    )
}

export default StockPanel