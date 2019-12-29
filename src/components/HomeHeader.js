import React from "react"
import { Link } from "gatsby"
import LatestEpisode from "./LatestEpisode"
import HomeBackground from "./HomeBackground"
import lightLogo from "../images/light-logo.svg"
import "./header.css"

const Header = () => (
  <header className="header header-full">
    <HomeBackground />
    <div className="header-content-wrapper">
      <img className="logo" src={lightLogo} alt="Ladybug Podcast" />
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
    <LatestEpisode />
  </header>
)

export default Header
