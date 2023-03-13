import { ArcElement, Chart } from 'chart.js';
import { Doughnut } from 'react-chartjs-2';
export const PieChart = () => {
  Chart.register(ArcElement);
  const data = {
    labels: ['IT', 'Medico', 'EdTech'],
    datasets: [
      {
        label: 'Stock Investment',
        data: [300, 500, 200],
        backgroundColor: ['rgb(255, 99, 132)', 'rgb(54, 162, 235)', 'rgb(255, 205, 86)'],
        hoverOffset: 4
      }
    ]
  };

  const config = {
    type: 'doughnut',
    data: data
  };

  return (
    <div>
      <Doughnut data={data} style={{ height: '25%', width: '25%', marginLeft: 20 }} />
    </div>
  );
};
