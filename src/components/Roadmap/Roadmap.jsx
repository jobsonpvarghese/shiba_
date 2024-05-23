import React, { useEffect, useRef, useState } from "react"
import { Container, Typography, Box, Grid } from "@mui/material"
import "./Roadmap.css"

import intro from "../../images/intro.mp4"

const Roadmap = () => {
  const videoRef = useRef(null)

  const [canPlay, setCanPlay] = useState(false)

  useEffect(() => {
    const handleUserInteraction = () => {
      setCanPlay(true)
      document.removeEventListener("click", handleUserInteraction)
      document.removeEventListener("keydown", handleUserInteraction)
    }

    document.addEventListener("click", handleUserInteraction)
    document.addEventListener("keydown", handleUserInteraction)

    return () => {
      document.removeEventListener("click", handleUserInteraction)
      document.removeEventListener("keydown", handleUserInteraction)
    }
  }, [])

  useEffect(() => {
    if (!canPlay) return

    const videoElement = videoRef.current

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && videoElement) {
          videoElement.play().catch(error => {
            console.error("Error playing video:", error)
          })
        } else if (videoElement) {
          videoElement.pause()
        }
      },
      { threshold: 0.25 } // Adjust this threshold as needed
    )

    if (videoElement) {
      observer.observe(videoElement)
    }

    return () => {
      if (videoElement) {
        observer.unobserve(videoElement)
      }
    }
  }, [canPlay])

  return (
    <div style={{}} className="roadmap">
      <Container>
        <Box py={4}>
          <Grid container spacing={4} alignItems="center">
            <Grid item xs={12} md={6}>
              <h1>Introduction to Vote4Shiba</h1>
              <Typography variant="body1" paragraph>
                Welcome to the world of Vote4Shiba, an innovative memecoin that transcends the typical boundaries of cryptocurrency. Built on the
                robust Solana blockchain, Vote4Shiba is more than just a memecoin—it's a pioneering force in digital governance, community
                empowerment, and charitable endeavors.
              </Typography>
              <Typography variant="body1" paragraph>
                Vote4Shiba is not your ordinary memecoin. It combines the whimsical charm and viral potential of a memecoin with groundbreaking
                features that foster community engagement and governance. At the heart of Vote4Shiba lies a strong sense of community attachment and a
                commitment to advocating for free speech.
              </Typography>
            </Grid>
            <Grid item xs={12} md={6}>
              <Box>
                <video ref={videoRef} width="100%" height="auto" autoPlay loop playsInline>
                  <source src={intro} type="video/mp4" />
                  Your browser does not support the video tag.
                </video>
              </Box>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </div>
  )
}

export default Roadmap
