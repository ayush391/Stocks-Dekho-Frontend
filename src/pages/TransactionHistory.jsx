import { Box, Typography } from '@mui/material';
import { getAuth } from 'firebase/auth';
import { useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { app } from '../components/Firebase';
import TransactionLogCard from '../components/Order/TransactionLog';
import { AntTab } from '../components/Tabs/AntTab';
import { AntTabs } from '../components/Tabs/AntTabs';
import { TabPanel } from '../components/Tabs/TabPanel';
import { useData } from '../hooks/useData';
import { REMOTE } from '../utils/remoteRoutes';
import { useLocation } from 'react-router-dom';

export const TransactionHistory = () => {
  const auth = getAuth(app);
  const [user] = useAuthState(auth);
  const [value, setValue] = useState(0);
  const location = useLocation();
  let stockSymbol = '';
  if (location.state != null) {
    stockSymbol = location.state.stockSymbol;
  }
  const {
    data: transactionsBuy,
    isLoading: loadingBuy,
    error: errorBuy
  } = useData(`${REMOTE.TRANSACTION}/history`, [user?.uid], {
    type: 'BUY',
    stockSymbol: stockSymbol.toString()
  });
  const {
    data: transactionsSell,
    isLoading: loadingSell,
    error: errorSell
  } = useData(`${REMOTE.TRANSACTION}/history`, [user?.uid], {
    type: 'SELL',
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
        <TransactionLogCard
          log={transactionsBuy?.allTransactions}
          loading={loadingBuy}
          error={errorBuy}
        />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TransactionLogCard
          log={transactionsSell?.allTransactions}
          loading={loadingSell}
          error={errorSell}
        />
      </TabPanel>
    </>
  );
};
