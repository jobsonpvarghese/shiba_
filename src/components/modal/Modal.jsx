import React, { useState } from "react"
import qr from "../../images/qr.png"
import "./Modal.css"
import { Box, Button, Typography, Modal } from "@mui/material"
import ContentCopyIcon from "@mui/icons-material/ContentCopy"

const ModalBox = ({ open, handleClose }) => {
  const style = {
    position: "absolute",
    top: "50%",
    left: "50%",
    transform: "translate(-50%, -50%)",
    width: 400,
    bgcolor: "#0e46a3",
    boxShadow: 24,
    p: 4
  }
  const [text, setText] = useState("")

  const handleCopy = () => {
    navigator.clipboard
      .writeText(text)
      .then(() => {
        alert("Text copied to clipboard!")
      })
      .catch(err => {
        console.error("Failed to copy text: ", err)
      })
  }
  return (
    <div>
      <Modal open={open} onClose={handleClose} aria-labelledby="modal-modal-title" aria-describedby="modal-modal-description">
        <Box sx={style}>
          <div
            style={{
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center"
            }}
          >
            <Typography
              id="modal-modal-title"
              variant="h6"
              component="h2"
              color="white"
              sx={{
                mb: 5
              }}
            >
              Buy now
            </Typography>
            <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
              <Typography
                sx={{
                  color: "white",
                  fontWeight: "bold"
                }}
              >
                Aqbihvbrihwkevbjklnvwkj
              </Typography>
              <Button variant="contained" color="primary" onClick={handleCopy} startIcon={<ContentCopyIcon />}>
                Copy
              </Button>
            </Box>
            <Typography id="modal-modal-description" sx={{ mt: 2, mb: 2 }}>
              Scan the QR code to send SOL to get your Shiba.
            </Typography>

            <img src={qr} alt="" className="qr" />
          </div>
        </Box>
      </Modal>
    </div>
  )
}

export default ModalBox
