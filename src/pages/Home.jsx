import { Container } from '@mui/material';
import Navbar from '../components/Navbar/NavbarHome';
import News from '../components/News';
import StockPanel from '../components/StockPanel';

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
        <News />
      </Container>
      {/* </Box> */}
    </>
  );
};

export default Home;
