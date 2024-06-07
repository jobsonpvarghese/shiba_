// src/components/CountdownTimer.js
import React, { useState, useEffect } from "react"
import { Box, Typography, Grid, Paper } from "@mui/material"

const CountdownTimer = ({ targetDate }) => {
  const [timeLeft, setTimeLeft] = useState({ days: 0, hours: 0, minutes: 0, seconds: 0 })

  useEffect(() => {
    const calculateTimeLeft = () => {
      const now = new Date().getTime()
      const distance = targetDate - now

      if (distance < 0) {
        clearInterval(timer)
        return { days: 0, hours: 0, minutes: 0, seconds: 0 }
      }

      return {
        days: Math.floor(distance / (1000 * 60 * 60 * 24)),
        hours: Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)),
        minutes: Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60)),
        seconds: Math.floor((distance % (1000 * 60)) / 1000)
      }
    }

    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft())
    }, 1000)

    return () => clearInterval(timer)
  }, [targetDate])

  return (
    <Box sx={{ pt: 4, pb: 4 }}>
      <Grid container spacing={2} justifyContent="center">
        {["days", "hours", "minutes", "seconds"].map(unit => (
          <Grid item key={unit}>
            <Paper elevation={3} style={{ padding: "10px", textAlign: "center" }}>
              <Typography
                variant="h4"
                sx={{
                  color: "#1877f2",
                  fontWeight: "bold"
                }}
              >
                {timeLeft[unit]}
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  color: "#b22234"
                }}
              >
                {unit}
              </Typography>
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Box>
  )
}

export default CountdownTimer
