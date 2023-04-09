import { useQuery } from 'react-query';
import { api } from '../services';
import { useEffect, useState } from 'react';

export const useData = (route, queryKey = [], query) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (queryKey.every((part) => !!part)) {
      setReady(true);
    }
  }, [queryKey]);

  const fetchData = () => {
    return api.get(`${route}/${queryKey.join('/')}`, { ...query });
  };

  return useQuery(queryKey, fetchData, { enabled: ready, select: (data) => data.data });
};
