import {
    Stat,
    StatLabel,
    StatNumber,
    StatHelpText,
    StatArrow,
    StatGroup,
    ChakraProvider,
} from '@chakra-ui/react'
import { PieChart } from '../components/Portfolio/pie'
import { LineGraph } from '../components/Portfolio/LineGraph'
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
    return (
        <div style={{ margin: 10, padding: 20 }}>
            <div style={{ display: 'flex', flexDirection: 'column', width: '80%', backgroundColor: 'lightblue', color: 'white', fontWeight: 'bold', marginRight: 'auto', marginLeft: 'auto', padding: 10, borderRadius: 20 }}>

                <h1 style={{ fontSize: '29', fontWeight: 'bolder' }}>Deepak Singh</h1>

                <div style={{ display: 'flex', flexDirection: 'row', height: '25%', width: '25%' }}>
                    <ChakraProvider>
                        <StatComponent />
                    </ChakraProvider>
                    <PieChart />
                </div>
            </div>

            {/* <PortfolioHistory /> */}

        </div>
    )
}