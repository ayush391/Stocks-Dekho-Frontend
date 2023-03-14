import { Typography } from '@mui/material';
import axios from 'axios';
import { getAuth } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import { app } from '../components/Firebase';
import { TransactionLogCard } from '../components/Order/TransactionLog';
import { AntTab } from '../components/Tabs/AntTab';
import { AntTabs } from '../components/Tabs/AntTabs';
import { TabPanel } from '../components/Tabs/TabPanel';

const url = import.meta.env.VITE_BASE_URL + '/transaction/history/';

export const TransactionHistory = () => {
  const [value, setValue] = useState(0);
  const auth = getAuth(app);
  const [user, loading, error] = useAuthState(auth);

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const [buyList, setBuyList] = useState([]);
  const [sellList, setSellList] = useState([]);

  useEffect(() => {
    if (loading) {
      /* empty */
    } else {
      getLogList();
    }
  }, [loading, user]);

  async function getLogList() {
    const response = await axios.get(url + user.uid);
    console.log(response.data);
    // setLogList(response.data.allTransactions)
    setBuyList(response.data.allTransactions.filter((item) => item.type == 'BUY'));
    setSellList(response.data.allTransactions.filter((item) => item.type == 'SELL'));
  }

  return (
    <div style={{ width: '100%' }}>
      <Typography
        component={Link}
        to="/"
        textAlign={'center'}
        marginBottom={1}
        sx={{
          backgroundColor: ' #c3defd',
          fontSize: 22,
          borderRadius: 3,
          color: 'white',
          width: '100%',
          display: 'flex',
          justifyContent: 'center'
        }}>
        Transaction History
      </Typography>
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
        <TransactionLogCard log={buyList} />
      </TabPanel>
      <TabPanel value={value} index={1}>
        <TransactionLogCard log={sellList} />
      </TabPanel>
    </div>
  );
};
