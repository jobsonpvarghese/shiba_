import React from "react"
import { BrowserRouter as Router, Routes, Route } from "react-router-dom"

import Home from "../pages/Home"
const Routing = () => {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          {/* <Route path="/about" element={<AboutPage />} /> */}
        </Routes>
      </Router>
    </div>
  )
}

export default Routing
