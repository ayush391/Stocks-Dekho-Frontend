import {
  Box,
  Card,
  CardContent,
  Container,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableRow,
  Typography
} from '@mui/material';
import { Link } from 'react-router-dom';
import CircularLoading from '../Loading/CircularLoading';

const TransactionLogCard = ({ log, loading, error }) => {
  return (
    <Container maxWidth="sm">
      <TableContainer component={Card} variant="outlined">
        {loading ? (
          <CircularLoading />
        ) : error ? (
          <CardContent>An error occured</CardContent>
        ) : log.length > 0 ? (
          <Table>
            <TableBody>
              {log.map((logItem, idx) => (
                <TableRow
                  key={idx}
                  sx={{
                    '&:hover': {
                      backgroundColor: '#00000010'
                    }
                  }}>
                  <TableCell>
                    {/* <img
                      src={
                        logItem.icon || 'https://download.logo.wine/logo/Paytm/Paytm-Logo.wine.png'
                      }
                      width={50}
                    /> */}
                    <Box
                      sx={{
                        display: 'flex',
                        flexDirection: 'column',
                        justifyContent: 'center',
                        fontWeight: 'bold',
                        width: 150
                      }}>
                      <Typography
                        component={Link}
                        to={'/' + logItem.stockSymbol}
                        fontWeight="bold"
                        sx={{
                          color: 'primary.main',
                          textOverflow: 'ellipsis',
                          overflow: 'hidden',
                          ':visited': {
                            color: 'primary.main'
                          }
                        }}>
                        {logItem.stockSymbol}
                      </Typography>
                      <Typography
                        variant="caption"
                        sx={{
                          textOverflow: 'ellipsis',
                          overflow: 'hidden'
                        }}>
                        {new Date(logItem.updatedAt).toLocaleString()}
                      </Typography>
                    </Box>
                  </TableCell>
                  <TableCell align="right">
                    <Box
                      sx={{
                        display: 'flex',
                        alignItems: 'flex-end',
                        justifyContent: 'center',
                        color: logItem.type === 'BUY' ? 'green' : 'red',
                        fontWeight: 'bold',
                        fontSize: '1rem'
                      }}>
                      {logItem.type === 'BUY' ? '+' : '-'}
                      {logItem.quantity || '0.00'}x
                    </Box>
                  </TableCell>
                  <TableCell align="right">
                    <Stack alignItems="flex-start">
                      <Typography variant="h6">
                        ₹{Number(logItem.orderAmount).toFixed(2) || '0.00'}
                      </Typography>
                    </Stack>
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        ) : (
          <CardContent>No transactions history available</CardContent>
        )}
      </TableContainer>
    </Container>
  );
};

export default TransactionLogCard;
