import {
  ChakraProvider,
  Stat,
  StatArrow,
  StatGroup,
  StatHelpText,
  StatLabel,
  StatNumber,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs
} from '@chakra-ui/react';
import axios from 'axios';
import { Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import LineGraph from '../components/Portfolio/LineGraph';
import { PieChart } from '../components/Portfolio/pie';
import { Holdings , StockCard } from './Holdings';
import { useAuthState } from 'react-firebase-hooks/auth';
import { getAuth } from 'firebase/auth';
import {app} from '../components/Firebase'
import { useEffect , useState } from 'react';
const StatComponent = ({portfolio_value}) => {

 
  return (
    <div style={{ marginLeft: 10 }}>
      <StatGroup>
        <Stat>
          <StatLabel>Portfolio</StatLabel>
          <StatNumber>{portfolio_value.toFixed(2)}</StatNumber>
          <StatHelpText>
            <StatArrow type="increase" />
            23.36%
          </StatHelpText>
        </Stat>
      </StatGroup>
    </div>
  );
};
const TabView = () => {
  return (
    <Tabs isFitted variant="enclosed" colorScheme="green">
      <TabList>
        <Tab>5D</Tab>
        <Tab>1M</Tab>
        <Tab>6M</Tab>
        <Tab>1Y</Tab>
        <Tab>2Y</Tab>
      </TabList>
      <TabPanels>
        <TabPanel>
          <HistoryGraph timeFrame={5} />
        </TabPanel>
        <TabPanel>
          <HistoryGraph timeFrame={30} />
        </TabPanel>
        <TabPanel>
          <HistoryGraph timeFrame={180} />
        </TabPanel>
        <TabPanel>
          <HistoryGraph timeFrame={365} />
        </TabPanel>
        <TabPanel>
          <HistoryGraph timeFrame={730} />
        </TabPanel>
      </TabPanels>
    </Tabs>
  );
};

  const HistoryGraph = ({ timeFrame }) => {
    return (
      <div style={{ marginLeft: 'auto', marginRight: 'auto', width: '90%', height: '50%' }}>
        <LineGraph symbol={'INFY'} timeFrame={timeFrame} />
      </div>
    );
  };

export const Portfolio = () => {
  const auth = getAuth(app)

  const [user , loading , error] = useAuthState(auth)
  const [name , setName] = useState("")
  const baseUrl = import.meta.env.VITE_BASE_URL + '/portfolio/';
  const [HoldingsList, setHoldingsList] = useState([]);
  const [portfolioValue , setPortfolioValue] = useState(0)

  useEffect(()=>{
    async function getHoldings() {
      const response = await axios.get(baseUrl + user.uid);
      console.log(response.data);
      setHoldingsList(response.data.holdings);
      setPortfolioValue(Number(response.data.portfolio_value))
    }
    if (loading){

    }else{
      if(user){
        setName(user.displayName.toString())
        getHoldings()
      }
    }
  },[loading , user , error])
  

  const navigate = useNavigate();
  const backBtn = () => {
    navigate(-1);
  };
  return (
    <div style={{ margin: 10, padding: 20  ,}}>
     

        <h1 style={{textAlign:'center' , fontSize:22 , padding:3 , color:'gray' , fontWeight:'bolder' , fontFamily:'fantasy'}}>Portfolio</h1>
     
      <div
        style={{
          display: 'flex',
          flexDirection: 'column',
          width: '80%',
          backgroundColor: 'lightgreen',
          color: 'white',
          fontWeight: 'bold',
          marginRight: 'auto',
          marginLeft: 'auto',
          padding: 10,
          borderRadius: 20,
          marginBottom: 20
        }}>
        <h1 style={{ fontSize: '29', fontWeight: 'bolder' }}>{name}</h1>

        <div style={{ display: 'flex', flexDirection: 'row', height: '25%', width: '25%' }}>
          <ChakraProvider>
            <StatComponent portfolio_value={portfolioValue} />
          </ChakraProvider>
        </div>
      </div>
      <div
        style={{
          marginLeft: 'auto',
          marginRight: 'auto',
          maringTop: 20,
          paddingLeft: 10,
          paddingRight: 10
        }}>
        <ChakraProvider>
          {/* <TabView /> */}
          <div style={{ width: '80%', marginRight: 'auto', marginLeft: 'auto', marginBottom: 2 }}>
            {/* <PieChart /> */}
          </div>
        </ChakraProvider>
        <Typography
          textAlign={'intial'}
          sx={{ margin: 1, fontFamily: 'Raleway, Arial' }}
          variant="h5">
          Holdings
        </Typography>
        <div>
        {HoldingsList.map((holdings, idx) => (
          <StockCard key={idx} holdings={holdings} />
        ))}
    </div>
      </div>
    </div>
  );
};
