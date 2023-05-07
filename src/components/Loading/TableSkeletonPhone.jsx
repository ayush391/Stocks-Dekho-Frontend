import { Box, Card, CardContent, Skeleton, Stack } from '@mui/material';
import React from 'react';

const TableSkeletonPhone = ({ rows = 5 }) => {
  return (
    <Stack sx={{ gap: 2 }}>
      {[...Array(rows)].map((x, idx) => {
        return (
          <Card key={idx}>
            <CardContent>
              <Box sx={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                <Stack>
                  <Skeleton width={50} height={50} />
                  <Skeleton width={90} height={30} />
                  <Skeleton width={40} height={30} />
                </Stack>
                <Stack alignItems="center">
                  <Skeleton width={90} height={30} />
                  <Skeleton width={90} height={40} />
                </Stack>
              </Box>
            </CardContent>
          </Card>
        );
      })}
    </Stack>
  );
};

export default React.memo(TableSkeletonPhone);
