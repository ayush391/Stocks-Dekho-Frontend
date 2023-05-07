import { Box, Button, Container, Modal, Stack, TextField, Typography } from '@mui/material';
import axios from 'axios';
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import CircularLoading from '../components/Loading/CircularLoading';
import ConfirmOrder from '../components/Order/ConfirmOrder';
import { useAppContext } from '../context/AppState';
import { useData } from '../hooks/useData';
import { REMOTE } from '../utils/routes';

export default function BuyStock() {
  const { user } = useAppContext();
  const { symbol } = useParams();
  const { data, isLoading, error } = useData(REMOTE.PRICES, [symbol]);
  const [stockQty, setStockQty] = useState(1);
  const buyUrl = import.meta.env.VITE_BASE_URL + '/transaction/review/buy';
  const [open, setOpen] = useState(false);
  const [orderReview, setOrderReview] = useState({});
  const [loadingConfirmOrder, setloadingConfirmOrder] = useState(false);
  const stockData = data?.data;

  const BuyReview = async () => {
    try {
      setloadingConfirmOrder(true);
      const response = await axios.post(buyUrl, {
        userId: user?.uid,
        stockSymbol: stockData != null ? stockData.symbol : 'Symbol',
        quantity: stockQty
      });
      if (response.status === 200) {
        setOrderReview(response.data);
        setOpen(true);
        setloadingConfirmOrder(false);
      }
    } catch (err) {
      setloadingConfirmOrder(false);
    }
  };

  const handleQty = (e) => {
    setStockQty(e.target.value);
  };

  return (
    <Container maxWidth="sm">
      <Box
        sx={{
          textAlign: 'center'
        }}>
        {error ? (
          <Typography>An error occured</Typography>
        ) : isLoading ? (
          <CircularLoading />
        ) : (
          <Stack direction="column" alignItems="center">
            <Box marginY={2}>
              <img width={150} src={stockData?.icon}></img>

              <Typography>{'Total Amount'}</Typography>
              <Typography variant="h1" fontWeight="bold" color="primary">
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
              size="large"
              disabled={stockQty <= 0}
              variant="contained"
              fullWidth
              onClick={BuyReview}>
              Buy
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
                transactionType="buy"
              />
            )}
          </Stack>
        )}
      </Box>
    </Container>
  );
}
