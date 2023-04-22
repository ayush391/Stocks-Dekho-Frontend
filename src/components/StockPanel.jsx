import { BarChart, TrendingDown, TrendingUp } from '@mui/icons-material';
import { useState } from 'react';
import { useData } from '../hooks/useData';
import { REMOTE } from '../utils/remoteRoutes';
import StockTable from './Table/StockTable';
import { AntTab } from './Tabs/AntTab';
import { AntTabs } from './Tabs/AntTabs';
import { TabPanel } from './Tabs/TabPanel';

const tabs = [
  { label: 'Top Gainers', icon: <TrendingUp color="success" />, queryKey: 'top-gainers' },
  { label: 'Most Active', icon: <BarChart color="grey" />, queryKey: 'most-active' },
  { label: 'Top Loosers', icon: <TrendingDown color="error" />, queryKey: 'top-loosers' }
];

const StockPanel = () => {
  const [value, setValue] = useState(tabs[1].queryKey);
  const { data, isLoading, error } = useData(REMOTE.PRICES, [value]);

  const handleChange = (event, tabValue) => {
    setValue(tabValue);
  };

  return (
    <>
      <AntTabs value={value} onChange={handleChange} centered>
        {tabs.map((tab) => (
          <AntTab key={tab.queryKey} icon={tab.icon} label={tab.label} value={tab.queryKey} />
        ))}
      </AntTabs>
      {tabs.map((tab) => (
        <TabPanel key={tab.queryKey} value={value} index={tab.queryKey}>
          <StockTable data={data} isLoading={isLoading} error={error} />
        </TabPanel>
      ))}
    </>
  );
};

export default StockPanel;
