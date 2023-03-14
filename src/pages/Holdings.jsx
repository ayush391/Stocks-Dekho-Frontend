import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Avatar, Card, Typography } from '@mui/material';
import { Stack } from '@mui/system';
import axios from 'axios';
import { getAuth } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import { app } from '../components/Firebase';

const StockCard = (props) => {
  const holdings = props.holdings;
  const [priceTick, setPriceTick] = useState({});
  const baseUrl = import.meta.env.VITE_BASE_URL + '/prices/';

  useEffect(() => {
    async function getPrice() {
      const response = await axios.get(baseUrl + holdings.stockSymbol.toString());
      // console.log(response.data.data.meta.companyName)
      setPriceTick(response.data.data);
    }
    getPrice();
  }, []);
  return (
    <Card sx={{ borderRadius: 10, marginBottom: '1rem', padding: 2 }}>
      {priceTick.pChange != null ? (
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
      ) : (
        <div></div>
      )}
    </Card>
  );
};
export const Holdings = () => {
  const auth = getAuth(app);
  const baseUrl = import.meta.env.VITE_BASE_URL + '/portfolio/';
  const [HoldingsList, setHoldingsList] = useState([]);
  const [user, loading, error] = useAuthState(auth);
  useEffect(() => {
    async function getHoldings() {
      const response = await axios.get(baseUrl + user.uid);
      console.log(response.data.holdings);
      setHoldingsList(response.data.holdings);
    }
    if (loading) {
      /* empty */
    } else {
      getHoldings();
    }
  }, [loading]);

  return (
    <div>
      {HoldingsList.map((holdings, idx) => (
        <StockCard key={idx} holdings={holdings} />
      ))}
    </div>
  );
};

export const HoldingPage = () => {
  const navigate = useNavigate();

  function backBtn() {
    navigate(-1);
  }

  return (
    <div style={{ width: '80%', marginLeft: 'auto', marginRight: 'auto' }}>
      <Stack direction={'row'} sx={{ alignItems: 'center' }}>
        <Avatar sx={{ marginRight: 1 }}>
          <ArrowBackIcon onClick={backBtn} />
        </Avatar>
        <h1>Holdings</h1>
      </Stack>
      <Holdings />
    </div>
  );
};
