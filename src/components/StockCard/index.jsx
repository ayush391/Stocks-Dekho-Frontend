import { Box, Card, CardContent, Stack, Typography } from '@mui/material';
import { Link } from 'react-router-dom';
import { LOCAL } from '../../utils/routes';
import StockPChange from '../Table/StockPChange';
import StockSymbol from '../Table/StockSymbol';

const StockCard = ({ stock }) => {
  return (
    <Card component={Link} to={`${LOCAL.STOCKS}/${stock?.symbol}`}>
      <CardContent>
        <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <Stack>
            {stock.icon ? (
              <Box component="img" height={40} width={40} src={stock.icon}></Box>
            ) : (
              <StockSymbol symbol={stock.symbol} />
            )}
            <Typography fontWeight="bold">{stock.symbol}</Typography>
            <Typography variant="caption">
              {stock.meta ? stock.meta.companyName : stock.symbol}
            </Typography>
          </Stack>
          <Stack sx={{ alignItems: 'flex-end' }}>
            <Typography variant="h5">₹{parseFloat(stock.lastPrice).toFixed(2)}</Typography>
            <StockPChange pChange={stock.pChange} />
          </Stack>
        </Box>
      </CardContent>
    </Card>
  );
};

export default StockCard;
