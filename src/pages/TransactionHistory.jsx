import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { useLocation } from 'react-router-dom';
import { TransactionLogCard } from '../components/Order/TransactionLog';
import { AntTab } from '../components/Tabs/AntTab';
import { AntTabs } from '../components/Tabs/AntTabs';
import { TabPanel } from '../components/Tabs/TabPanel';
import useTransactionHistory from '../hooks/OrderHooks/useTransactionHistory';

const url = import.meta.env.VITE_BASE_URL + '/transaction/history/';

export const TransactionHistory = () => {
  const [value, setValue] = useState(0);
  const location = useLocation()

  let stockSymbol = null
  if (location.state!=null){
    
    stockSymbol = location.state.stockSymbol
    console.log(stockSymbol ,"locate")
  }
  const {
    transactions: transactionsBuy,
    loading: loadingBuy,
    error: errorBuy
  } = useTransactionHistory('BUY', stockSymbol!=null? stockSymbol:'');
  const {
    transactions: transactionsSell,
    loading: loadingSell,
    error: errorSell
  } = useTransactionHistory('SELL', stockSymbol!=null? stockSymbol:'');

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
      <AntTabs
        style={{ width: '100%' }}
        value={value}
        onChange={handleChange}
        aria-label="basic tabs example"
        sx={{ marginBottom: 2 }}>
        <AntTab style={{ width: '50%' }} label="Buy" />
        <AntTab style={{ width: '50%' }} label="Sell" />
      </AntTabs>
      <TabPanel value={value} index={0}>
        <TransactionLogCard log={transactionsBuy} loading={loadingBuy} error={errorBuy} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TransactionLogCard log={transactionsSell} loading={loadingSell} error={errorSell} />
      </TabPanel>
    </>
  );
};
