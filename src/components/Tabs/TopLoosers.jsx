import React, { useEffect, useState } from 'react'
import { Typography } from '@mui/material';
import StockTable from '../Table/StockTable';
import CircularLoading from '../Loading/CircularLoading';
import useAllStocks from '../../hooks/StockHooks/useAllStocks';

const TopLoosers = () => {
    const { stocksData, loading, error } = useAllStocks('/top-loosers')

    return (
        <>
            {
                error ? <Typography>An error occured</Typography> :
                    loading ? <CircularLoading /> :
                        <StockTable stocksData={stocksData} />
            }
        </>
    )
}

export default React.memo(TopLoosers)