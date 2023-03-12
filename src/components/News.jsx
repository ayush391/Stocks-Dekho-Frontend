import { Newspaper } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CircularLoading from './Loading/CircularLoading';
import { NewsCard } from './News/NewsCard';

const BASE_URL = process.env.REACT_APP_BASE_URL + '/news' + '/PAYTM';

const News = () => {
  const [news, setNews] = useState([]);

  useEffect(() => {
    (async () => {
      const result = await axios.get(BASE_URL);
      setNews(result.data.data.articles.slice(0, 6) || result.data.articles);
    })();
  }, []);

  return (
    <>
      <Stack
        sx={{
          backgroundImage: 'linear-gradient(180deg, #7abbfc80,#7abbfc00 400px)',
          borderRadius: '20px',
          px: 2
        }}>
        <Stack direction="row" alignItems="flex-end" justifyContent="center" marginY={3}>
          <Newspaper color="primary" fontSize="large" />
          <Typography variant="h6" color="#00000080" marginX={1} fontWeight="bold">
            TOP STORIES
          </Typography>
        </Stack>
        {news ? (
          <Stack direction="row" spacing={2} sx={{ flexWrap: 'nowrap', overflow: 'scroll' }}>
            {news.map((article, idx) => {
              return <NewsCard key={idx} {...article} />;
            })}
          </Stack>
        ) : (
          <CircularLoading />
        )}
      </Stack>
    </>
  );
};

export default News;
