import { Container } from '@mui/material'
import React from 'react'
import News from '../components/News'
import StockPanel from '../components/StockPanel'

const Home = () => {
    return (
        <Container maxWidth='md'>
            <StockPanel />
            {/* <News /> */}
        </Container>
    )
}

export default Home