import React, { useRef, useEffect, useState } from "react"
import Highcharts from "highcharts"
import HighchartsReact from "highcharts-react-official"
import Highcharts3D from "highcharts/highcharts-3d"
import "./chart.css"
// Initialize the 3D module
Highcharts3D(Highcharts)

const data = [{ values: [50, 25, 15, 5, 3, 2], labels: ["Presale", "Liquidity", "Marketing/CEX", "Airdrop", "Community Engagement", "CSR"] }]

const colors = ["#b22234", "#FF6500", "#FF8A08", "#FFC470", "#FFBB70", "#F8D082"]

const seriesData = data[0].values.map((value, index) => ({
  name: data[0].labels[index],
  y: value,
  color: colors[index]
}))

const getOptions = isMobile => ({
  chart: {
    type: "pie",
    options3d: {
      enabled: true,
      alpha: 45,
      beta: 0
    },
    backgroundColor: "transparent",
    marginTop: 0,
    marginBottom: 0,
    height: isMobile ? "100%" : "400px" // Adjust height for mobile devices
  },
  title: {
    text: "",
    margin: 0
  },
  plotOptions: {
    pie: {
      innerSize: 100,
      depth: 45,
      dataLabels: {
        enabled: !isMobile, // Hide data labels on mobile devices
        format: "{point.name}: {point.y}%"
      }
    }
  },
  series: [
    {
      name: "Distribution",
      data: seriesData
    }
  ],
  credits: {
    enabled: false // This line removes the Highcharts credits
  }
})

const DonutChart = () => {
  const chartRef = useRef(null)
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768)

  const handleResize = () => {
    setIsMobile(window.innerWidth <= 768)
  }

  useEffect(() => {
    window.addEventListener("resize", handleResize)
    return () => window.removeEventListener("resize", handleResize)
  }, [])

  return (
    <div style={{ textAlign: "center", width: isMobile ? "100%" : "90%" }} className="chart-container">
      <h1 className="chart-title">Shibanomics</h1>
      <div className="details">
        {seriesData.map((dataPoint, index) => (
          <div key={index} className="legend-item">
            <span style={{ display: "inline-block", width: "20px", height: "20px", backgroundColor: colors[index], marginRight: "5px" }}></span>
            <span>
              {dataPoint.name} &nbsp;{" "}
              <span
                style={{
                  fontWeight: "bold"
                }}
              >
                {dataPoint.y}%
              </span>
            </span>
          </div>
        ))}
      </div>
      <div style={{ height: isMobile ? "400px" : "400px", padding: 0 }}>
        <HighchartsReact highcharts={Highcharts} options={getOptions(isMobile)} ref={chartRef} />
      </div>
    </div>
  )
}

export default DonutChart
