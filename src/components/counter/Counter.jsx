// src/App.js
import React from "react"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import CountdownTimer from "./CounterComponent.jsx"

const theme = createTheme()

const Counter = () => {
  const targetDate = new Date("June 30, 2024 00:09:00").getTime() // Ensure target date is in milliseconds

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CountdownTimer targetDate={targetDate} />
    </ThemeProvider>
  )
}

export default Counter
