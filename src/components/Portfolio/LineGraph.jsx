import { Line } from "react-chartjs-2"
import { CategoryScale, Chart, registerables } from 'chart.js'
import { Box, Divider } from "@mui/material"
import React from "react"

function LineGraph({ labels, data }) {
  Chart.register(CategoryScale, ...registerables)
  const graph = {
    labels: labels,
    datasets: [
      {
        label: 'Price',
        data: data,
        borderColor: '#34a853',
        pointRadius: 0,
        fill: {
          target: 'origin',
          above: ({ chart: { ctx, chartArea } }) => {
            const bg = ctx.createLinearGradient(chartArea.width / 2, chartArea.top, chartArea.width / 2, chartArea.bottom)
            bg.addColorStop(0, '#90ee9080')
            bg.addColorStop(0.9, '#90ee9000')
            return bg;
          },
        }
      }
    ],

  }

  let options = {
    responsive: true,
    maintainAspectRatio: true,

    interaction: {
      mode: 'index',
      axis: 'x',
      intersect: false
    },

    scales: {
      x: {
        display: true,
        grid: {
          display: false
        },
        ticks: {
          display: false
        }
      },
      y: {
        display: true,
        grid: {
          display: true
        },
        ticks: {
          // beginAtZero: true,
          backdropPadding: {
            x: 10,
            y: 4
          }
        }
      },

    },

    elements: {
      point: {
        radius: 5,
        backgroundColor: 'green',
        hoverRadius: 7
      }
    },
    plugins: {
      corsair: {
        dash: [3, 3],
        color: 'grey',
        width: 3
      },
      legend: {
        display: false
      },
      tooltip: {
        intersect: false,
        mode: 'nearest',
        caretPadding: 15,
        displayColors: false,
        backgroundColor: ({ chart: { ctx, chartArea } }) => {
          const bg = ctx.createLinearGradient(chartArea.width / 2, chartArea.top, chartArea.width / 2, chartArea.bottom)
          bg.addColorStop(0, '#1565c050')
          bg.addColorStop(0.5, '#1565c099')
          bg.addColorStop(1, '#1565c050')
          return bg;
        },
        callbacks: {
          label: function (ctx) {
            return ('INR ₹' + ctx.parsed.y);
          }
        }
      },
    }

  };

  const plugins = [{
    id: 'corsair',
    afterInit: (chart) => {
      chart.corsair = {
        x: 0,
        y: 0
      }
    },
    afterEvent: (chart, evt) => {
      const {
        chartArea: {
          top,
          bottom,
          left,
          right
        }
      } = chart;
      const {
        event: {
          x,
          y
        }
      } = evt;
      if (x < left || x > right || y < top || y > bottom) {
        chart.corsair = {
          x,
          y,
          draw: false
        }
        chart.draw();
        return;
      }

      chart.corsair = {
        x,
        y,
        draw: true
      }

      chart.draw();
    },
    afterDatasetsDraw: (chart, _, opts) => {
      const {
        ctx,
        chartArea: {
          top,
          bottom,
          left,
          right
        }
      } = chart;
      const {
        x,
        y,
        draw
      } = chart.corsair;

      if (!draw) {
        return;
      }

      ctx.lineWidth = opts.width || 0;
      ctx.setLineDash(opts.dash || []);
      ctx.strokeStyle = opts.color || 'black'

      let dataY = chart.tooltip.caretY
      let dataX = chart.tooltip.caretX

      ctx.save();
      ctx.beginPath();
      ctx.moveTo(dataX, dataY);
      ctx.lineTo(dataX, bottom);
      ctx.stroke();
      ctx.restore();
    }
  }]

  return (
    <Box >
      <Line data={graph} options={options} plugins={plugins} />
    </Box>
  )
}

export default React.memo(LineGraph)