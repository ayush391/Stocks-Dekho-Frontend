import { Typography } from '@mui/material';
import React from 'react';
import { useData } from '../../hooks/useData';
import { REMOTE } from '../../utils/remoteRoutes';
import TableSkeletonPhone from '../Loading/TableSkeletonPhone';
import StockTable from '../Table/StockTable';

const SectorStocks = ({ sectorName = '' }) => {
  const { data, isLoading, error } = useData(REMOTE.STOCKS, ['sectors', sectorName]);

  return (
    <>
      {error ? (
        <Typography>An error occured</Typography>
      ) : isLoading ? (
        <TableSkeletonPhone rows={5} />
      ) : (
        <StockTable stocksData={data?.data?.slice(0, 10)} />
      )}
    </>
  );
};

export default React.memo(SectorStocks);
