import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
import LeaderBoard from "../pages/LeaderBoard"
import LoginPage from "../components/login/Login"
import Dashboard from "../components/dashboard/Dashboard"

const Routing = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/leaderboard" element={<LeaderBoard />} />
          <Route path="/admin" element={<LoginPage />} />
          <Route path="/dashboard" element={<Dashboard />} />
        </Routes>
      </Router>
    </div>
  )
}

export default Routing
