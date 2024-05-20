// src/components/LoginPage.js
import React, { useState } from "react"
import { useNavigate } from "react-router-dom"
import { TextField, Button, Container, Typography, Box } from "@mui/material"

const LoginPage = () => {
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")
  const navigate = useNavigate()

  const handleLogin = () => {
    if (username === "admin" && password === "admin") {
      navigate("/dashboard")
    } else {
      alert("Invalid credentials")
    }
  }

  return (
    <Container maxWidth="xs">
      <Box display="flex" flexDirection="column" justifyContent="center" height="100vh">
        <Typography variant="h4" component="h1" gutterBottom>
          Login
        </Typography>
        <TextField label="Username" variant="outlined" margin="normal" fullWidth value={username} onChange={e => setUsername(e.target.value)} />
        <TextField
          label="Password"
          type="password"
          variant="outlined"
          margin="normal"
          fullWidth
          value={password}
          onChange={e => setPassword(e.target.value)}
        />
        <Button variant="contained" color="primary" onClick={handleLogin} fullWidth>
          Login
        </Button>
      </Box>
    </Container>
  )
}

export default LoginPage
