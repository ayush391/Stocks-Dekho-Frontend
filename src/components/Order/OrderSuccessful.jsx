import { Button, Card, CardContent, Container, Stack, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import OrderSuccessfullImg from '../../assets/orderSuccessfull.png';

const OrderSuccessfull = ({ open, icon, reviewOrder, onClose, transactionType }) => {
  const navigate = useNavigate();
  const handleClick = () => {
    navigate(-1);
  };
  return (
    <Container maxWidth="sm">
      <Card sx={{ borderRadius: '20px' }}>
        <CardContent>
          <Stack justifyContent="center" alignItems="center">
            <img src={OrderSuccessfullImg} width={120} />
            <Typography
              textAlign="center"
              variant="h3"
              color="primary"
              fontWeight="bold"
              sx={{ marginY: '1rem' }}>
              Thank You!
            </Typography>
            <Typography textAlign="center" variant="h6" sx={{ marginY: '1rem' }}>
              Your transaction was successful
            </Typography>
          </Stack>
          <Button size="large" variant="contained" fullWidth onClick={handleClick}>
            Done
          </Button>
        </CardContent>
      </Card>
    </Container>
  );
};

export default OrderSuccessfull;
