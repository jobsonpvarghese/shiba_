import React from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import Highcharts3D from "highcharts/highcharts-3d"
import "./chart.css"
// Presale - 50%
// Liquidity - 25%
// Marketing/CEX - 15%
// AirDrop- 3%
// Community Engagement - 2%
// CSR - 5%

Highcharts3D(Highcharts)

const data = [{ values: [50, 25, 15, 5, 3, 2], labels: ["Presale", "Liquidity", "Marketing/CEX", "Airdrop", "Community Engagement", "CSR"] }]

const colors = ["#b22234", "#FF6500", "#FF8A08", "#FFC470", "#FFBB70", "#F8D082"]

const seriesData = data[0].values.map((value, index) => ({
  name: data[0].labels[index],
  y: value,
  color: colors[index]
}))

const options = {
  chart: {
    type: "pie",
    options3d: {
      enabled: true,
      alpha: 45,
      beta: 0
    },
    backgroundColor: "transparent"
  },
  title: {
    text: ""
  },
  plotOptions: {
    pie: {
      innerSize: 100,
      depth: 45,
      dataLabels: {
        enabled: true,
        format: "{point.name}: {point.y}"
      }
    }
  },
  series: [
    {
      name: "Activities",
      data: seriesData
    }
  ],
  credits: {
    enabled: false // This line removes the Highcharts credits
  }
}

const DonutChart = () => (
  <div className="chart-container">
    <h1 className="chart-title">Shibanomics</h1>
    <HighchartsReact highcharts={Highcharts} options={options} />
  </div>
)

export default DonutChart
