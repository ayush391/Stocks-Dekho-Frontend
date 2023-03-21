import { Typography } from '@mui/material';
import useAllStocks from '../../hooks/StockHooks/useAllStocks';
import TableSkeletonPhone from '../Loading/TableSkeletonPhone';
import StockTable from '../Table/StockTable';

const MostActive = () => {
  const { stocksData, loading, error } = useAllStocks('/most-active');

  return (
    <>
      {error ? (
        <Typography>An error occured</Typography>
      ) : loading ? (
        <TableSkeletonPhone rows={5} />
      ) : (
        <StockTable stocksData={stocksData} />
      )}
    </>
  );
};

export default MostActive;
