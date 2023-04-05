import {
  ChakraProvider,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber
} from '@chakra-ui/react';
import { Typography } from '@mui/material';
import axios from 'axios';
import { getAuth } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { app } from '../components/Firebase';
import { StockCard } from './Holdings';
const StatComponent = ({ portfolio_value }) => {
  return (
    <div style={{ marginLeft: 10 }}>
      <StatGroup>
        <Stat>
          <StatLabel>Portfolio</StatLabel>
          <StatNumber>{portfolio_value.toFixed(2)}</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>
      </StatGroup>
    </div>
  );
};

export const Portfolio = () => {
  const auth = getAuth(app);

  const [user, loading, error] = useAuthState(auth);
  const [name, setName] = useState('');
  const baseUrl = import.meta.env.VITE_BASE_URL + '/portfolio/';
  const [HoldingsList, setHoldingsList] = useState([]);
  const [portfolioValue, setPortfolioValue] = useState(0);

  useEffect(() => {
    async function getHoldings() {
      const { data } = await axios.get(baseUrl + user.uid);
      setHoldingsList(data.holdings);
      setPortfolioValue(Number(data.portfolio_value));
    }
    if (user) {
      setName(user?.displayName?.toString());
      getHoldings();
    }
  }, [loading, user, error]);

  return (
    <div style={{ margin: 10, padding: 20 }}>
      <h1
        style={{
          textAlign: 'center',
          fontSize: 22,
          padding: 3,
          color: 'gray',
          fontWeight: 'bolder',
          fontFamily: 'fantasy'
        }}>
        Portfolio
      </h1>

      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '80%',
          backgroundColor: 'lightgreen',
          color: 'white',
          fontWeight: 'bold',
          marginRight: 'auto',
          marginLeft: 'auto',
          padding: 10,
          borderRadius: 20,
          marginBottom: 20
        }}>
        <h1 style={{ fontSize: '29', fontWeight: 'bolder' }}>{name}</h1>

        <div style={{ display: 'flex', flexDirection: 'row', height: '25%', width: '25%' }}>
          <ChakraProvider>
            <StatComponent portfolio_value={portfolioValue} />
          </ChakraProvider>
        </div>
      </div>
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maringTop: 20,
          paddingLeft: 10,
          paddingRight: 10
        }}>
        <ChakraProvider>
          {/* <TabView /> */}
          <div style={{ width: '80%', marginRight: 'auto', marginLeft: 'auto', marginBottom: 2 }}>
            {/* <PieChart /> */}
          </div>
        </ChakraProvider>
        <Typography
          textAlign={'intial'}
          sx={{ margin: 1, fontFamily: 'Raleway, Arial' }}
          variant="h5">
          Holdings
        </Typography>
        <div>
          {HoldingsList.map((holdings, idx) => (
            <StockCard key={idx} holdings={holdings} />
          ))}
        </div>
      </div>
    </div>
  );
};
