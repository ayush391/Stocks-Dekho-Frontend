import { Box, Typography } from '@mui/material';
import { useState } from 'react';
import { TransactionLogCard } from '../components/Order/TransactionLog';
import { AntTab } from '../components/Tabs/AntTab';
import { AntTabs } from '../components/Tabs/AntTabs';
import { TabPanel } from '../components/Tabs/TabPanel';
import useTransactionHistory from '../hooks/OrderHooks/useTransactionHistory';

const url = import.meta.env.VITE_BASE_URL + '/transaction/history/';

export const TransactionHistory = () => {
  const [value, setValue] = useState(0);

  const { transactions, loading, error } = useTransactionHistory();

  const buyList = transactions.filter((item) => item.type == 'BUY');
  const sellList = transactions.filter((item) => item.type == 'SELL');

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
        <TransactionLogCard log={buyList} loading={loading} error={error} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TransactionLogCard log={sellList} loading={loading} error={error} />
      </TabPanel>
    </>
  );
};
