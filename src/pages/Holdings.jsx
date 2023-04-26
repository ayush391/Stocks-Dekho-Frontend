import { Avatar, Card, CardActionArea, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../context/AppState';

export const StockCard = ({ holdings }) => {
  const [priceTick, setPriceTick] = useState({});
  const baseUrl = import.meta.env.VITE_BASE_URL + '/prices/';

  useEffect(() => {
    getPrice();
  }, []);

  const getPrice = async () => {
    const { data } = await axios.get(baseUrl + holdings.stockSymbol.toString());
    setPriceTick(data.data);
  };

  return (
    <Card sx={{ borderRadius: 10, marginBottom: '1rem', padding: 2 }}>
      <CardActionArea component={Link} to={'/' + holdings.stockSymbol.toString()}>
        {priceTick.pChange && (
          <Stack direction={'row'} justifyContent={'space-evenly'}>
            <Avatar src={priceTick.icon}></Avatar>
            <Typography sx={{ verticalAlign: 'center', textAlign: 'center' }}>
              {holdings.meta ? holdings.meta.companyName : holdings.stockSymbol}
            </Typography>
            <Stack direction={'column'}>
              <Typography
                fontWeight={'bold'}
                color={priceTick.pChange.substring(0, 1) == '-' ? 'red' : 'lightgreen'}>
                {priceTick.lastPrice}{' '}
              </Typography>
              <Typography
                fontSize={'0.8rem'}
                textAlign="center"
                color={priceTick.pChange.substring(0, 1) == '-' ? 'red' : 'lightgreen'}>
                {priceTick.pChange}
              </Typography>
            </Stack>
            <Stack direction={'column'}>
              <Typography fontWeight={'bold'}>₹{holdings.value}</Typography>
              <Typography fontSize={'0.8rem'}>{Number(holdings.quantity)} shares</Typography>
            </Stack>
          </Stack>
        )}
      </CardActionArea>
    </Card>
  );
};
export const Holdings = () => {
  const { user } = useAppContext();
  const baseUrl = import.meta.env.VITE_BASE_URL + '/portfolio/';
  const [HoldingsList, setHoldingsList] = useState([]);

  useEffect(() => {
    getHoldings();
  }, []);

  const getHoldings = async () => {
    const { data } = await axios.get(baseUrl + user?.uid);
    setHoldingsList(data.holdings);
  };

  return (
    <>
      {HoldingsList.map((holdings, idx) => (
        <StockCard key={idx} holdings={holdings} />
      ))}
    </>
  );
};

export const HoldingPage = () => {
  return (
    <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
      <Stack direction={'row'} sx={{ alignItems: 'center' }}>
        <h1>Holdings</h1>
      </Stack>
      <Holdings />
    </div>
  );
};
