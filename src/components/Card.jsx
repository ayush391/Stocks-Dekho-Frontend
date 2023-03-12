import { Card, CardContent, Typography } from '@mui/material';

const StockCard = ({ stock }) => {
  return (
    <div>
      <Card>
        <CardContent
          sx={{
            display: 'flex',
            // flexDirection: 'column',
            justifyContent: 'normal',
            alignItems: 'center',
            gap: 2
          }}>
          {/* <Typography variant='h5'>
                        {stock.symbol}
                    </Typography> */}
          <Typography variant="h6" fontWeight="bold">
            {stock.name}
          </Typography>
          <Typography variant="h6">{stock.meta[' FACE VALUE'] || 'No value'}</Typography>
          <Typography variant="h6">{stock.meta[' DATE OF LISTING'] || 'No date'}</Typography>
        </CardContent>
      </Card>
    </div>
  );
};

export default StockCard;
