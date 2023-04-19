import { Container, Stack, Typography } from '@mui/material';
import News from '../components/News';
import StockPanel from '../components/StockPanel';
import { SectorTab } from '../components/Tabs/Sectors';
import TopTrader from '../components/Table/TopTrader';
import WatchList from '../components/Tabs/watchlist';
import PortfolioTab from '../components/Tabs/portfolioTab';
import EventTab from '../components/Tabs/eventTab';
import { makeStyles } from '@mui/styles';

const useStyles = makeStyles({
  grid: {
    display: 'flex',
    overflowX: 'scroll',
    flexDirection: 'row'
  }
});
const Home = () => {
  const classes = useStyles();
  return (
    <>
      <Stack direction={'row'} sx={{ overflowX: 'scroll', maxWidth: 'sm', padding: 2 }}>
        <PortfolioTab />
        <EventTab />
      </Stack>
      <Container maxWidth="sm">
        <StockPanel />
      </Container>

      <Container
        maxWidth="sm"
        sx={{
          my: 2,
          py: 2
        }}>
        <WatchList />
        <TopTrader />
        <Typography sx={{ marginTop: 3, marginBottom: 3, fontWeight: 'bold', fontSize: 22 }}>
          {' '}
          Sector
        </Typography>
        <SectorTab />
        <News symbol={'home'} />
      </Container>
    </>
  );
};

export default Home;
