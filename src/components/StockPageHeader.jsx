import { Divider, Stack, Typography } from '@mui/material';
import useStockData from '../hooks/StockHooks/useStockData';
import CircularLoading from './Loading/CircularLoading';
import StockPChange from './Table/StockPChange';
import StockSymbol from './Table/StockSymbol';

const StockPageHeader = ({ symbol }) => {
  const { stockData, loading, error } = useStockData(symbol);

  return error ? (
    <Typography>An error occured</Typography>
  ) : loading ? (
    <CircularLoading />
  ) : (
    <Stack
      alignItems="center"
      paddingY={5}
      sx={{
        textAlign: 'center',
        backgroundImage: 'linear-gradient(0deg, #7abbfc60 1%, #7abbfc00 100%)',
        borderRadius: '20px',
        width: '100%',
        paddingY: 3
      }}>
      <Typography variant="h5" fontWeight="bold">
        {stockData?.meta?.companyName}
      </Typography>
      <Typography variant="caption" gutterBottom>
        {stockData?.symbol}
      </Typography>
      <Stack alignItems="center">
        {stockData != null && stockData.icon ? (
          <img width={150} src={stockData?.icon}></img>
        ) : (
          <StockSymbol symbol={stockData?.symbol} />
        )}

        <Divider sx={{ my: 2 }} />

        <Stack
          gap={2}
          sx={{
            flexDirection: { md: 'row' },
            alignItems: { md: 'center' }
          }}>
          <Typography variant="h1" fontWeight="bold">
            ₹{stockData?.lastPrice}
          </Typography>
          {/* <StockChange change={102.8} /> */}
          <StockPChange pChange={stockData?.pChange} />
        </Stack>

        <Typography variant="caption" fontSize="0.8rem" my={2}>
          {new Date().toUTCString()}
        </Typography>
      </Stack>
    </Stack>
  );
};

export default StockPageHeader;
