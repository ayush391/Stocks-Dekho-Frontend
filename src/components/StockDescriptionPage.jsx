import axios from "axios"
import { useEffect, useState } from "react"
import { Card, CardHeader, CardBody, CardFooter } from '@chakra-ui/react'
import { Heading , Text } from "@chakra-ui/layout"
import { Box } from "@chakra-ui/layout"
import { Stack , StackDivider } from "@chakra-ui/layout"

const defaultVal ={
    "_id": "63e79de3f9dbfcfd30346db3",
        "symbol": "Default",
        "open": 1821,
        "dayHigh": 1868.95,
        "dayLow": 1812.65,
        "lastPrice": 1856,
        "previousClose": 1824.65,
        "change": "31.6",
        "pChange": "1.73",
        "totalTradedVolume": 30977,
        "totalTradedValue": 57418657.43,
        "lastUpdateTime": "2023-02-10T10:23:27.000Z",
        "yearHigh": 1960,
        "ffmc": 69348735472.61,
        "yearLow": 1235.8,
        "nearWKH": 5.293367346938775,
        "nearWKL": -50.20634406861952,
        "perChange365d": "-",
        "perChange30d": "-",
        "meta": {
            "symbol": "360ONE",
            "companyName": "360 ONE WAM LIMITED",
            "activeSeries": [
                "EQ"
            ],
            "debtSeries": [],
            "tempSuspendedSeries": [],
            "isFNOSec": false,
            "isCASec": false,
            "isSLBSec": true,
            "isDebtSec": false,
            "isSuspended": false,
            "isETFSec": false,
            "isDelisted": false,
            "isin": "INE466L01020"
        },
        "__v": 0
}
export const StockCard=(props)=>{
    const [stockDetail , setStockDetail] = useState(defaultVal)
    // console.log(props)
    useEffect(()=>{
        async function getStockDetail(){
            if (props.item!=null){
            const response = await axios.get('http://localhost:8000/prices/'+props.item.toString())
            console.log('stock',response.data.data , props.item)
            if (response.data.data!=null){
                setStockDetail(response.data.data)
            }
        }
        }   
        getStockDetail()
    },[props.item])
    return (
        <div style={{marginTop:20 , marginBottom:20}}>
        <Card>
            <CardHeader>
                <Heading size='md'>{stockDetail.symbol}</Heading>
            </CardHeader>

            <CardBody>
                <Stack divider={<StackDivider />} spacing='4'>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    Stock Price
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                    {stockDetail.lastPrice}
                    </Text>
                </Box>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    Day Low
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                    {stockDetail.dayLow}
                    </Text>
                </Box>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    Day High
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                    {stockDetail.dayHigh}
                    </Text>
                </Box>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    Prev Close
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                    {stockDetail.previousClose}
                    </Text>
                </Box>
                <Box>
                    <Heading size='xs' textTransform='uppercase'>
                    Total Traded Value
                    </Heading>
                    <Text pt='2' fontSize='sm'>
                    {stockDetail.totalTradedValue}
                    </Text>
                </Box>
                </Stack>
            </CardBody>
            </Card>
        </div>
    )
}