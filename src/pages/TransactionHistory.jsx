import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import TransactionLogCard from '../components/Order/TransactionLog';
import { AntTab } from '../components/Tabs/AntTab';
import { AntTabs } from '../components/Tabs/AntTabs';
import { TabPanel } from '../components/Tabs/TabPanel';
import { useAppContext } from '../context/AppState';
import { useData } from '../hooks/useData';
import { REMOTE } from '../utils/remoteRoutes';

const TRANSACTION_TYPE = Object.freeze({
  BUY: 'BUY',
  SELL: 'SELL'
});

export const TransactionHistory = () => {
  const { user } = useAppContext();
  const [value, setValue] = useState(TRANSACTION_TYPE.BUY);
  const location = useLocation();
  let stockSymbol = '';
  if (location.state != null) {
    stockSymbol = location.state.stockSymbol;
  }

  const { data, isLoading, error } = useData(`${REMOTE.TRANSACTION}/history`, [user?.uid], {
    type: value,
    stockSymbol: stockSymbol
  });

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <>
      <Box marginY={2}>
        <Typography textAlign="center" variant="h5" fontWeight="bold" gutterBottom>
          Transactions History
        </Typography>
      </Box>
      <AntTabs value={value} onChange={handleChange} sx={{ width: '100%', marginBottom: 2 }}>
        {Object.values(TRANSACTION_TYPE).map((type) => (
          <AntTab key={type} sx={{ width: '50%' }} label={type} value={type} />
        ))}
      </AntTabs>
      {Object.values(TRANSACTION_TYPE).map((type) => (
        <TabPanel key={type} value={value} index={type}>
          <TransactionLogCard log={data?.allTransactions} loading={isLoading} error={error} />
        </TabPanel>
      ))}
    </>
  );
};
