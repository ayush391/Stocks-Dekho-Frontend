import axios from 'axios';
import { useEffect, useState } from 'react';

const BASE_URL = import.meta.env.VITE_BASE_URL + '/stocks' + '/sectors';

const useAllSectors = () => {
  const [sectorData, setSectorData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    (async () => {
      setLoading(true);
      try {
        const url = BASE_URL;
        const result = await axios.get(url);
        const data = await result?.data;
        setSectorData(data.data);
        setLoading(false);
      } catch (err) {
        setError(err.message);
        setLoading(false);
      }
    })();
  }, []);
  return { sectorData, loading, error };
};

export default useAllSectors;
