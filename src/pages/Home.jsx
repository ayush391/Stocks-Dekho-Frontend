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
      {/* <Box
        sx={{
          backgroundImage: `url(${bgPatternPanel})`,
          backgroundSize: '40%'
        }}> */}
      <Container
        maxWidth="sm"
        sx={{
          my: 2,
          py: 2
          // backdropFilter: 'blur(2px)'
        }}>
        <SectorTab />
        <News />
      </Container>
      {/* </Box> */}
    </>
  );
};

export default Home;
