import { Slider, Stack, Typography } from '@mui/material';
import React from 'react';
import useStockData from '../../hooks/StockHooks/useStockData';
import CircularLoading from '../Loading/CircularLoading';

const LowHighSlider = ({ symbol }) => {
  const { stockData, loading, error } = useStockData(symbol);

  return error ? (
    <Typography>An error occured</Typography>
  ) : loading ? (
    <CircularLoading />
  ) : (
    <Stack>
      <Stack width="100%" direction="row" justifyContent="space-between">
        <Typography variant="caption" color="grey">
          Today's Low
        </Typography>
        <Typography variant="caption" color="grey">
          Today's High
        </Typography>
      </Stack>

      <Stack width="100%" direction="row" justifyContent="space-between">
        <Typography variant="body2" fontWeight="">
          {stockData.dayLow}
        </Typography>
        <Typography variant="body2" fontWeight="">
          {stockData.dayHigh}
        </Typography>
      </Stack>
      <Slider
        track={false}
        min={stockData.dayLow}
        max={stockData.dayHigh}
        value={stockData.lastPrice}
        valueLabelDisplay="auto"
        defaultValue={0.00000005}
        step={0.00000001}
        size="small"
      />
      <Stack width="100%" direction="row" justifyContent="space-between">
        <Typography variant="caption" color="grey">
          52W Low
        </Typography>
        <Typography variant="caption" color="grey">
          52W High
        </Typography>
      </Stack>

      <Stack width="100%" direction="row" justifyContent="space-between">
        <Typography variant="body2" fontWeight="">
          {stockData.yearLow}
        </Typography>
        <Typography variant="body2" fontWeight="">
          {stockData.yearHigh}
        </Typography>
      </Stack>
      <Slider
        track={false}
        min={stockData.yearLow}
        max={stockData.yearHigh}
        value={stockData.lastPrice}
        valueLabelDisplay="auto"
        defaultValue={0.00000005}
        step={0.00000001}
        size="small"
      />
    </Stack>
  );
};

export default LowHighSlider;
