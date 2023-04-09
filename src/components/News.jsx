import { Newspaper } from '@mui/icons-material';
import { Stack, Typography } from '@mui/material';
import { useData } from '../hooks/useData';
import { REMOTE } from '../utils/remoteRoutes';
import CircularLoading from './Loading/CircularLoading';
import { NewsCard } from './News/NewsCard';

const News = ({ symbol = 'home' }) => {
  const { data, isLoading } = useData(REMOTE.NEWS, [symbol]);

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
        {isLoading ? (
          <CircularLoading />
        ) : (
          <Stack direction="row" spacing={2} sx={{ flexWrap: 'nowrap', overflow: 'scroll' }}>
            {data?.data?.articles?.map((article, idx) => {
              return <NewsCard key={idx} {...article} />;
            })}
          </Stack>
        )}
      </Stack>
    </>
  );
};

export default News;
