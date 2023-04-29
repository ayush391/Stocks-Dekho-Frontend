import { AccountBalanceWallet, AccountCircle, History, Wallet } from '@mui/icons-material';
import { Avatar, Box, Button, Stack, Typography } from '@mui/material';
import { Container } from '@mui/system';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import TransactionLogCard from '../components/Order/TransactionLog';
import { useAppContext } from '../context/AppState';
import { useData } from '../hooks/useData';
import { LOCAL, REMOTE } from '../utils/routes';

const Profile = () => {
  const { user } = useAppContext();
  const walletUrl = import.meta.env.VITE_BASE_URL + '/wallet/';
  const [price, setPrice] = useState(0);

  const { data, isLoading, error } = useData(`${REMOTE.TRANSACTION}/history`, [user?.uid]);

  useEffect(() => {
    user && getWallet();
  }, [user]);

  const getWallet = async () => {
    const { data } = await axios.get(walletUrl + user?.uid?.toString());
    setPrice(data.data.balance);
  };

  return (
    <>
      <Container maxWidth="sm">
        <Box
          sx={{
            backgroundImage: 'linear-gradient(180deg, #7abbfc80,#7abbfc00 300px)',
            borderRadius: '20px',
            py: 1,
            my: 2
          }}>
          <Stack alignItems="center" sx={{ my: 2 }}>
            <Avatar
              src={
                user?.photoURL ||
                'https://lens-storage.storage.googleapis.com/png/4cde995e-9c55-4ed0-8f6d-e9aebd5d5596'
              }
              sx={{ width: '150px', height: '150px' }}
            />
            <Typography variant="h5" textAlign="center">
              {user?.displayName || 'Name'}
            </Typography>
            <Stack direction="column" flex={1} justifyContent="center" marginTop={2}>
              <Typography variant="caption" textAlign="center">
                Current Balance
              </Typography>
              <Typography variant="h1" fontWeight="bold" textAlign="center" gutterBottom>
                ₹{price.toFixed(2)}
              </Typography>
            </Stack>

            <Stack direction="row" gap={2} flex={1} justifyContent="center">
              <Button
                size="large"
                component={Link}
                to={LOCAL.TRANSACTION_HISTORY}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'primary.light',
                  textTransform: 'none'
                }}>
                <AccountBalanceWallet fontSize="large" color="primary" />
                <Typography variant="caption" display="block">
                  Transactions
                </Typography>
              </Button>

              <Button
                size="large"
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'primary.light',
                  textTransform: 'none'
                }}>
                <History fontSize="large" color="primary" />
                <Typography variant="caption" display="block">
                  History
                </Typography>
              </Button>

              <Button
                size="large"
                component={Link}
                to={`${LOCAL.PROFILE}/edit`}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'primary.light',
                  textTransform: 'none'
                }}>
                <AccountCircle fontSize="large" color="primary" />
                <Typography variant="caption" display="block">
                  EditProfile
                </Typography>
              </Button>

              <Button
                size="large"
                component={Link}
                to={LOCAL.PORTFOLIO}
                sx={{
                  display: 'flex',
                  flexDirection: 'column',
                  backgroundColor: 'primary.light',
                  textTransform: 'none'
                }}>
                <Wallet fontSize="large" color="primary" />
                <Typography variant="caption" display="block">
                  Holdings
                </Typography>
              </Button>
            </Stack>
          </Stack>
        </Box>
        <Typography variant="h5" fontWeight="bold" gutterBottom>
          Recent Transactions
        </Typography>
      </Container>
      <TransactionLogCard
        log={data?.allTransactions?.slice(0, 5)}
        loading={isLoading}
        error={error}
      />
    </>
  );
};

export default Profile;
