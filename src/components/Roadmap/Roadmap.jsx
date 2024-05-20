import React from "react"
import { Container, Typography, Box, Grid } from "@mui/material"

const Roadmap = () => {
  return (
    <div style={{ backgroundColor: "#0e46a3" }}>
      <Container sx={{ pt: 10 }}>
        <Box py={4}>
          <Typography variant="h4" gutterBottom sx={{ color: "#f7b500" }}>
            Welcome to the world of Vote4Shiba
          </Typography>
          <Typography variant="body1" paragraph>
            Welcome to the world of Vote4Shiba, an innovative memecoin that transcends the typical boundaries of cryptocurrency. Built on the robust
            Solana blockchain, Vote4Shiba is more than just a memecoin—it's a pioneering force in digital governance, community empowerment, and
            charitable endeavors.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ color: "#f7b500" }}>
            A New Era of Memecoins
          </Typography>
          <Typography variant="body1" paragraph>
            Vote4Shiba is not your ordinary memecoin. It combines the whimsical charm and viral potential of a memecoin with groundbreaking features
            that foster community engagement and governance. At the heart of Vote4Shiba lies a strong sense of community attachment and a commitment
            to advocating for free speech.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ color: "#f7b500" }}>
            Empowering the Community Through Virtual Elections
          </Typography>
          <Typography variant="body1" paragraph>
            In a first for the memecoin space, Vote4Shiba introduces a novel approach to community governance. The platform will conduct virtual
            elections, allowing every community member to participate in choosing the governance body. This democratic process ensures that the future
            of Vote4Shiba is shaped by the collective voice of its community, embodying the principle of "by the community, for the community, and of
            the community."
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ color: "#f7b500" }}>
            Advocacy for Free Speech and Charitable Work
          </Typography>
          <Typography variant="body1" paragraph>
            Vote4Shiba stands as a beacon for free speech within the crypto world. It provides a platform where all voices can be heard and respected,
            fostering an environment of open dialogue and inclusivity. Moreover, the community is deeply committed to charitable work, leveraging the
            power of the collective to drive positive change in the real world. Through various initiatives, Vote4Shiba aims to make a tangible
            impact, demonstrating the potential of cryptocurrency to support and enhance philanthropic efforts.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ color: "#f7b500" }}>
            Strong Community Attachment
          </Typography>
          <Typography variant="body1" paragraph>
            The backbone of Vote4Shiba is its vibrant and engaged community. By prioritizing community-driven initiatives and ensuring that every
            member has a say in governance, Vote4Shiba cultivates a strong sense of belonging and shared purpose. This unique approach not only
            strengthens the coin's ecosystem but also fortifies the bond among its members.
          </Typography>

          <Typography variant="h5" gutterBottom sx={{ color: "#f7b500" }}>
            Join the Revolution
          </Typography>
          <Typography variant="body1" paragraph>
            As we prepare to launch Vote4Shiba on the Solana blockchain, we invite you to join us in this revolutionary journey. Be part of a movement
            that is redefining what a memecoin can be—one that empowers its community, advocates for free speech, and makes a difference through
            charitable actions. Together, we can shape a brighter future, powered by the spirit of Shiba and the strength of our community.
          </Typography>
        </Box>

        <Box py={4}>
          <Typography variant="h4" gutterBottom sx={{ color: "#f7b500" }}>
            Key Features
          </Typography>
          <Grid container spacing={2}>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" sx={{ color: "white" }}>
                Community Governance
              </Typography>
              <Typography variant="body2" sx={{ color: "white" }}>
                Vote4Shiba prioritizes decentralization and community empowerment by enabling token holders to vote on key decisions regarding the
                future direction of the project.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" sx={{ color: "white" }}>
                Solana Blockchain
              </Typography>
              <Typography variant="body2">
                Built on the Solana blockchain, Vote4Shiba benefits from its high throughput, low transaction fees, and fast confirmation times.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" sx={{ color: "white" }}>
                Yield Farming
              </Typography>
              <Typography variant="body2" sx={{ color: "white" }}>
                Vote4Shiba incentivizes liquidity provision and participation in the ecosystem through yield farming opportunities.
              </Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={3}>
              <Typography variant="h6" sx={{ color: "white" }}>
                Community Engagement
              </Typography>
              <Typography variant="body2">
                At the heart of Vote4Shiba is a vibrant and inclusive community dedicated to the project's success.
              </Typography>
            </Grid>
          </Grid>
        </Box>

        <Box py={4} sx={{ color: "white" }}>
          <Typography variant="h4" gutterBottom sx={{ color: "#f7b500" }}>
            Roadmap
          </Typography>
          <Typography variant="h5">Phase 1:</Typography>
          <ul>
            <li>Website Development</li>
            <li>Social Media Setup</li>
            <li>Strong Community Buildup</li>
            <li>Launch of Vote4Shiba on Solana Mainnet / Start Pre Sale</li>
            <li>Establishment of governance framework</li>
          </ul>

          <Typography variant="h5">Phase 2:</Typography>
          <ul>
            <li>Launched on Raydium</li>
            <li>Expansion of ecosystem through strategic partnerships & Crazy Marketing</li>
            <li>Listings on major exchanges, and implementation of additional features such as cross-chain interoperability</li>
          </ul>

          <Typography variant="h5">Phase 3:</Typography>
          <ul>
            <li>
              Continued development and optimization based on community feedback, adoption of emerging technologies, and expansion into new markets
              and use cases
            </li>
          </ul>
        </Box>

        <Box py={4}>
          <Typography variant="h4" gutterBottom sx={{ color: "#f7b500" }}>
            Conclusion
          </Typography>
          <Typography variant="body1" paragraph>
            Vote4Shiba represents a unique opportunity to participate in the next evolution of memecoins, combining the popularity of the Shiba Inu
            meme with the technological innovation of the Solana blockchain. By prioritizing community governance, fostering engagement, and
            incentivizing participation, Vote4Shiba aims to create a sustainable and inclusive ecosystem that empowers its users and drives long-term
            value for all stakeholders. Join us on our journey to the moon and beyond! 🚀🌕
          </Typography>
        </Box>
      </Container>
    </div>
  )
}

export default Roadmap
