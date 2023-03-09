import { Line } from "react-chartjs-2"
import { CategoryScale, Chart, registerables } from 'chart.js'
import { Divider } from "@mui/material"

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
                borderColor: 'lightgreen',
                pointRadius:0
                
            }
        ],
       
    }
    
    var  options={
        scales: {
            x: {
              grid: {
                display: false
              },
              display:false
            },
            y: {
              grid: {
                display: false
              },
              display:false
            }
          },
          plugins: { legend: { display: false, },
          
          
        } 
    }


    return (
        <div style={{margin:30}}>
             
        <div style={{ height:'25%' , width:'50%' , marginLeft:'auto' , marginRight:'auto' , border:'1px solid' , borderRadius:10 , padding:20}}>
        <h1>Portfolio History</h1>
        <Divider/>
            <Line data={data} options={options} />
        </div>
        </div>
    )
}