import React, { useState } from "react"
import { motion } from "framer-motion"
import "./chart.css"
// Presale - 50%
// Liquidity - 25%
// Marketing/CEX - 15%
// AirDrop- 3%
// Community Engagement - 2%
// CSR - 5%

const data = [{ values: [50, 25, 15, 5, 3, 2], labels: ["Presale", "Liquidity", "Marketing/CEX", "Airdrop", "Community Engagement", "CSR"] }]

const colors = ["#b22234", "#FF6500", "#FF8A08", "#FFC470", "#FFBB70", "#F8D082"] // Define your colors

const HorizontalStackedBarChart = () => {
  const [hoveredIndex, setHoveredIndex] = useState(null)
  const [hoveredText, setHoveredText] = useState("Total Supply: 100000 Shiba")

  const handleMouseEnter = (e, value, index, per) => {
    setHoveredIndex(index)
    setHoveredText(`${value}: ${per}%`)
  }

  const handleMouseLeave = () => {
    setHoveredIndex(null)
    setHoveredText("Total Supply: 100000 Shiba")
  }

  return (
    <div className="chart-container">
      <h1 className="chart-title">Shibanomics</h1>
      {data.map((entry, barIndex) => (
        <div key={barIndex} className="bar-container">
          <div className="bar-label">{hoveredText}</div>
          <div className="bar">
            {entry.values.map((value, i) => (
              <motion.div
                key={i}
                className={`bar-segment ${hoveredIndex === i ? "hovered" : ""}`}
                initial={{ width: 0 }}
                animate={{ width: `${value}%` }}
                transition={{ duration: 0.5 }}
                style={{ backgroundColor: colors[i], opacity: hoveredIndex !== null && hoveredIndex !== i ? 0.5 : 1 }}
                onMouseEnter={e => handleMouseEnter(e, entry.labels[i], i, value)}
                onMouseLeave={handleMouseLeave}
              />
            ))}
          </div>
        </div>
      ))}
    </div>
  )
}

export default HorizontalStackedBarChart
