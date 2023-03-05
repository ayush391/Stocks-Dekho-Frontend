import React, { useEffect, useState } from 'react'

import axios from 'axios'
import StockTable from '../Table/StockTable';

const BASE_URL = process.env.REACT_APP_BASE_URL + '/prices/most-active'
const LIMIT = 10




const MostActive = () => {
    const [stocksData, setStocksData] = useState([])

    const [currentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        (
            async () => {
                const url = BASE_URL + '?skip=' + currentPage * LIMIT
                const result = await axios.get(url)
                console.log(result)
                setStocksData(result.data.data)
            }
        )()
    }, [currentPage])


    const handlePrev = () => {
        if (currentPage > 0) {
            setCurrentPage(currentPage - 1)
        }
    }

    const handleNext = () => {
        setCurrentPage(currentPage + 1)
    }



    return (
        <>
            <StockTable stocksData={stocksData} />
        </>
    )
}

export default MostActive