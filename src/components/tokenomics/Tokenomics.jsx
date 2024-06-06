import { Box, Container, Grid } from "@mui/material"
import React from "react"
import shiba from "../../images/shiba.png"
import HorizontalStackedBarChart from "../chart/Chart"
import "./tokenomic.css"
import circle from "../../images/circle.png"

const Tokenomics = () => {
  return (
    <div className="tokenomics" id="tokenomics">
      <Container>
        <Box py={4}>
          <Grid container spacing={5} alignItems="center">
            <Grid item xs={12} md={8}>
              <img className="circle" src={circle} alt="" />
              <Box>
                <HorizontalStackedBarChart />
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <img src={shiba} className="img-tok" alt="intro" />
            </Grid>
            <img className="circle2" src={circle} alt="" />
          </Grid>
        </Box>
      </Container>
    </div>
  )
}

export default Tokenomics
