import React from 'react'
import { Typography } from '@mui/material';
import StockTable from '../Table/StockTable';
import useAllStocks from '../../hooks/StockHooks/useAllStocks';
import CircularLoading from '../Loading/CircularLoading';


const TopGainers = () => {
    const { stocksData, loading, error } = useAllStocks('/top-gainers')

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

export default React.memo(TopGainers)