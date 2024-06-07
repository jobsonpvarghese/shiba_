import { Box, Container, Grid } from "@mui/material"
import React from "react"
import shiba from "../../images/shiba.png"
import HorizontalStackedBarChart from "../chart/Chart"
import "./tokenomic.css"
import circle from "../../images/circle.png"

const Tokenomics = ({ setOpenModal, triggerConfetti }) => {
  return (
    <div className="tokenomics" id="tokenomics">
      <Container>
        <Box py={4}>
          <img className="circle" src={circle} alt="" />
          <Grid container spacing={2} alignItems="center" className="toke-container">
            <Grid item xs={12} md={8}>
              <Box>
                <HorizontalStackedBarChart />
              </Box>
            </Grid>
            <Grid item xs={12} md={4}>
              <img src={shiba} className="img-tok" alt="intro" />
              <div className="cont">
                <div
                  className="buy-tok"
                  onClick={() => {
                    triggerConfetti()
                    setOpenModal(true)
                  }}
                >
                  Buy Shiba
                </div>
              </div>
            </Grid>
          </Grid>
        </Box>
        <img className="circle2" src={circle} alt="" />
      </Container>
    </div>
  )
}

export default Tokenomics
