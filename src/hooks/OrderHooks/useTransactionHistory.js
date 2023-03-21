import axios from 'axios';
import { getAuth } from 'firebase/auth';
import { useEffect, useState } from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { app } from '../../components/Firebase';

const url = import.meta.env.VITE_BASE_URL + '/transaction/history/';

const useTransactionHistory = (type, stockSymbol) => {
  const auth = getAuth(app);
  const [user, userLoading, userError] = useAuthState(auth);

  const [transactions, setTransactions] = useState([]);

  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    if (userLoading) {
      /* empty */
    } else {
      getLogList();
    }
  }, [userLoading, user]);

  async function getLogList() {
    try {
      setLoading(true);
      const response = await axios.get(url + user.uid);
      if (response.status === 200) {
        console.log(response.data);
        setTransactions([...response.data.allTransactions]);
        setLoading(false);
      }
    } catch (err) {
      setError(err.message);
      setLoading(false);
    }
  }

  return { transactions, loading, error };
};

export default useTransactionHistory;
