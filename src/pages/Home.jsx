import { Container } from '@mui/material';
import News from '../components/News';
import StockPanel from '../components/StockPanel';
import { SectorTab } from '../components/Tabs/Sectors';

const Home = () => {
  return (
    <>
      <Container maxWidth="sm">
        <StockPanel />
      </Container>

      <Container
        maxWidth="sm"
        sx={{
          my: 2,
          py: 2
        }}>
        <SectorTab />
        <News />
      </Container>
    </>
  );
};

export default Home;
