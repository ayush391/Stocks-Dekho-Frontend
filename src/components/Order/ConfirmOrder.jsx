import { IconButton } from '@chakra-ui/react';
import { Close } from '@mui/icons-material';
import {
  Box,
  Button,
  Card,
  CardContent,
  Container,
  Divider,
  Modal,
  Slide,
  Stack,
  Typography
} from '@mui/material';
import axios from 'axios';
import { getAuth } from 'firebase/auth';
import React, { useState } from 'react';
import { app } from '../Firebase';
import OrderSuccessfull from './OrderSuccessful';

const ConfirmOrder = ({ open, icon, reviewOrder, onClose, transactionType }) => {
  const url =
    process.env.REACT_APP_BASE_URL +
    (transactionType === 'buy' ? '/transaction/buy/' : '/transaction/sell/');
  const user = getAuth(app);

  const [showResult, setShowResult] = useState(false);

  const handleOrder = async () => {
    const response = await axios.post(url, { ...reviewOrder, userId: user.currentUser.uid });
    if (response.status === 200) {
      setShowResult(true);
    }
  };

  return (
    <Modal open={open}>
      <Slide direction="left" in={open}>
        {showResult ? (
          <OrderSuccessfull reviewOrder={reviewOrder} onClose={onClose} />
        ) : (
          <Container maxWidth="sm" sx={{ position: 'relative', top: '50%' }}>
            <Card sx={{ borderRadius: '20px', transform: 'translateY(-50%)' }}>
              <Box sx={{ display: 'flex', justifyContent: 'flex-end', padding: '0.5rem 1rem' }}>
                <IconButton onClick={onClose} sx={{}}>
                  <Close />
                </IconButton>
              </Box>
              <Typography textAlign="center" variant="h4" sx={{ marginY: '1rem' }}>
                Confirm {transactionType === 'buy' ? 'Buying' : 'Selling'}
              </Typography>

              <Stack direction="column" alignItems="center">
                <img width={100} src={icon}></img>
                <Typography textAlign="center" variant="h5" gutterBottom>
                  {reviewOrder.stockSymbol}{' '}
                </Typography>
              </Stack>

              <Typography
                textAlign="center"
                variant="h2"
                sx={{ color: '#1565c0', fontWeight: 'bold' }}>
                ₹{reviewOrder.orderAmount}
              </Typography>

              <CardContent
                sx={{ display: 'flex', flexDirection: 'column', gap: 3, marginY: '1rem' }}>
                <Stack direction="row" justifyContent="space-between">
                  <Typography sx={{ color: '#a0a4a8' }}>Payment Method</Typography>
                  <Typography sx={{ color: '#52565b' }}>CNC</Typography>
                </Stack>
                <Divider />
                <Stack direction="row" justifyContent="space-between">
                  <Typography sx={{ color: '#a0a4a8' }}>Quantity</Typography>
                  <Typography sx={{ color: '#52565b' }}>{reviewOrder.quantity}</Typography>
                </Stack>
                <Divider />
                <Stack direction="row" justifyContent="space-between">
                  <Typography sx={{ color: '#a0a4a8' }}>Transaction Fee</Typography>
                  <Typography sx={{ color: '#52565b' }}>Free</Typography>
                </Stack>
                <Divider />
                <Stack direction="row" justifyContent="space-between">
                  <Typography sx={{ color: '#a0a4a8' }}>Order Total</Typography>
                  <Typography sx={{ color: '#52565b' }}>Rs.{reviewOrder.orderAmount}</Typography>
                </Stack>
              </CardContent>
              <Button size="large" variant="contained" fullWidth onClick={handleOrder}>
                Place Order
              </Button>
            </Card>
          </Container>
        )}
      </Slide>
    </Modal>
  );
};

export default ConfirmOrder;
