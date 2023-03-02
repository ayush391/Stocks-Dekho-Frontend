import { Box, Container } from '@mui/material'
import React from 'react'
import News from '../components/News'
import StockPanel from '../components/StockPanel'
import bgPatternPanel from '../assets/panelBg.jpg'

const Home = () => {
    return (
        <>
            <Box
                sx={{
                    // backgroundImage: `linear-gradient(0deg,#ffffff 0 2%, #ffffff05 3% 90%, #ffffff 96% 100%), url(${bgPatternPanel})`,
                    // backgroundImage: `url(${bgPatternPanel})`,
                    // backgroundSize: '40%',
                    // backdropFilter: 'blur(20px)',
                    paddingBottom: '2rem',
                    // backgroundRepeat: 'repeat',
                    marginTop: '0'
                }}
            >
                <Container maxWidth='md' sx={{ my: 3 }}>
                    <StockPanel />
                </Container >
            </Box>

            <Box
                sx={{
                    backgroundImage: `url(${bgPatternPanel})`,
                    backgroundSize: '40%',

                }}
            >

                <Container maxWidth='md'
                    sx={{
                        backgroundImage: 'linear-gradient(180deg, #7abbfc80,#7abbfc00 400px)',
                        borderRadius: '20px',
                        py: 2,
                        backdropFilter: 'blur(2px)'
                    }}
                >
                    <News />
                </Container >
            </Box>
        </>
    )
}

export default Home