import { MoneyOff, ShoppingCart } from '@mui/icons-material';
import { AppBar, Button, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';
import { LOCAL } from '../../utils/routes';

const BuySellBar = ({ symbol }) => {
  return (
    <AppBar
      position="fixed"
      elevation={0}
      color="transparent"
      sx={{
        top: 'auto',
        bottom: 0
      }}>
      <Toolbar sx={{ display: 'flex', flex: 1, gap: 2 }}>
        <Button
          component={Link}
          to={`${LOCAL.STOCKS}/${symbol}/buy`}
          size="large"
          variant="contained"
          startIcon={<ShoppingCart fontSize="large" />}
          fullWidth>
          Buy
        </Button>
        <Button
          component={Link}
          to={`${LOCAL.STOCKS}/${symbol}/sell`}
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
