import {useParams} from 'react-router-dom'
export default function SellPage(){
    const param = useParams()
    console.log(param)
    return (
        <div>
            <h1>Stock Selling Page : {param.symbol || "stock"}</h1>
        </div>
    )
}