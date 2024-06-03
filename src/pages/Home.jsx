import React from "react"
import Navbar from "../components/Navbar/Navbar"
import { Box, Container, Grid } from "@mui/material"
import shiba from "../images/sh.png"
import Roadmap from "../components/Roadmap/Roadmap"
import Footer from "../components/footer/Footer"
import SocialMedia from "../components/social/SocialMedia"
import TimelineWithFeature from "../components/timeline/TimelineWithFeature"
import Tokenomics from "../components/tokenomics/Tokenomics"

function Home() {
  return (
    <div>
      <div className="landing">
        <Navbar />
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
                  {/* <div className="btn-title">
                    <div className="buy">About Us</div>
                    <div className="join_tg">Join Telegram</div>
                  </div> */}
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
        <Roadmap />
      </div>
      <div>
        <TimelineWithFeature />
      </div>
      <Tokenomics />
      <div>
        <Footer />
      </div>
    </div>
  )
}

export default Home
