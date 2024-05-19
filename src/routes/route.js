import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import LeaderBoard from "../pages/LeaderBoard"
const Routing = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
        </Routes>
      </Router>
    </div>
  )
}

export default Routing
