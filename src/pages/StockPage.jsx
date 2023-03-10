import News from '../components/News';
import { useParams } from 'react-router-dom';
import { Box, Container, Divider, Stack, Typography } from '@mui/material';
import BuySellPanel from '../components/BuySellPanel';
import PriceHistoryPanel from '../components/PriceHistoryPanel';
import StockPageHeader from '../components/StockPageHeader';
import BuySellBar from '../components/Navbar/BuySellBar';

const StockPage = () => {
    const params = useParams()
    const { symbol } = params

    return (
        <>
            <Container maxWidth='sm'>
                <StockPageHeader symbol={symbol} />
                <PriceHistoryPanel symbol={symbol} />
                {/* <BuySellPanel symbol={symbol} /> */}
                <News />
            </Container >
            <BuySellBar symbol={symbol} />
        </>

    )
}

export default StockPage;