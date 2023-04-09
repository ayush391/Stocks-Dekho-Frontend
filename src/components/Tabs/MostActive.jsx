import { Typography } from '@mui/material';
import { useData } from '../../hooks/useData';
import { REMOTE } from '../../utils/remoteRoutes';
import TableSkeletonPhone from '../Loading/TableSkeletonPhone';
import StockTable from '../Table/StockTable';

const MostActive = () => {
  const { data, isLoading, error } = useData(REMOTE.PRICES, ['most-active']);

  return (
    <>
      {error ? (
        <Typography>An error occured</Typography>
      ) : isLoading ? (
        <TableSkeletonPhone rows={5} />
      ) : (
        <StockTable stocksData={data?.data} />
      )}
    </>
  );
};

export default MostActive;
