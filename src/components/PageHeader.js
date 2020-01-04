import React from "react"
import { Link } from "gatsby"
import logo from "../images/brand/logo.svg"
import "./header.css"

const Header = () => (
  <header className="header page-header">
    <div className="header-content-wrapper">
      <Link to="/">
        <img className="logo" src={logo} alt="Ladybug Podcast" />
      </Link>
      <nav className="nav">
        <Link to="episodes">Episodes</Link>
        <Link to="about">About Us</Link>
        <Link to="contact">Contact</Link>
      </nav>
    </div>
  </header>
)

export default Header
