import React, { useState } from "react"
import "./Navbar.css"
import MenuIcon from "@mui/icons-material/Menu"
import RightDrawer from "../drawer/RightDrawer"
import logo from "../../images/logo.png"
const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="navbar-container">
      <div>
        <img src={logo} className="logo" alt="" />
      </div>

      <nav className="navbar">
        <ul className={`nav-links ${isOpen ? "open" : ""}`}>
          <li>
            <a href="/" className="nav-item">
              Home
            </a>
          </li>
          <li>
            <a href="/about" className="nav-item">
              Buy now
            </a>
          </li>
          <li>
            <a href="/services" className="nav-item">
              Pre Sale
            </a>
          </li>
          <li>
            <a href="/contact" className="nav-item">
              Contact
            </a>
          </li>
        </ul>
      </nav>
      <div className="nav_responsive">
        <MenuIcon className="menu_icon" fontSize="large" onClick={() => setIsOpen(!isOpen)} />
        <RightDrawer open={isOpen} onClose={setIsOpen}>
          <ul className="nav_responsive_ul">
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/about"> Buy now</a>
            </li>
            <li>
              <a href="/services">Pre Sale</a>
            </li>
            <li>
              <a href="/contact">Contact</a>
            </li>
          </ul>
        </RightDrawer>
      </div>
    </div>
  )
}

export default Navbar
