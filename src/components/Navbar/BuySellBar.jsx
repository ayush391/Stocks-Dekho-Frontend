import { AppBar, Button, Toolbar } from '@mui/material';
import { Link } from 'react-router-dom';

const BuySellBar = ({ symbol }) => {
  return (
    <AppBar position="sticky" elevation={0} color="transparent" sx={{ top: 'auto', bottom: 0 }}>
      <Toolbar sx={{ display: 'flex', flex: 1, gap: 2 }}>
        <Button component={Link} to={'/buy/' + symbol} size="large" variant="contained" fullWidth>
          Buy
        </Button>
        <Button
          component={Link}
          to={'/sell/' + symbol}
          size="large"
          variant="contained"
          color="secondary"
          fullWidth>
          Sell
        </Button>
      </Toolbar>
    </AppBar>
  );
};

export default BuySellBar;
