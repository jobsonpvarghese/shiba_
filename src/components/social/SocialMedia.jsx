import React from "react"
import { Grid, Box, Link } from "@mui/material"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTelegram, faReddit, faMedium, faXTwitter, faInstagram, faTiktok } from "@fortawesome/free-brands-svg-icons"
import "./Social.css"

const SocialMedia = () => {
  return (
    <div className="container">
      <div style={{ width: "100%", overflowX: "auto", whiteSpace: "nowrap" }}>
        <Box display="flex" justifyContent="center" alignItems="center" sx={{ p: 4 }}>
          <Grid container spacing={3} justifyContent="center" alignItems="center" style={{ display: "inline-flex" }}>
            <Grid item>
              <Link href="https://t.me/vote4shiba" target="_blank" rel="noopener" aria-label="Telegram" style={{ color: "white" }}>
                <FontAwesomeIcon icon={faTelegram} size="2x" />
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://x.com/Vote4Shiba" target="_blank" rel="noopener" aria-label="Twitter" style={{ color: "white" }}>
                <FontAwesomeIcon icon={faXTwitter} size="2x" />
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="https://www.reddit.com/r/Vote4Shiba/?rdt=46456"
                target="_blank"
                rel="noopener"
                aria-label="Reddit"
                style={{ color: "white" }}
              >
                <FontAwesomeIcon icon={faReddit} size="2x" />
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://medium.com/@vote4shiba" target="_blank" rel="noopener" aria-label="Medium" style={{ color: "white" }}>
                <FontAwesomeIcon icon={faMedium} size="2x" />
              </Link>
            </Grid>
            <Grid item>
              <Link href="https://www.instagram.com/vote4shiba" target="_blank" rel="noopener" aria-label="Instagram" style={{ color: "white" }}>
                <FontAwesomeIcon icon={faInstagram} size="2x" />
              </Link>
            </Grid>
            <Grid item>
              <Link
                href="https://www.tiktok.com/@vote4shiba?_t=8mzCQ82zcFK&_r=1"
                target="_blank"
                rel="noopener"
                aria-label="TikTok"
                style={{ color: "white" }}
              >
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
