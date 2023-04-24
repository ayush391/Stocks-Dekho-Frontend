import axios from 'axios';
import { getAuth } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { app } from '../Firebase';
import { Divider } from '@mui/material';
import './portfolioTab.css';
import { Link } from 'react-router-dom';
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
    <div style={{ flexShrink: 0, minWidth: 'sm', overflowX: 'auto', marginRight: 5 }}>
      <br></br>
      <div className="background-image">
        <h1 style={{ fontSize: '29', fontWeight: 'bolder', textAlign: 'center' }}>
          {' '}
          Hi , Welcome Back
          <br></br>
          {user != null ? name : ''}
        </h1>
        <Divider />
        <div>
          <Link to={user != null ? '/portfolio' : 'login'}>
            <h3 style={{ textAlign: 'center', color: 'white' }}>
              {user != null ? 'Portfolio Value ' + portfolioValue.toFixed(2) : 'Please Log In'}
            </h3>
          </Link>
        </div>
      </div>
    </div>
  );
};
export default PortfolioTab;
