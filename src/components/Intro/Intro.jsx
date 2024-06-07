import React from "react"
import { Container, Typography, Box, Grid } from "@mui/material"
import "./intro.css"

import intro from "../../images/intro.png"
import introflag from "../../images/intro flag vnyl.png"
import house from "../../images/housevnyl.png"

const Roadmap = () => {
  return (
    <div style={{}} className="roadmap">
      <img src={introflag} className="introflag" alt="introflag" />
      <Container>
        <Box py={4}>
          <Grid container spacing={2} alignItems="center">
            <Grid item xs={12} md={6}>
              <div className="intro-text">
                <h1>Introduction to Vote4Shiba</h1>
                <Typography variant="body1" paragraph color="grey">
                  Welcome to the world of Vote4Shiba, an innovative memecoin that transcends the typical boundaries of cryptocurrency. Built on the
                  robust Solana blockchain, Vote4Shiba is more than just a memecoin—it's a pioneering force in digital governance, community
                  empowerment, and charitable endeavors.
                </Typography>
                <Typography variant="body1" paragraph color="grey">
                  Vote4Shiba is not your ordinary memecoin. It combines the whimsical charm and viral potential of a memecoin with groundbreaking
                  features that foster community engagement and governance. At the heart of Vote4Shiba lies a strong sense of community attachment and
                  a commitment to advocating for free speech.
                </Typography>
              </div>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <img
                  src={intro}
                  style={{
                    width: "100%",
                    height: "100%",
                    zIndex: 99
                  }}
                  alt="intro"
                />
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
      <img src={house} className="house" alt="whitehouse" />
    </div>
  )
}

export default Roadmap
