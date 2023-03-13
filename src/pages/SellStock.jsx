import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
    ChakraProvider,
} from '@chakra-ui/react'
import LineGraph from '../components/Portfolio/LineGraph';
import { Button } from '@chakra-ui/react';
import { useState } from 'react';
import { getAuth } from 'firebase/auth';
import ConfirmOrder from '../components/Order/ConfirmOrder';
import axios from 'axios';
import { getAuth } from 'firebase/auth';
import { useState } from 'react';
import { app } from '../components/Firebase';
import useStockData from '../hooks/StockHooks/useStockData';
export default function SellStock(props) {
    const [stockQty, setStockQty] = useState(1)
    const user = getAuth(app)
    const sellUrl = process.env.REACT_APP_BASE_URL + '/transaction/review/sell'
    const [open, setOpen] = useState(false)
    const [orderReview, setOrderReview] = useState({})
    const parameter = useParams()
    const { symbol } = parameter
    const { stockData, loading, error } = useStockData(symbol)
    const StockVal = () => {
        return (
            <div style={{ marginLeft: 26 }}>
                <StatGroup>
                    <Stat>
                        <StatNumber>{stockData != null ? stockData.lastPrice : 2452}</StatNumber>
                        <StatHelpText>
                            <StatArrow type={stockData != null && stockData.pChange.substring(0, 1) == '-' ? 'decrease' : 'increase'} />
                            {stockData != null ? stockData.pChange : 2452}
                        </StatHelpText>
                    </Stat>
                </StatGroup>
            </div>
        )
    }

    const handleQty = (e) => {
        setStockQty(e.target.value)
    }

    const param = props
    console.log(param)


    const SellReview = async () => {
       
            const response = await axios.post(sellUrl, {
                "userId": user.currentUser.uid,
                "stockSymbol": symbol != null ?symbol : 'Symbol',
                "quantity": stockQty
            })
            console.log(response.data)
            setOrderReview(response.data)
            setOpen(true)


        
    }
    return (
        <div style={{ marginLeft: 'auto', marginRight: 'auto' }}>

            <div style={{ display: 'flex', flexDirection: 'row' }}>

                <h1 style={{ textAlign: 'initial', fontSize: 22, fontWeight: 'bold', margin: 10 }}>{"Price"}</h1>

                <ChakraProvider>
                    <StockVal />
                </ChakraProvider>
            </div>
            <div style={{ display: 'flex', flexDirection: 'row' }} >

                <FormLabel style={{ marginRight: 10, fontWeight: 'bold', fontSize: 22 }} >QTY</FormLabel>
                <Input

                    onChange={handleQty}
                    endDecorator={
                        <React.Fragment>

                            <Select
                                variant="plain"
                                value={'INR'}

                                sx={{ mr: -1.5, '&:hover': { bgcolor: 'transparent' } }}
                            >


                            </Select>
                        </React.Fragment>
                    }
                    sx={{ width: 300 }}
                />

            </div>
            <p>Buying {stockQty} stock : {stockData != null ? stockData.symbol : 'Symbol'} at {stockData != null ? stockData.lastPrice * stockQty : 2452}</p>
            <Button style={{ width: '100%', marginRight: 'auto', marginLeft: 'auto', color: 'white', backgroundColor: 'red' }} onClick={SellReview}> Sell {props.symbol} </Button>
            <ConfirmOrder onClose={() => setOpen(false)} open={open} icon={stockData != null ? stockData.icon : 'Symbol'} reviewOrder={orderReview} transactionType='sell' />

        </div>
    )
}
