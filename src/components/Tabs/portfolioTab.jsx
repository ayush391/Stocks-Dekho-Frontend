import {
  ChakraProvider,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber
} from '@chakra-ui/react';
import axios from 'axios';
import { getAuth } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { app } from '../Firebase';
import { Typography } from '@mui/material';
// const StatComponent = ({ portfolio_value }) => {
//   return (
//     <div style={{ marginLeft: 10 }}>
//       <StatGroup>
//         <Stat>
//           <StatLabel>Portfolio</StatLabel>
//           <StatNumber>{portfolio_value.toFixed(2)}</StatNumber>
//           <StatHelpText>
//             <StatArrow type="increase" />
//             23.36%
//           </StatHelpText>
//         </Stat>
//       </StatGroup>
//     </div>
//   );
// };
const PortfolioTab = () => {
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
    <div>
      <br></br>
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
        <h1 style={{ fontSize: '29', fontWeight: 'bolder' }}>
          {' '}
          Hi , Welcome Back
          <br></br>
          {name}
        </h1>
        <div>
          <h3>Portfolio Value {portfolioValue.toFixed(2)}</h3>
        </div>
      </div>
    </div>
  );
};
export default PortfolioTab;
