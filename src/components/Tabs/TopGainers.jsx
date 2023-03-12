import { Typography } from '@mui/material';
import React from 'react';
import useAllStocks from '../../hooks/StockHooks/useAllStocks';
import CircularLoading from '../Loading/CircularLoading';
import StockTable from '../Table/StockTable';

const TopGainers = () => {
  const { stocksData, loading, error } = useAllStocks('/top-gainers');

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

export default React.memo(TopGainers);
