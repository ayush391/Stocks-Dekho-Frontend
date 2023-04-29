import { Divider } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { useAppContext } from '../../context/AppState';
import { LOCAL } from '../../utils/routes';
import './portfolioTab.css';

const PortfolioTab = () => {
  const { user } = useAppContext();
  const [name, setName] = useState('');
  const baseUrl = import.meta.env.VITE_BASE_URL + '/portfolio/';
  const [HoldingsList, setHoldingsList] = useState([]);
  const [portfolioValue, setPortfolioValue] = useState(0);

  useEffect(() => {
    async function getHoldings() {
      const { data } = await axios.get(baseUrl + user?.uid);
      setHoldingsList(data.holdings);
      setPortfolioValue(Number(data.portfolio_value));
    }
    if (user) {
      setName(user?.displayName?.toString());
      getHoldings();
    }
  }, [user]);
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
          <Link to={user != null ? LOCAL.PORTFOLIO : LOCAL.LOGIN}>
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
