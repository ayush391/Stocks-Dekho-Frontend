import { Stack, Typography } from '@mui/material';
import TableSkeletonPhone from '../Loading/TableSkeletonPhone';
import StockCard from '../StockCard';

const StockTable = ({ data, isLoading, error }) => {
  const stockList = data?.watchlist ? data.watchlist.map((symbol) => ({ symbol })) : data?.data;

  return (
    <>
      {error ? (
        <Typography>An error occured</Typography>
      ) : isLoading ? (
        <TableSkeletonPhone rows={5} />
      ) : (
        <Stack sx={{ gap: 2 }}>
          {stockList?.map((stock, idx) => (
            <StockCard key={idx} stock={stock} />
          ))}
        </Stack>
      )}
    </>
  );
};

export default StockTable;
