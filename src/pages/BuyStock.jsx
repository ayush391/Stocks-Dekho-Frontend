import {useParams} from 'react-router-dom'
import * as React from 'react';
import Divider from '@mui/joy/Divider';
import Input from '@mui/joy/Input';
import Select from '@mui/joy/Select';
import Option from '@mui/joy/Option';
import { FormLabel } from '@mui/joy';
import { FormControl } from '@chakra-ui/react';
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
import Button from '@mui/joy/Button';
import { useState } from 'react';

export default function BuyPage(){
    const [stockQty , setStockQty] = useState(1)
    const StockVal=()=>{
        return(
            <div style={{marginLeft:26}}>
            <StatGroup>
                <Stat>
                    
                    <StatNumber>2452</StatNumber>
                    <StatHelpText>
                        <StatArrow type='increase' />
                        3.36%
                    </StatHelpText>
                </Stat>
            </StatGroup>
            </div>
        )
    }
    const handleQty=(e)=>{
        setStockQty(e.target.value)
    }
    function InputDecorators() {
        const [currency, setCurrency] = React.useState('INR');
        return (
            <div  style={{display:'flex' , flexDirection:'row'}} >
                
            <FormLabel style={{marginRight:10 , fontWeight:'bold' , fontSize:22}} >QTY</FormLabel>
          <Input
            
            onChange={handleQty}
            endDecorator={
              <React.Fragment>
                <Divider orientation="vertical" />
                <Select
                  variant="plain"
                  value={currency}
                  
                  sx={{ mr: -1.5, '&:hover': { bgcolor: 'transparent' } }}
                >
                  <Option value="INR">INR</Option>
                  
                </Select>
              </React.Fragment>
            }
            sx={{ width: 300 }}
          />
          
          </div>
        );
      }
    const param = useParams()
    console.log(param)
    return (
        <div style={{marginLeft:'auto' , marginRight:'auto' , width:'80%'}}>
            
            <h1 style={{textAlign:'initial' , fontSize:22 , fontWeight:'bold' , margin:10}}>{param.symbol || "Stock"}</h1>
            
            <ChakraProvider>
            <StockVal />
            </ChakraProvider>
            <LineGraph/>
            <InputDecorators/>
            <p>confirm buying {stockQty} stock:{param.symbol} at 2452</p>
            <Button>Buy Stock</Button>

        </div>
    )
}