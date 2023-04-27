import { Container, Stack, Typography } from '@mui/material';
import News from '../components/News';
import StockPanel from '../components/StockPanel';
import TopTrader from '../components/Table/TopTrader';
import SectorTab from '../components/Tabs/Sectors';
import EventTab from '../components/Tabs/eventTab';
import PortfolioTab from '../components/Tabs/portfolioTab';

const Home = () => {
  return (
    <Container maxWidth="sm">
      <Stack direction={'row'} sx={{ overflowX: 'scroll', maxWidth: 'sm', padding: 2 }}>
        <PortfolioTab />
        <EventTab />
      </Stack>
      <StockPanel />
      <TopTrader />
      <Typography sx={{ marginTop: 3, marginBottom: 3, fontWeight: 'bold', fontSize: 22 }}>
        Sector
      </Typography>
      <SectorTab />
      <News symbol="home" />
    </Container>
  );
};

export default Home;
