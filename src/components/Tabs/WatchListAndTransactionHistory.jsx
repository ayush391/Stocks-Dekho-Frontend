import { Assignment, Bookmark, BookmarkBorder } from '@mui/icons-material';
import { IconButton, Stack } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import { useAppContext } from '../../context/AppState';

const WatchListAndTransactionHistory = ({ symbol }) => {
  const { user } = useAppContext();
  const transactionUrl = '/transactionHistory';
  const [inWatchlist, setInWatchlist] = useState(false);
  const url = import.meta.env.VITE_BASE_URL;

  useEffect(() => {
    user && checkInWatchlist();
  }, [user]);

  const checkInWatchlist = async () => {
    const { data } = await axios.get(
      `${url}/watchlist/checkIfInWatchList/${user?.uid}?stockSymbol=${symbol?.toString()}`
    );
    if (data.isInWatchlist) {
      setInWatchlist(true);
    }
  };

  const handleWatchListBtn = async () => {
    if (inWatchlist) {
      const response = await axios.put(url + '/watchlist/' + user?.uid, { stockSymbol: symbol });
      if (response.status == 200) {
        setInWatchlist(false);
      }
    } else {
      const response = await axios.put(url + '/watchlist', {
        stockSymbol: symbol,
        userId: user?.uid
      });
      if (response.status == 200) {
        setInWatchlist(true);
      }
    }
  };
  return (
    <Stack direction="row" justifyContent="flex-end">
      <IconButton color="success" onClick={handleWatchListBtn}>
        {inWatchlist ? <Bookmark color="success" /> : <BookmarkBorder color="success" />}
      </IconButton>
      <RouterLink to={transactionUrl} state={{ stockSymbol: symbol }}>
        <IconButton>
          <Assignment />
        </IconButton>
      </RouterLink>
    </Stack>
  );
};

export { WatchListAndTransactionHistory };
