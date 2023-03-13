import { Box, Button, Container, Modal, Stack, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { app } from '../components/Firebase';
import CircularLoading from '../components/Loading/CircularLoading';
import ConfirmOrder from '../components/Order/ConfirmOrder';
import useStockData from '../hooks/StockHooks/useStockData';

export default function SellStock(props) {
  const params = useParams();
  const { symbol } = params;

  const { stockData, loading, error } = useStockData(symbol);

  const [stockQty, setStockQty] = useState(1);
  const user = getAuth(app);
  const sellUrl = process.env.REACT_APP_BASE_URL + '/transaction/review/sell';

  const [open, setOpen] = useState(false);
  const [orderReview, setOrderReview] = useState({});

  const handleQty = (e) => {
    setStockQty(e.target.value);
  };

  const param = props;
  console.log(param);

  const [loadingConfirmOrder, setloadingConfirmOrder] = useState(false);

  const SellReview = async () => {
    try {
      setloadingConfirmOrder(true);
      const response = await axios.post(sellUrl, {
        userId: user.currentUser.uid,
        stockSymbol: stockData != null ? stockData.symbol : 'Symbol',
        quantity: stockQty
      });
      console.log(response.data);
      if (response.status === 200) {
        setOrderReview(response.data);
        setOpen(true);
        setloadingConfirmOrder(false);
      }
    } catch (err) {
      // setError(err.message);
      setloadingConfirmOrder(false);
    }
  };
  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          textAlign: 'center'
        }}>
        {error ? (
          <Typography>An error occured</Typography>
        ) : loading ? (
          <CircularLoading />
        ) : (
          <Stack direction="column" alignItems="center">
            <Box marginY={2}>
              <img width={150} src={stockData?.icon}></img>

              <Typography>{'Total Amount'}</Typography>
              <Typography variant="h1" fontWeight="bold" color="secondary">
                ₹{stockData ? (stockData.lastPrice * stockQty).toFixed(2) : 2452}
              </Typography>
              <Typography variant="body1" color="grey" gutterBottom>
                1 Stock ≈ ₹{stockData ? stockData.lastPrice.toFixed(2) : 2452}
              </Typography>

              <TextField
                fullWidth
                autoFocus
                placeholder="Quantity"
                type="number"
                inputProps={{ style: { textAlign: 'center', fontSize: '2rem' }, min: '1' }}
                onChange={handleQty}
                sx={{
                  marginY: 5,
                  fontSize: '5rem'
                }}
              />
            </Box>

            <Button
              color="secondary"
              size="large"
              disabled={stockQty <= 0}
              variant="contained"
              fullWidth
              onClick={SellReview}>
              Sell
            </Button>
            {loadingConfirmOrder ? (
              <Modal open={true}>
                <CircularLoading />
              </Modal>
            ) : (
              <ConfirmOrder
                onClose={() => setOpen(false)}
                open={open}
                icon={stockData != null ? stockData.icon : 'Symbol'}
                reviewOrder={orderReview}
                transactionType="sell"
              />
            )}
          </Stack>
        )}
      </Box>
    </Container>
  );
}
