import { Container, Typography } from '@mui/material';
import News from '../components/News';
import StockPanel from '../components/StockPanel';
import TopTrader from '../components/Table/TopTrader';
import { SectorTab } from '../components/Tabs/Sectors';
import PortfolioTab from '../components/Tabs/portfolioTab';
const Home = () => {
  return (
    <>
      <Container maxWidth="sm">
        <PortfolioTab />
        <StockPanel />
      </Container>

      <Container
        maxWidth="sm"
        sx={{
          my: 2,
          py: 2
        }}>
        <TopTrader />
        <Typography sx={{ marginTop: 3, marginBottom: 3, fontWeight: 'bold', fontSize: 22 }}>
          Sector
        </Typography>
        <SectorTab />
        <News symbol={'home'} />
      </Container>
    </>
  );
};

export default Home;
