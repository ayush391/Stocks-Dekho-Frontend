import { BarChart, TrendingDown, TrendingUp } from '@mui/icons-material';
import React from 'react';
import { AntTab } from './Tabs/AntTab';
import { AntTabs } from './Tabs/AntTabs';
import MostActive from './Tabs/MostActive';
import { TabPanel } from './Tabs/TabPanel';
import TopGainers from './Tabs/TopGainers';
import TopLoosers from './Tabs/TopLoosers';

const StockPanel = () => {
  const [value, setValue] = React.useState(1);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <AntTabs value={value} onChange={handleChange} aria-label="basic tabs example" centered>
        <AntTab iconPosition="top" icon={<TrendingUp color="success" />} label="Top Gainers" />
        <AntTab iconPosition="top" icon={<BarChart color="grey" />} label="Most Active" />
        <AntTab iconPosition="top" icon={<TrendingDown color="error" />} label="Top Loosers" />
      </AntTabs>
      <TabPanel value={value} index={0}>
        <TopGainers />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <MostActive />
      </TabPanel>
      <TabPanel value={value} index={2}>
        <TopLoosers />
      </TabPanel>
    </>
  );
};

export default StockPanel;
