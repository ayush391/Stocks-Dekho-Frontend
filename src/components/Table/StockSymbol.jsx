import { Box } from '@mui/material';
import { getRandomColor } from '../../utils/randomColor';

const StockSymbol = ({ symbol = 'StockSymbol', idx = 1 }) => {
  return (
    <Box
      sx={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        width: '13ch',
        fontSize: '0.6rem',
        fontFamily: 'Roboto,Arial,sans-serif',
        fontWeight: 'bold',
        color: 'white',
        whiteSpace: 'nowrap',
        backgroundColor: getRandomColor(symbol.charCodeAt(1) + 1),
        borderRadius: '5px'
      }}>
      {symbol}
    </Box>
  );
};

export default StockSymbol;
