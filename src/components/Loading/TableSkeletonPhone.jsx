import {
  Box,
  Card,
  Skeleton,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow
} from '@mui/material';
import React from 'react';

const TableSkeletonPhone = ({ rows = 5 }) => {
  return (
    <TableContainer component={Card} variant="outlined">
      <Table>
        <TableBody>
          {[...Array(rows)].map((x, idx) => {
            return (
              <TableRow key={idx}>
                <TableCell>
                  <Box
                    sx={{
                      display: 'flex',
                      flexDirection: 'column',
                      placeItems: 'center',
                      gap: 1,
                      fontWeight: 'bold',
                      width: 100,
                      textAlign: 'center'
                    }}>
                    <Skeleton width={50} height={50} />
                    <Skeleton width={90} height={30} />
                    <Skeleton width={40} height={30} />
                  </Box>
                </TableCell>
                <TableCell align="right">
                  <Stack alignItems="center">
                    <Skeleton width={90} height={30} />
                    <Skeleton width={90} height={40} />
                  </Stack>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default React.memo(TableSkeletonPhone);
