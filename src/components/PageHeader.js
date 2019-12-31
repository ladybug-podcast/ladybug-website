import React from "react"
import { Link } from "gatsby"
import logo from "../images/logo.svg"
import "./header.css"

const Header = () => (
  <header className="header page-header">
    <div className="header-content-wrapper">
      <img className="logo" src={logo} alt="Ladybug Podcast" />
      <nav className="nav">
        <ul className="nav-list">
          <li className="nav-list-item">
            <Link to="episodes">Episodes</Link>
          </li>
          <li className="nav-list-item">
            <Link to="about">About Us</Link>
          </li>
          <li className="nav-list-item">
            <Link to="contact">Contact</Link>
          </li>
        </ul>
      </nav>
    </div>
  </header>
)

export default Header
