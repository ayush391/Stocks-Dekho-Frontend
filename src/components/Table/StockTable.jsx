import {
  Card,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography
} from '@mui/material';
import { Box } from '@mui/system';
import { Link } from 'react-router-dom';
import TableSkeleton from '../Loading/TableSkeleton';
import StockPChange from '../Table/StockPChange';
import StockSymbol from '../Table/StockSymbol';

const StockTable = ({ stocksData }) => {
  return (
    <>
      {stocksData ? (
        <TableContainer component={Card} variant="outlined">
          <Table>
            <TableBody>
              {stocksData.map((stock, idx) => {
                return (
                  <TableRow
                    key={stock.symbol}
                    component={Link}
                    to={'/' + stock.symbol}
                    sx={{
                      '&:hover': {
                        backgroundColor: '#00000010'
                      }
                    }}>
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
                        {stock.icon ? (
                          <img height={40} width={40} src={stock.icon}></img>
                        ) : (
                          <StockSymbol symbol={stock.symbol} idx={idx} />
                        )}
                        <Typography
                          fontWeight="bold"
                          sx={{
                            textOverflow: 'ellipsis',
                            overflow: 'hidden'
                          }}>
                          {stock.symbol}
                        </Typography>
                        <Typography
                          variant="caption"
                          sx={{
                            textOverflow: 'ellipsis',
                            overflow: 'hidden'
                          }}>
                          {stock.meta ? stock.meta.companyName : stock.symbol}
                        </Typography>
                      </Box>
                    </TableCell>
                    <TableCell align="right">
                      <Stack alignItems="center">
                        <Typography
                          variant="h5"
                          sx={{
                            textOverflow: 'ellipsis',
                            overflow: 'hidden'
                          }}>
                          ₹{parseFloat(stock.lastPrice).toFixed(2)}
                        </Typography>
                        <StockPChange pChange={stock.pChange} />
                      </Stack>
                    </TableCell>
                    {/* <TableCell align="right"><StockChange change={stock.change} /></TableCell> */}
                    {/* <TableCell align="right">
                                                    <StockPChange pChange={stock.pChange} />
                                                </TableCell> */}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      ) : (
        <TableSkeleton rows={7} columns={4} />
      )}
    </>
  );
};

export default StockTable;
