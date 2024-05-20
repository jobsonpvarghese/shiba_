// src/components/WalletForm.js
import React, { useState } from "react"
import { TextField, Button, Container, Typography, Box } from "@mui/material"

const WalletForm = () => {
  const [walletAddress, setWalletAddress] = useState("")
  const [amount, setAmount] = useState("")

  const handleSubmit = e => {
    e.preventDefault()
    alert(`Wallet Address: ${walletAddress}\nAmount: ${amount}`)
    // You can add further handling logic here
  }

  return (
    <Container
      maxWidth="sm"
      sx={{
        mb: 2
      }}
    >
      <Box component="form" display="flex" flexDirection="column" onSubmit={handleSubmit} mt={4}>
        <Typography variant="h5" component="h2" gutterBottom>
          Add Leaderboard
        </Typography>
        <TextField
          label="Wallet Address"
          variant="outlined"
          margin="normal"
          fullWidth
          value={walletAddress}
          onChange={e => setWalletAddress(e.target.value)}
          required
        />
        <TextField
          label="Amount"
          type="number"
          variant="outlined"
          margin="normal"
          fullWidth
          value={amount}
          onChange={e => setAmount(e.target.value)}
          required
        />
        <Button type="submit" variant="contained" color="primary" fullWidth>
          Submit
        </Button>
      </Box>
    </Container>
  )
}

export default WalletForm
