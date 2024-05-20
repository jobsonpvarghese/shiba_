import React from "react"
import Navbar from "../components/Navbar/Navbar"
import DataTable from "../components/Table/Table"
import Footer from "../components/footer/Footer"

const LeaderBoard = () => {
  return (
    <div>
      <Navbar />
      <div>
        <h1
          style={{
            textAlign: "center",
            fontSize: "50px",
            marginTop: "150px"
          }}
        >
          Leaderboard
        </h1>
      </div>
      <div
        style={{
          marginBottom: "100px"
        }}
      >
        <DataTable />
      </div>

      <Footer />
    </div>
  )
}

export default LeaderBoard
