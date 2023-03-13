import { Card, CardContent, Container, Stack, Typography } from '@mui/material';

export const TransactionLogCard = (props) => {
  return (
    <Container>
      <Card>
        <CardContent>
          <Stack direction={'row'} justifyContent={'space-evenly'}>
            <Typography>Stock Symbol</Typography>
            <Typography>Date</Typography>
            <Typography>Total Price</Typography>
          </Stack>
        </CardContent>
      </Card>
      {props.log.map((log, idx) => (
        <Card key={idx}>
          <CardContent>
            <Stack direction={'row'} justifyContent={'space-evenly'}>
              <Typography>{log.stockSymbol}</Typography>
              <Typography>{log.updatedAt.substring(0, 10)}</Typography>

              <Typography
                sx={{
                  border: '1px solid',
                  borderRadius: 1,
                  paddingLeft: 2,
                  paddingRight: 2,
                  color: 'green'
                }}>
                {log.orderAmount}
              </Typography>
            </Stack>
          </CardContent>
        </Card>
      ))}
    </Container>
  );
};
