import React from "react"
import { Grid, Typography, Box } from "@mui/material"
import "./footer.css"
import logo from "../../images/logofooterdark.png"
import logofooter from "../../images/footer-logo.png"
import tg from "../../images/icons/telegram.png"

const Footer = () => {
  return (
    <div className="footer-container">
      <div class="image-container">
        <img src={logofooter} alt="logofooter" className="logofooter" />
      </div>
      <Box component="footer">
        <Grid container spacing={10}>
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
            <Typography variant="h6" sx={{ pb: 2 }}>
              Follow Us
            </Typography>
            <div className="icon-item">
              <img src={tg} alt="tg" className="icon" />
              <a href="https://facebook.com">Telegram</a>
            </div>
            <div className="icon-item">
              <img src={tg} alt="tg" className="icon" />
              <a href="https://facebook.com">Telegram</a>
            </div>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default Footer
