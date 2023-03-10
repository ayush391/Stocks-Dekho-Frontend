import axios from 'axios'
import React, { useEffect, useState } from 'react'

const BASE_URL = process.env.REACT_APP_BASE_URL + '/prices'


const useAllStocks = (endpoint = '', skip = 0, limit = 10) => {
    const [stocksData, setStocksData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    const [currentPage, setCurrentPage] = useState(0)

    useEffect(() => {
        (
            async () => {
                setLoading(true)
                try {
                    const url = BASE_URL + endpoint + '?skip=' + currentPage * limit
                    const result = await axios.get(url)
                    const data = await result?.data
                    console.log(url)
                    setStocksData(data.data)
                    setLoading(false)
                }
                catch (err) {
                    setError(err.message)
                    setLoading(false)
                }
            }
        )()
    }, [currentPage])
    return { stocksData, loading, error }
}

export default useAllStocks