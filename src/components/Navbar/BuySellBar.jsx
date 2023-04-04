import { MoneyOff, ShoppingCart } from '@mui/icons-material';
import { AppBar, Button, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

const BuySellBar = ({ symbol }) => {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      color="transparent"
      sx={{
        top: 'auto',
        bottom: 0
        // backgroundImage: 'linear-gradient(45deg,#73b9ff,#73b9ff40)',
        // backdropFilter: 'blur(15px)'
      }}>
      <Toolbar sx={{ display: 'flex', flex: 1, gap: 2 }}>
        <Button
          
          component={Link}
          to={'/buy/' + symbol}
          size="large"
          variant="contained"
          startIcon={<ShoppingCart fontSize="large" />}
          fullWidth>
          Buy
        </Button>
        <Button
          component={Link}
          to={'/sell/' + symbol}
          size="large"
          variant="contained"
          color="danger"
          startIcon={<MoneyOff fontSize="large" />}
          fullWidth>
          Sell
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default BuySellBar;
