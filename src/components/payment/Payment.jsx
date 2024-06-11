import React from "react"

const PaymentCOmponent = ({ src, title, width, height }) => {
  return <iframe src={src} title={title} width={width} height={height} style={{ border: "none" }} allowFullScreen></iframe>
}

export default PaymentCOmponent
