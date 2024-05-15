import React from "react"
import { Drawer } from "@mui/material"
// import "./RightDrawer.css"

const RightDrawer = ({ children, open, onClose, onOpen, className }) => {
  const toggleDrawer = open => event => {
    if (event.type === "keydown" && (event.key === "Tab" || event.key === "Shift")) {
      return
    }
    onClose(open)
  }

  const drawerWidth = 240
  return (
    <div>
      <Drawer
        elevation={100}
        anchor={"right"}
        open={open}
        onClose={toggleDrawer(false)}
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          "& .MuiDrawer-paper": {
            width: drawerWidth,
            boxSizing: "border-box",
            backgroundColor: "#0e46a3" // Change this to your desired color
          }
        }}
      >
        {children}
      </Drawer>
    </div>
  )
}

export default RightDrawer
