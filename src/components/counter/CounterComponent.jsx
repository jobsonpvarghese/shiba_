// src/components/CountdownTimer.js
import React, { useState, useEffect } from "react"
import { Box, Typography, Grid, Paper } from "@mui/material"

const CountdownTimer = ({ targetDate }) => {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date()
    let timeLeft = {}

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60)
      }
    }

    console.log(`Time left: ${JSON.stringify(timeLeft)}`)
    return timeLeft
  }

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft())

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearTimeout(timer)
  })

  const timerComponents = []

  Object.keys(timeLeft).forEach(interval => {
    if (!timeLeft[interval]) {
      return
    }

    timerComponents.push(
      <Grid item key={interval}>
        <Paper elevation={3} style={{ padding: "10px", textAlign: "center", minWidth: "60px" }}>
          <Typography variant="h4">{timeLeft[interval]}</Typography>
          <Typography variant="subtitle1">{interval}</Typography>
        </Paper>
      </Grid>
    )
  })

  return (
    <Box sx={{ p: 4 }}>
      <Grid container spacing={2} justifyContent="center">
        {timerComponents.length ? timerComponents : <Typography variant="h4">Time's up!</Typography>}
      </Grid>
    </Box>
  )
}

export default CountdownTimer
