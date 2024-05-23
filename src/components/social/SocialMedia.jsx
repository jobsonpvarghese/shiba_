import React from "react"
import { Grid, Box, Link } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTelegram, faTwitter, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons"
import "./Social.css"

const SocialMedia = () => {
  return (
    <div className="container">
      <div
        style={{
          width: "100%"
        }}
      >
        <Box display="flex" justifyContent="center" alignItems="center" sx={{ p: 4 }}>
          <Grid container spacing={5} justifyContent="center" alignItems="center">
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
    </div>
  )
}

export default SocialMedia
