import { Stack, Typography } from '@mui/material';
import { useData } from '../hooks/useData';
import { REMOTE } from '../utils/routes';
import StockPageHeaderSkeleton from './Loading/StockPageHeaderSkeleton';
import StockPChange from './Table/StockPChange';
import StockSymbol from './Table/StockSymbol';

const StockPageHeader = ({ symbol }) => {
  const { data, isLoading, error } = useData(REMOTE.PRICES, [symbol]);
  const stockData = data?.data;

  return error ? (
    <Typography>An error occured</Typography>
  ) : isLoading ? (
    <StockPageHeaderSkeleton />
  ) : (
    <Stack
      alignItems="center"
      paddingY={2}
      sx={{
        textAlign: 'center',
        // backgroundImage: 'linear-gradient(180deg, #7abbfc60 1%, #7abbfc00 80%)',
        borderRadius: '20px',
        width: '100%'
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
