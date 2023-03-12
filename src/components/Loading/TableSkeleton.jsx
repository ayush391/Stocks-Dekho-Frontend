import {
  Card,
  Skeleton,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography
} from '@mui/material';
import React from 'react';

const TableSkeleton = ({ rows = 5, columns = 4 }) => {
  return (
    <TableContainer component={Card} variant="outlined">
      <Table>
        <TableBody>
          {[...Array(rows)].map((x, idx) => {
            return (
              <TableRow key={idx}>
                {[...Array(columns)].map((val, idx) => {
                  return (
                    <TableCell key={idx} width={idx ? 10 : 100} height={idx ? 50 : 100}>
                      <Typography>
                        <Skeleton variant="rounded" />
                      </Typography>
                    </TableCell>
                  );
                })}
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default React.memo(TableSkeleton);
