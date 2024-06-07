import React from "react"
import { Grid, Typography, Box } from "@mui/material"
import "./footer.css"
import logo from "../../images/logofooterdark.png"
import logofooter from "../../images/footer-logo.png"
import tg from "../../images/icons/telegram.png"
import reddit from "../../images/icons/redit.png"
import X from "../../images/icons/x.png"
import medium from "../../images/icons/medium.png"
import Disclaimer from "./Disclaimer"

const Footer = () => {
  return (
    <div className="footer-container">
      <div class="image-container">
        <img src={logofooter} alt="logofooter" className="logofooter" />
      </div>
      <Box component="footer" className="footer">
        <Grid container spacing={2}>
          <Grid item xs={12} md={6}>
            <Typography variant="h6">About Us</Typography>
            <img src={logo} alt="logo" className="logo-foot" />
            <p>
              Vote4Shiba is not your ordinary memecoin. It combines the whimsical charm and viral potential of a memecoin with groundbreaking features
              that foster community engagement and governance. At the heart of Vote4Shiba lies a strong sense of community attachment and a commitment
              to advocating for free speech.
            </p>
          </Grid>
          <Grid item xs={12} md={6}>
            <div className="right-grid">
              <Typography variant="h6">Follow Us</Typography>
              <div className="icon-item">
                <img src={tg} alt="tg" className="icon" />
                <a href="https://t.me/vote4shiba">Telegram</a>
              </div>
              <div className="icon-item">
                <img src={reddit} alt="Reddit" className="icon" />
                <a href="https://www.reddit.com/r/Vote4Shiba/?rdt=46456">Reddit</a>
              </div>
              <div className="icon-item">
                <img src={X} alt="X" className="icon" />
                <a href="https://x.com/Vote4Shiba">X</a>
              </div>
              <div className="icon-item">
                <img src={medium} alt="Medium" className="icon" />
                <a href="https://medium.com/@vote4shiba">Medium</a>
              </div>
            </div>
          </Grid>
        </Grid>
      </Box>
      <Disclaimer />
    </div>
  )
}

export default Footer
