import { useQuery } from 'react-query';
import { api } from '../services';
import { useEffect, useState } from 'react';

export const useData = (route, queryKey = [], query, searchQuery) => {
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (route && queryKey.every((part) => !!part)) {
      setReady(queryKey.includes('search') ? !!searchQuery : true);
    }
  }, [queryKey, searchQuery]);

  const fetchData = () => {
    const params = searchQuery ? { symbol: searchQuery, ...query } : { ...query };
    return api.get(`${route}/${queryKey.join('/')}`, params);
  };

  return useQuery([...queryKey, searchQuery], fetchData, {
    enabled: ready,
    select: (data) => data.data
  });
};
