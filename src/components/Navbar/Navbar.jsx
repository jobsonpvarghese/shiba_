import React, { useEffect, useState } from "react"
import "./Navbar.css"
import MenuIcon from "@mui/icons-material/Menu"
import RightDrawer from "../drawer/RightDrawer"
import logo from "../../images/logo.png"
import ModalBox from "../modal/Modal"
import { Link } from "react-router-dom"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faTelegram } from "@fortawesome/free-brands-svg-icons"
import { Box } from "@mui/material"
import united from "../../images/icons/states.png"
import dollar from "../../images/icons/dollar.png"
import star from "../../images/icons/star.png"
import tg from "../../images/icons/telegram.png"

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [openModal, setOpenModal] = useState(false)
  const [isSticky, setIsSticky] = useState(false)

  const handleOpen = () => setOpenModal(true)
  const handleClose = () => setOpenModal(false)

  useEffect(() => {
    const handleScroll = () => {
      setIsSticky(window.scrollY > 50)
    }

    window.addEventListener("scroll", handleScroll)

    // Cleanup the event listener on component unmount
    return () => {
      window.removeEventListener("scroll", handleScroll)
    }
  }, [])

  return (
    <div>
      <div className={`navbar-container${isSticky ? "-sticky" : ""}`}>
        <div className={`join_header`}>
          <div class="marquee">
            <div class="marquee-content">
              {Array.from({ length: 10 }).map(
                (item, index) => (
                  console.log(item),
                  (
                    <>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          paddingLeft: "50px"
                        }}
                      >
                        <img src={united} className="icon" alt="state" /> &nbsp;
                        <span>President Shiba</span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          paddingLeft: "50px"
                        }}
                      >
                        <img src={dollar} className="icon" alt="state" /> &nbsp;
                        <span>Vote 4 shiba</span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          paddingLeft: "50px"
                        }}
                      >
                        <img src={tg} className="icon" alt="state" /> &nbsp;
                        <span>Join our telegram</span>
                      </div>
                      <div
                        style={{
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                          paddingLeft: "50px"
                        }}
                      >
                        <img src={star} className="icon" alt="state" /> &nbsp;
                        <span>Vote 4 Shiba</span>
                      </div>
                    </>
                  )
                )
              )}
            </div>
          </div>
        </div>
        <div className="nav_desktop">
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
              <li
                onClick={handleOpen}
                style={{
                  cursor: "pointer"
                }}
              >
                <span className="nav-item">Buy now</span>
              </li>
              <li>
                <a href="/whitepaper" className="nav-item">
                  White Paper
                </a>
              </li>
              <li>
                <a href="/leaderboard" className="nav-item">
                  Leaderboard
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
                <li onClick={handleOpen}>
                  <div
                    style={{
                      color: "white"
                    }}
                    href="#"
                  >
                    Buy now
                  </div>
                </li>
                <li>
                  <a href="/whitepaper">White Paper</a>
                </li>
                <li>
                  <a href="/leaderboard">Leaderboard</a>
                </li>
              </ul>
            </RightDrawer>
          </div>
        </div>
      </div>
      <ModalBox open={openModal} handleClose={handleClose} isOpen={isOpen} onClose={setIsOpen} />
    </div>
  )
}

export default Navbar
