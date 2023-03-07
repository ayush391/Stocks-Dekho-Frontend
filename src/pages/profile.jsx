import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
    ChakraProvider,
} from '@chakra-ui/react'
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import { PieChart } from '../components/Portfolio/pie'
import LineGraph  from '../components/Portfolio/LineGraph'
import { PortfolioHistory } from '../components/Portfolio/PortfolioHistory'
const StatComponent = () => {
    return (
        <div style={{ marginLeft: 10 }}>
            <StatGroup>
                <Stat>
                    <StatLabel>Portfolio</StatLabel>
                    <StatNumber>345,670</StatNumber>
                    <StatHelpText>
                        <StatArrow type='increase' />
                        23.36%
                    </StatHelpText>
                </Stat>
            </StatGroup>
        </div>
    )
}


export const Profile = () => {

    const TabView=()=>{
        return (
            <Tabs isFitted variant='enclosed' colorScheme='green'> 
            <TabList>
                <Tab>5D</Tab>
                <Tab>1M</Tab>
                <Tab>6M</Tab>
                <Tab>1Y</Tab>
                <Tab>2Y</Tab>
            </TabList>
            <TabPanels>
                <TabPanel>
                <HistoryGraph/>
                </TabPanel>
                <TabPanel>
                <HistoryGraph/>
                </TabPanel>
                <TabPanel>
                <HistoryGraph/>
                </TabPanel>
                <TabPanel>
                <HistoryGraph/>
                </TabPanel>
                <TabPanel>
                <HistoryGraph/>
                </TabPanel>
            </TabPanels>
            </Tabs>
        )
    }

    const HistoryGraph=()=>{
        return (
            <div style={{marginLeft:'auto' , marginRight:'auto' , width:'90%' , height:'50%'}}>
            <LineGraph style={{marginLeft:'auto' , marginRight:'auto' , width:'60%' , height:'50%'}} labels= {[1,2,3,4,5,6]} data={[19,21,32,45,213,13]} />
            </div>
        )
    }
    return (
        <div style={{ margin: 10, padding: 20 }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '80%', backgroundColor: 'lightblue', color: 'white', fontWeight: 'bold', marginRight: 'auto', marginLeft: 'auto', padding: 10, borderRadius: 20 , marginBottom:20 }}>

                <h1 style={{ fontSize: '29', fontWeight: 'bolder' }}>Deepak Singh</h1>

                <div style={{ display: 'flex', flexDirection: 'row', height: '25%', width: '25%' }}>
                    <ChakraProvider>
                        <StatComponent />
                    </ChakraProvider>
                    
                </div>
            </div>
            <div style={{marginLeft:'auto' , marginRight:'auto'  ,maringTop:20, paddingLeft:10 , paddingRight:10}}>
            <ChakraProvider>
               
                    
                <TabView/>
                <div style={{width:'80%' , marginRight:'auto' , marginLeft:'auto'}}>
                <PieChart />
                </div>
            </ChakraProvider>
           
            </div>
        </div>
    )
}