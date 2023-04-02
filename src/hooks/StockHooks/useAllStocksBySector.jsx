import axios from 'axios';
import { useEffect, useState } from 'react';

const BASE_URL = import.meta.env.VITE_BASE_URL + '/stocks/sectors';

const useAllStocksBySector = (endpoint = '', skip = 0, limit = 10) => {
  const [stocksData, setStocksData] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const [currentPage, setCurrentPage] = useState(0);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const url = encodeURI(BASE_URL + endpoint + '?skip=' + currentPage * limit);
        const result = await axios.get(url);
        const data = await result?.data;
        setStocksData(data.data);
        console.log(data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    })();
  }, [currentPage]);
  return { stocksData, loading, error };
};

export default useAllStocksBySector;
