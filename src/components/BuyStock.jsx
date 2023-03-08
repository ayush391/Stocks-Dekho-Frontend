import {useParams} from 'react-router-dom'
import * as React from 'react';

import { FormControl , FormLabel , Input  , Select } from '@chakra-ui/react';

import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
    ChakraProvider,
} from '@chakra-ui/react'
import LineGraph from './Portfolio/LineGraph';
import { Button } from '@chakra-ui/react';
import { useState } from 'react';

export default function BuyComp(props){
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

    const param = props.symbol
    console.log(param)
    return (
        <div style={{marginLeft:'auto' , marginRight:'auto'}}>

            <div style={{display:'flex' , flexDirection:'row'}}>
            
            <h1 style={{textAlign:'initial' , fontSize:22 , fontWeight:'bold' , margin:10}}>{"Price"}</h1>
            
            <ChakraProvider>
            <StockVal />
            </ChakraProvider>
            </div>
            <div  style ={{display:'flex' , flexDirection:'row'}} >
                
                <FormLabel style={{marginRight:10 , fontWeight:'bold' , fontSize:22}} >QTY</FormLabel>
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
            <p>Buying {stockQty} stock:{param.symbol} at {2452*stockQty || 2452}</p>
            <Button style={{width:'100%' , marginRight:'auto' , marginLeft:'auto' , color:'white' , backgroundColor:'green'}}> Buy {props.symbol  } </Button>

        </div>
    )
}