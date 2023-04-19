import axios from 'axios';
import { useEffect, useState } from 'react';
import { getAuth } from 'firebase/auth';
import { app } from '../Firebase';
import { Stack } from '@mui/material';
import { useAuthState } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
const WatchList = () => {
  const auth = getAuth(app);
  const [user, loading, error] = useAuthState(auth);
  const baseUrl = import.meta.env.VITE_BASE_URL;
  const [watchList, setWatchList] = useState([]);
  const navigation = useNavigate();
  useEffect(() => {
    const getWatchList = async () => {
      if (auth.currentUser != null) {
        const response = await axios.get(baseUrl + '/watchlist/' + auth.currentUser.uid);
        setWatchList(response.data.watchlist);
      }
    };
    if (loading) {
      console.log(loading);
    } else {
      getWatchList();
    }
  }, [user, loading]);
  const handleBtn = (stock) => {
    navigation('/' + stock);
  };
  return (
    <Stack justifyContent={'center'} justifyItems={'center'}>
      {user != null && watchList != null ? (
        <div>
          <h3 style={{ fontFamily: 'sans-serif', fontWeight: 'bolder' }}>WatchList</h3>
          {watchList.slice(0, watchList.length > 3 ? 3 : watchList.length).map((stock) => (
            // eslint-disable-next-line react/jsx-key
            <p
              style={{
                textAlign: 'center',
                border: '1px solid',
                borderRadius: 10,
                padding: 10,
                transition: 'background-color 0.5s'
              }}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#D3D3D3')}
              onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'transparent')}
              onClick={(e) => handleBtn(stock)}>
              {' '}
              {stock}{' '}
            </p>
          ))}
        </div>
      ) : (
        <></>
      )}
    </Stack>
  );
};
export default WatchList;
