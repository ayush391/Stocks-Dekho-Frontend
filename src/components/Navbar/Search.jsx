import { SearchOutlined } from '@mui/icons-material';
import {
  Box,
  Card,
  ClickAwayListener,
  Input,
  InputAdornment,
  Stack,
  Table,
  TableBody,
  TableCell,
  TableRow,
  Typography
} from '@mui/material';
import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useData } from '../../hooks/useData';
import { useDebounce } from '../../hooks/useDebounce';
import { REMOTE } from '../../utils/remoteRoutes';
import StockPChange from '../Table/StockPChange';

const Search = () => {
  const [searchQuery, setSearchQuery] = useState('');
  const [showSuggest, setShowSuggest] = useState(false);
  const debouncedSearchQuery = useDebounce(searchQuery);
  const { data } = useData(REMOTE.PRICES, ['search'], null, debouncedSearchQuery);
  const stocksData = data?.data;

  const handleSuggest = (val) => {
    setShowSuggest(val);
  };

  return (
    <ClickAwayListener onClickAway={() => handleSuggest(false)}>
      <Box width="350px">
        <Input
          color="white"
          onChange={(e) => setSearchQuery(e.target.value)}
          value={searchQuery}
          onFocus={() => handleSuggest(true)}
          fullWidth
          disableUnderline
          placeholder="Search..."
          startAdornment={
            <InputAdornment position="start">
              <SearchOutlined color="primary" />
            </InputAdornment>
          }
          sx={{
            backgroundColor: 'white.main',
            borderRadius: '10px',
            padding: '5px'
          }}
        />
        <Box
          sx={{
            position: 'relative'
          }}>
          <Card
            sx={{
              display: stocksData?.length > 0 && showSuggest ? 'block' : 'none',
              top: '-5px',
              position: 'absolute',
              maxHeight: '500px',
              overflowY: 'scroll',
              borderRadius: '20px',
              borderTopLeftRadius: '0',
              borderTopRightRadius: '0',
              width: '100%'
            }}>
            <Table>
              <TableBody>
                {searchQuery &&
                  stocksData?.map((stock) => {
                    return (
                      <TableRow
                        key={stock.symbol}
                        component={Link}
                        to={'/' + stock.symbol}
                        onClickCapture={() => handleSuggest(false)}
                        sx={{
                          '&:hover': {
                            backgroundColor: '#00000010'
                          }
                        }}>
                        <TableCell>
                          <Stack width={30}>
                            <Typography variant="caption" fontWeight="bold">
                              {stock.symbol}
                            </Typography>
                            {/* <Typography variant='caption'>
                            {stock.meta?.companyName}
                          </Typography> */}
                            ₹{parseFloat(stock.lastPrice).toFixed(2)}
                          </Stack>
                        </TableCell>
                        <TableCell align="right">
                          <Stack alignItems="center"></Stack>
                        </TableCell>
                        <TableCell align="right">
                          <StockPChange
                            pChange={stock.pChange}
                            style={{ flexDirection: 'column' }}
                          />
                        </TableCell>
                      </TableRow>
                    );
                  })}
              </TableBody>
            </Table>
          </Card>
        </Box>
      </Box>
    </ClickAwayListener>
  );
};

export default Search;
