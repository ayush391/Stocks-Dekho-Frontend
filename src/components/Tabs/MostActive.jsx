import { Typography } from '@mui/material';
import useAllStocks from '../../hooks/StockHooks/useAllStocks';
import CircularLoading from '../Loading/CircularLoading';
import StockTable from '../Table/StockTable';

const MostActive = () => {
  const { stocksData, loading, error } = useAllStocks('/most-active');

  return (
    <>
      {error ? (
        <Typography>An error occured</Typography>
      ) : loading ? (
        <CircularLoading />
      ) : (
        <StockTable stocksData={stocksData} />
      )}
    </>
  );
};

export default MostActive;
