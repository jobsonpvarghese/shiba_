import React from "react"
import { Drawer } from "@mui/material"
import "./RightDrawer.css"

const RightDrawer = ({ children, open, onClose, onOpen, className }) => {
  const toggleDrawer = open => event => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return
    }
    onClose(open)
  }

  return (
    <div>
      <Drawer elevation={100} anchor={"right"} open={open} onClose={toggleDrawer(false)}>
        {children}
      </Drawer>
    </div>
  )
}

export default RightDrawer
