import { Box, Typography } from '@mui/material'
import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { NewsCard } from './News/NewsCard'

const BASE_URL = process.env.REACT_APP_BASE_URL + '/news' + '/PAYTM'

const News = () => {
    const [news, setNews] = useState([])

    useEffect(() => {
        (async () => {
            const result = await axios.get(BASE_URL)
            setNews(result.data.data.articles)
        })()
    }, [])

    return (
        <>
            <Typography variant='h5' fontWeight='bold' gutterBottom
                sx={{ marginTop: '5rem' }}
            >
                Latest News
            </Typography>
            <Box
                sx={{
                    display: 'grid',
                    grid: 'auto /auto auto auto',
                    // flexDirection: 'column',
                    gap: 2,
                    rowGap: 5,
                    mx: 'auto'
                }}
            >
                {
                    news.map((article, idx) => {
                        return (
                            <NewsCard key={idx} {...article} />
                        )
                    })
                }
            </Box >
        </>
    )
}

export default News