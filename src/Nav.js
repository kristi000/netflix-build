import React, { useEffect, useState } from "react"
import "./Nav.css"
import { useNavigate } from "react-router-dom"

function Nav() {
  const [show, handleShow] = useState(false)
  const navigate = useNavigate()

  const transitionNavBar = () => {
    if (window.scrollY > 100) {
      handleShow(true)
    } else {
      handleShow(false)
    }
  }
  useEffect(() => {
    window.addEventListener("scroll", transitionNavBar)
    return () => window.removeEventListener("scroll", transitionNavBar)
  }, [])

  return (
    <div className={`navBar ${show && "navBlack"}`}>
      <div className="navContents">
        <img
          onClick={() => navigate("/")}
          className="navLogo"
          src="https://upload.wikimedia.org/wikipedia/commons/0/08/Netflix_2015_logo.svg"
          alt="Netflix Logo"
        />
        <img
          onClick={() => navigate("/profile")}
          className="navAvatar"
          src="https://upload.wikimedia.org/wikipedia/commons/0/0b/Netflix-avatar.png"
          alt="Netflix Avatar"
        />
      </div>
    </div>
  )
}

export default Nav
