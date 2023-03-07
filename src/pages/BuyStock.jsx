import {useParams} from 'react-router-dom'

export default function BuyPage(){
    const param = useParams()
    console.log(param)
    return (
        <div>
            <h1>Buy Page for : {param.symbol || "Stock"}</h1>
        </div>
    )
}