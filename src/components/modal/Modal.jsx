import React from "react"
import { Modal, Box, Typography, IconButton, TextField, Tooltip } from "@mui/material"
import { Close, ContentCopy } from "@mui/icons-material"
import QRCode from "qrcode.react"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "70%", // 90% width for extra-small screens
    sm: 400 // 400px width for small screens and up
  },
  background: "#f7b500",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
  textAlign: "center",
  borderColor: "none",
  color: "black"
}
const ModalBox = ({ open, handleClose }) => {
  const walletAddress = "0xYourWalletAddressHere"

  const handleCopy = () => {
    navigator.clipboard.writeText(walletAddress)
    alert("Wallet address copied to clipboard")
  }

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <IconButton onClick={handleClose} sx={{ position: "absolute", top: 8, right: 8, color: "black" }}>
            <Close />
          </IconButton>
          <Typography variant="h4" component="h2" gutterBottom sx={{ fontWeight: "bold" }}>
            Buy Shiba
          </Typography>
          <Typography variant="body1" gutterBottom color={"black"}>
            Easily purchase Shiba by scanning the QR code below or copying the wallet address.
          </Typography>
          <QRCode value={walletAddress} size={256} />
          <Box mt={2} display="flex" justifyContent="center" alignItems="center">
            <TextField
              variant="outlined"
              value={walletAddress}
              InputProps={{
                readOnly: true,
                style: { color: "black" }
              }}
              sx={{
                width: "80%",
                marginRight: 1,
                "& .MuiOutlinedInput-root": {
                  "& fieldset": { borderColor: "black" },
                  "&:hover fieldset": { borderColor: "black" },
                  "&.Mui-focused fieldset": { borderColor: "black" }
                }
              }}
            />
            <Tooltip title="Copy to clipboard">
              <IconButton color="inherit" onClick={handleCopy}>
                <ContentCopy />
              </IconButton>
            </Tooltip>
          </Box>
          <Typography variant="body2" mt={2} color={"black"}>
            *Send the desired amount of SOL to the above address, and the equivalent amount of Shiba will be sent to your wallet.
          </Typography>
        </Box>
      </Modal>
    </div>
  )
}

export default ModalBox
