import { Box, Container, Tab, Tabs, Typography } from '@mui/material'
import React from 'react'
import MostActive from './Tabs/MostActive';
import TopLoosers from './Tabs/TopLoosers';
import TopGainers from './Tabs/TopGainers';

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
                <Box sx={{ p: 3 }}>
                    <Typography>{children}</Typography>
                </Box>
            )}
        </div>
    );
}

const StockPanel = () => {
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    return (
        <Container maxWidth='md'>
            <Box>
                <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                    <Tab label="Most Active" />
                    <Tab label="Top Gainers" />
                    <Tab label="Top Loosers" />
                </Tabs>
            </Box>
            <TabPanel value={value} index={0}>
                <MostActive />
            </TabPanel>
            <TabPanel value={value} index={1}>
                <TopGainers />
            </TabPanel>
            <TabPanel value={value} index={2}>
                <TopLoosers />
            </TabPanel>
        </Container>
    )
}

export default StockPanel