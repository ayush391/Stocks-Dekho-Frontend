import { BarChart, BookmarkAdd, TrendingDown, TrendingUp } from '@mui/icons-material';
import { getAuth } from 'firebase/auth';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useData } from '../hooks/useData';
import { REMOTE } from '../utils/remoteRoutes';
import { app } from './Firebase';
import StockTable from './Table/StockTable';
import { AntTab } from './Tabs/AntTab';
import { AntTabs } from './Tabs/AntTabs';
import { TabPanel } from './Tabs/TabPanel';

const tabs = [
  { label: 'Top Gainers', icon: <TrendingUp color="success" />, queryKey: 'top-gainers' },
  { label: 'Most Active', icon: <BarChart color="grey" />, queryKey: 'most-active' },
  { label: 'Top Loosers', icon: <TrendingDown color="error" />, queryKey: 'top-loosers' },
  { label: 'Watchlist', icon: <BookmarkAdd color="info" />, queryKey: 'watchlist' }
];

const StockPanel = () => {
  const auth = getAuth(app);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState(tabs[1].queryKey);
  const [route, setRoute] = useState(REMOTE.PRICES);
  const { data, isLoading, error } = useData(route, [value === 'watchlist' ? user?.uid : value]);

  const handleChange = (event, tabValue) => {
    setValue(tabValue);
    setRoute(tabValue === 'watchlist' ? REMOTE.WATCHLIST : REMOTE.PRICES);
  };

  return (
    <>
      <AntTabs value={value} onChange={handleChange} variant="scrollable">
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
