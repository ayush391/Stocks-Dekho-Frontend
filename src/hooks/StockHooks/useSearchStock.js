import axios from 'axios';
import { useEffect, useState } from 'react';

const BASE_URL = import.meta.env.VITE_BASE_URL + '/prices';

const useSearchStock = (searchQuery) => {
  const [stocksData, setStocksData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const timeout = setTimeout(async () => {
      try {
        let url = BASE_URL + '?symbol=' + searchQuery;
        if (searchQuery.length > 0) {
          setLoading(true);
          const result = await axios.get(url);
          const data = await result.data;
          setStocksData(data.data);
          setLoading(false);
          console.log(data.data);
        } else {
          setStocksData([]);
          setLoading(false);
        }
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    }, 500);

    return () => clearTimeout(timeout);
  }, [searchQuery]);

  return { stocksData, loading, error };
};

export default useSearchStock;
