import React from "react"
import { Modal, Box, IconButton } from "@mui/material"
import { Close } from "@mui/icons-material"
// import QRCode from "qrcode.react"
import PaymentCOmponent from "../payment/Payment"

const style = {
  position: "absolute",
  top: "50%",
  left: "50%",
  transform: "translate(-50%, -50%)",
  width: {
    xs: "90%", // 90% width for extra-small screens
    sm: 400 // 400px width for small screens and up
  },
  background: "#b22234",
  boxShadow: 24,
  p: 4,
  borderRadius: "8px",
  textAlign: "center",
  borderColor: "none",
  color: "white"
}
const ModalBox = ({ open, handleClose }) => {
  // const walletAddress = "2rBgAkoe2VzTH5KmuV4ATJmmeCx7BCK6TbKQq5B3WYU2"

  // const handleCopy = () => {
  //   navigator.clipboard.writeText(walletAddress)
  //   alert("Wallet address copied to clipboard")
  // }

  return (
    <div>
      <Modal open={open} onClose={handleClose}>
        <Box sx={style}>
          <IconButton onClick={handleClose} sx={{ position: "absolute", top: 8, right: 8, color: "white" }}>
            <Close />
          </IconButton>
          <PaymentCOmponent
            src="https://pay.radom.com/presale/7a9e74c1-4be0-4b3a-a5fe-b08e0576d602"
            title="Radom Payment Page"
            width="100%"
            height="600px"
          />
        </Box>
      </Modal>
    </div>
  )
}

export default ModalBox
