import { Skeleton, Stack } from '@mui/material';
import React from 'react';

const StockPageHeaderSkeleton = () => {
  return (
    <Stack
      alignItems="center"
      paddingY={2}
      sx={{
        textAlign: 'center',
        // backgroundImage: 'linear-gradient(180deg, #7abbfc60 1%, #7abbfc00 80%)',
        borderRadius: '20px',
        width: '100%'
      }}>
      <Skeleton width={200} height={50} />

      <Skeleton width={80} height={30} />

      <Stack alignItems="center">
        <Skeleton width={150} height={150} />

        <Skeleton width={150} height={100} />
        <Skeleton width={150} height={60} />
        <Skeleton width={250} height={30} />
      </Stack>
    </Stack>
  );
};

export default React.memo(StockPageHeaderSkeleton);
