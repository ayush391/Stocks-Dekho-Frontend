import { Line } from "react-chartjs-2"
import { CategoryScale, Chart, registerables } from 'chart.js'

export const PortfolioHistory = ()=>{
    Chart.register(CategoryScale, ...registerables)
    const data = {
        labels: [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20],
        datasets: [
            {
                label: 'Portfolio History',
                borderRadius: 30,
                data: [10,9,12,4,16,7,9,10,14,20,10,9,12,3,16,7,9,10,14,20],
                barThickness: 10,
                backgroundColor: "rgba(1,208,0,1)",
                // borderColor: 'rgb(0, 166, 0)',
                fill:true
            }
        ]
    }
    return (
        <div style={{margin:30}}>
             <h1>Portfolio History</h1>
        <div style={{ height:'25%' , width:'60%' , marginLeft:'auto' , marginRight:'auto'}}>
           
            <Line data={data} />
        </div>
        </div>
    )
}