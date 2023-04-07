import { Newspaper } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';
import axios from 'axios';
import { useEffect, useState } from 'react';
import CircularLoading from './Loading/CircularLoading';
import { NewsCard } from './News/NewsCard';

const News = ({ symbol }) => {
  const [news, setNews] = useState([]);
  const SymbolStr = symbol != null ? symbol.toString() : '';

  const BASE_URL = import.meta.env.VITE_BASE_URL + '/news/' + SymbolStr;
  console.log('URL', BASE_URL);

  useEffect(() => {
    async function getNews() {
      const result = await axios.get(BASE_URL);
      setNews(result.data.data.articles)
      console.log(result.data.data.articles)
    }
    getNews();
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
