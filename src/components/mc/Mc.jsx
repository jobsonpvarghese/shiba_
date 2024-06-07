import React from "react"
import "./mc.css"
import star from "../../images/icons/star.png"
import mcgaol from "../../images/mcgoal.png"
import { Container, Grid, Box, Typography } from "@mui/material"
import dundas from "../../images/dundas.jpeg"
import canada from "../../images/canada.png"
import uk from "../../images/london.jpeg"
import london from "../../images/united-kingdom.png"
import dubai from "../../images/dbx.jpeg"
import dxb from "../../images/dubai.png"
import usa from "../../images/united-states-of-america.png"
import nyc from "../../images/nyc.jpeg"

const Mc = () => {
  return (
    <div>
      <div className="mc_banner">
        <img src={star} alt="star" className="star" />
        <img src={mcgaol} alt="mc" className="mc_title" />
        <img src={star} alt="star" className="star" />
      </div>
      <div className="mc_section">
        <div className="mc_box">
          <Container>
            <Grid container spacing={0} alignItems="center" sx={{ p: 2 }}>
              <Grid item>
                <Box width={150} height={150} display="flex" justifyContent="center" alignItems="center" overflow="hidden">
                  <img src={dundas} alt="Description" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Box>
              </Grid>
              <Grid item xs>
                <Box p={2}>
                  <Typography variant="h6" className="box_title">
                    $10M Market Cap
                  </Typography>
                  <Typography variant="body1">Younge - Dundas Square </Typography>
                  <div className="box-loc">
                    <img src={canada} alt="canada" />
                    <p>Canada</p>
                  </div>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </div>
        <div className="mc_box">
          <Container>
            <Grid container spacing={0} alignItems="center" sx={{ p: 2 }}>
              <Grid item>
                <Box width={150} height={150} display="flex" justifyContent="center" alignItems="center" overflow="hidden">
                  <img src={uk} alt="Description" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Box>
              </Grid>
              <Grid item xs>
                <Box p={2}>
                  <Typography variant="h6" className="box_title">
                    $20M Market Cap
                  </Typography>
                  <Typography variant="body1">Piccadilly Circus</Typography>
                  <div className="box-loc">
                    <img src={london} alt="canada" />
                    <p>London</p>
                  </div>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </div>
        <div className="mc_box">
          <Container>
            <Grid container spacing={0} alignItems="center" sx={{ p: 2 }}>
              <Grid item>
                <Box width={150} height={150} display="flex" justifyContent="center" alignItems="center" overflow="hidden">
                  <img src={dubai} alt="Description" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                </Box>
              </Grid>
              <Grid item xs>
                <Box p={2}>
                  <Typography variant="h6" className="box_title">
                    $50M Market Cap
                  </Typography>
                  <Typography variant="body1">Burj khalifa</Typography>
                  <div className="box-loc">
                    <img src={dxb} alt="canada" />
                    <p>Dubai</p>
                  </div>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </div>
        <div className="mc_box">
          <Container>
            <Grid container spacing={0} alignItems="center" sx={{ p: 2 }}>
              <Grid item>
                <Box width={150} height={150} display="flex" justifyContent="center" alignItems="center" overflow="hidden">
                  <img className="img-box" src={nyc} alt="Description" />
                </Box>
              </Grid>
              <Grid item xs>
                <Box p={2}>
                  <Typography variant="h6" className="box_title">
                    $100M Market Cap
                  </Typography>
                  <Typography variant="body1">Times Square New York</Typography>
                  <div className="box-loc">
                    <img src={usa} alt="canada" />
                    <p>New York City</p>
                  </div>
                </Box>
              </Grid>
            </Grid>
          </Container>
        </div>
      </div>
    </div>
  )
}

export default Mc
