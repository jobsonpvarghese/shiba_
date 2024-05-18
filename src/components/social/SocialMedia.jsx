import React from "react"
import { Grid, Box, Link } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTelegram, faTwitter, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons"
import "./Social.css"

const SocialMedia = () => {
  return (
    <div className="container">
      <Box sx={{ p: 4 }}>
        <Grid container spacing={2} justifyContent="center">
          <Grid item>
            <Link href="https://telegram.org" target="_blank" rel="noopener" aria-label="Telegram">
              <FontAwesomeIcon icon={faTelegram} size="2x" />
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://twitter.com" target="_blank" rel="noopener" aria-label="Twitter">
              <FontAwesomeIcon icon={faTwitter} size="2x" />
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://instagram.com" target="_blank" rel="noopener" aria-label="Instagram">
              <FontAwesomeIcon icon={faInstagram} size="2x" />
            </Link>
          </Grid>
          <Grid item>
            <Link href="https://tiktok.com" target="_blank" rel="noopener" aria-label="TikTok">
              <FontAwesomeIcon icon={faTiktok} size="2x" />
            </Link>
          </Grid>
        </Grid>
      </Box>
    </div>
  )
}

export default SocialMedia
