import { Container } from '@mui/material';
import { useParams } from 'react-router-dom';
import BuySellBar from '../components/Navbar/BuySellBar';
import News from '../components/News';
import LowHighSlider from '../components/Portfolio/LowHighSlider';
import PriceHistoryPanel from '../components/PriceHistoryPanel';
import StockPageHeader from '../components/StockPageHeader';
import { WatchListAndTransactionHistory } from '../components/Tabs/WatchListAndTransactionHistory';
const StockPage = () => {
  const params = useParams();
  const { symbol } = params;

  return (
    <>
      <Container maxWidth="sm">
        <WatchListAndTransactionHistory symbol={symbol} />
        <StockPageHeader symbol={symbol} />
        <PriceHistoryPanel symbol={symbol} />
        <LowHighSlider symbol={symbol} />
        <News symbol={symbol} />
      </Container>
      <BuySellBar symbol={symbol} />
    </>
  );
};

export default StockPage;
