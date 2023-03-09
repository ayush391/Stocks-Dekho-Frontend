import { Box, Container } from '@mui/material'
import React from 'react'
import News from '../components/News'
import StockPanel from '../components/StockPanel'
import bgPatternPanel from '../assets/panelBg.jpg'
import Navbar from '../components/Navbar/Navbar'
const Home = () => {
    return (
        <>
            <Navbar />

            <Container maxWidth='sm' >
                <StockPanel />
            </Container >

            {/* <Box
                sx={{
                    backgroundImage: `url(${bgPatternPanel})`,
                    backgroundSize: '40%',

                }}
            > */}

            <Container maxWidth='sm'
                sx={{
                    my: 2,
                    py: 2,
                    // backdropFilter: 'blur(2px)'
                }}
            >
                <News />
            </Container >
            {/* </Box> */}
        </>
    )
}

export default Home