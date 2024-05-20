// src/components/Dashboard.js
import React from "react"
import { Container, Typography, Box, Button } from "@mui/material"
import { useNavigate } from "react-router-dom"
import WalletForm from "../WalletForm/WalletForm.jsx"
import DataTable from "../Table/Table.jsx"

const Dashboard = () => {
  const navigate = useNavigate()

  const handleLogout = () => {
    navigate("/")
  }

  return (
    <Container>
      <Button variant="contained" color="secondary" onClick={handleLogout} style={{ marginTop: "20px" }}>
        Logout
      </Button>
      <Box display="flex" flexDirection="column" justifyContent="center" alignItems="center" height="100vh">
        <Typography variant="h4" component="h1">
          Dashboard
        </Typography>
        <WalletForm />
        <DataTable />
      </Box>
    </Container>
  )
}

export default Dashboard
