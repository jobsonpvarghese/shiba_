import React from "react"
import { Grid, Typography, Link, Box } from "@mui/material"

const Footer = () => {
  return (
    <Box component="footer" sx={{ p: 3, backgroundColor: "#0e46a3", color: "white" }}>
      <Grid container spacing={2}>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6">About Us</Typography>
          <Typography variant="body2">
            Vote4Shiba is not your ordinary memecoin. It combines the whimsical charm and viral potential of a memecoin with groundbreaking features
            that foster community engagement and governance. At the heart of Vote4Shiba lies a strong sense of community attachment and a commitment
            to advocating for free speech.
          </Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6">Contact</Typography>
          <Typography variant="body2">
            Email:{" "}
            <Link sx={{ color: "white" }} href="mailto:contact@company.com">
              contact@company.com
            </Link>
          </Typography>
          <Typography variant="body2">Phone: (123) 456-7890</Typography>
        </Grid>
        <Grid item xs={12} sm={6} md={4}>
          <Typography variant="h6">Follow Us</Typography>
          <Link sx={{ color: "white" }} href="https://facebook.com" target="_blank" rel="noopener" variant="body2" display="block">
            Facebook
          </Link>
          <Link sx={{ color: "white" }} href="https://twitter.com" target="_blank" rel="noopener" variant="body2" display="block">
            Twitter
          </Link>
          <Link sx={{ color: "white" }} href="https://instagram.com" target="_blank" rel="noopener" variant="body2" display="block">
            Instagram
          </Link>
          <Link sx={{ color: "white" }} href="https://linkedin.com" target="_blank" rel="noopener" variant="body2" display="block">
            LinkedIn
          </Link>
        </Grid>
      </Grid>
    </Box>
  )
}

export default Footer
