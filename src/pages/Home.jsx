import React, { useState } from "react"
import Navbar from "../components/Navbar/Navbar"
import { Box, Container, Grid } from "@mui/material"
import shiba from "../images/sh.png"
import Intro from "../components/Intro/Intro"
import Footer from "../components/footer/Footer"
import SocialMedia from "../components/social/SocialMedia"
import TimelineWithFeature from "../components/timeline/TimelineWithFeature"
import Tokenomics from "../components/tokenomics/Tokenomics"
import Roadmap from "../components/Roadmap/Roadmap"
import Mc from "../components/mc/Mc"

function Home() {
  const [openModal, setOpenModal] = useState(false)

  return (
    <div>
      <div className="landing">
        <Navbar openModal={openModal} setOpenModal={setOpenModal} />
        <div
          style={{
            paddingTop: "50px"
          }}
        >
          <Container maxWidth="Md">
            <Box sx={{ width: "100%" }}>
              <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={12} sm={12} md={6}>
                  <img className="shiba_landing" src={shiba} alt="" />
                </Grid>
                <Grid item xs={12} sm={12} md={6}>
                  <h1 className="title">
                    Shiba <span>for</span>{" "}
                    <span
                      className="Pres"
                      style={{
                        backgroundColor: "#b22234"
                      }}
                    >
                      President
                    </span>
                  </h1>
                  <div className="btn-title">
                    <div className="buy" onClick={() => setOpenModal(true)}>
                      Buy Shiba
                    </div>
                    <a className="join_tg" href="#tokenomics">
                      Tokenomics
                    </a>
                  </div>
                </Grid>
              </Grid>
            </Box>
          </Container>
        </div>
      </div>
      <div>
        <SocialMedia />
      </div>
      <div>
        <Intro />
      </div>
      <div>
        <TimelineWithFeature />
      </div>
      <Tokenomics setOpenModal={setOpenModal} />
      <div>
        <Roadmap />
        <Mc />
        <Footer />
      </div>
    </div>
  )
}

export default Home
