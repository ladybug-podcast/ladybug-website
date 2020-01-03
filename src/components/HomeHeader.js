import React from "react"
import { Link } from "gatsby"
import Player from "./Player"
import HomeBackground from "./HomeBackground"
import lightLogo from "../images/brand/light-logo.svg"
import "./header.css"

const Header = ({ latestEpisode }) => {
  const {
    title,
    audio,
    description,
    length,
    formattedDate,
    path,
    episode,
  } = latestEpisode.node.frontmatter
  return (
    <header className="header header-full">
      <HomeBackground />
      <div className="header-content-wrapper">
        <Link to="/">
          <img className="logo" src={lightLogo} alt="Ladybug Podcast" />
        </Link>
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
      <Player
        title={title}
        description={description}
        audio={audio}
        episode={episode}
        path={path}
        length={length}
        formattedDate={formattedDate}
      />
    </header>
  )
}

export default Header
