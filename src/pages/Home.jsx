import { Container, Typography } from '@mui/material';
import News from '../components/News';
import StockPanel from '../components/StockPanel';
import { SectorTab } from '../components/Tabs/Sectors';
import { YoutubeTab } from '../components/Table/youtube';

const Home = () => {
  return (
    <>
      <Container maxWidth="sm">
        <Typography sx={{ marginTop: 3, marginBottom: 3, fontWeight: 'bold', fontSize: 22 }}>
          {' '}
          Sector
        </Typography>

        <SectorTab />
        <StockPanel />
      </Container>

      <Container
        maxWidth="sm"
        sx={{
          my: 2,
          py: 2
        }}>

        <News />
      </Container>
    </>
  );
};

export default Home;
