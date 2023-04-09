import { Slider, Stack, Typography } from '@mui/material';
import React from 'react';
import { useData } from '../../hooks/useData';
import CircularLoading from '../Loading/CircularLoading';
import { REMOTE } from '../../utils/remoteRoutes';

const LowHighSlider = ({ symbol }) => {
  const { data, isLoading, error } = useData(REMOTE.PRICES, [symbol]);
  const stockData = data?.data;

  return error ? (
    <Typography>An error occured</Typography>
  ) : isLoading ? (
    <CircularLoading />
  ) : (
    <Stack>
      <Stack width="100%" direction="row" justifyContent="space-between">
        <Typography variant="caption" color="grey">
          {`Today's Low`}
        </Typography>
        <Typography variant="caption" color="grey">
          {`Today's High`}
        </Typography>
      </Stack>

      <Stack width="100%" direction="row" justifyContent="space-between">
        <Typography variant="body2" fontWeight="">
          {stockData?.dayLow}
        </Typography>
        <Typography variant="body2" fontWeight="">
          {stockData?.dayHigh}
        </Typography>
      </Stack>
      <Slider
        track={false}
        min={stockData?.dayLow}
        max={stockData?.dayHigh}
        value={stockData?.lastPrice}
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
          {stockData?.yearLow}
        </Typography>
        <Typography variant="body2" fontWeight="">
          {stockData?.yearHigh}
        </Typography>
      </Stack>
      <Slider
        track={false}
        min={stockData?.yearLow}
        max={stockData?.yearHigh}
        value={stockData?.lastPrice}
        valueLabelDisplay="auto"
        defaultValue={0.00000005}
        step={0.00000001}
        size="small"
      />
    </Stack>
  );
};

export default LowHighSlider;
