import React from 'react'

import StockTable from '../Table/StockTable';
import CircularLoading from '../Loading/CircularLoading';
import useAllStocks from '../../hooks/StockHooks/useAllStocks';
import { Typography } from '@mui/material';

const MostActive = () => {
    const { stocksData, loading, error } = useAllStocks('/most-active')

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

export default MostActive