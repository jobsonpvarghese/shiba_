// src/App.js
import React from "react"
import { ThemeProvider, createTheme } from "@mui/material/styles"
import CssBaseline from "@mui/material/CssBaseline"
import CountdownTimer from "./CounterComponent.jsx"

const theme = createTheme()

const Counter = () => {
  const targetDate = "2024-06-31T00:00:00"

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <CountdownTimer targetDate={targetDate} />
    </ThemeProvider>
  )
}

export default Counter
