import { Typography } from '@mui/material';
import React from 'react';
import useAllStocksBySector from '../../hooks/StockHooks/useAllStocksBySector';
import TableSkeletonPhone from '../Loading/TableSkeletonPhone';
import StockTable from '../Table/StockTable';

const SectorStocks = ({ sectorName = '' }) => {
  const { stocksData, loading, error } = useAllStocksBySector(sectorName);

  return (
    <>
      {error ? (
        <Typography>An error occured</Typography>
      ) : loading ? (
        <TableSkeletonPhone rows={5} />
      ) : (
        <StockTable stocksData={stocksData.slice(0, 10)} />
      )}
    </>
  );
};

export default React.memo(SectorStocks);
