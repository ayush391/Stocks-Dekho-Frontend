import axios from 'axios'
import React, { useEffect, useState } from 'react'

const BASE_URL = process.env.REACT_APP_BASE_URL + '/prices'


const useStockData = (symbol) => {
    const [stockData, setStocksData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)


    useEffect(() => {
        (
            async () => {
                setLoading(true)
                try {
                    const url = process.env.REACT_APP_BASE_URL + '/prices/' + symbol?.toString()
                    const result = await axios.get(url)
                    const data = await result.data
                    // console.log(data)
                    setStocksData(data.data)
                    setLoading(false)
                }
                catch (err) {
                    setError(err.message)
                    setLoading(false)
                }
            }
        )()
    }, [])
    return { stockData, loading, error }
}

export default useStockData