import React from "react"
import { Link } from "gatsby"
import Player from "./Player"
import HomeBackground from "./HomeBackground"
import lightLogo from "../images/brand/logo-white.svg"
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
        <Link className="home-logo" to="/">
          <img className="logo" src={lightLogo} alt="Ladybug Podcast" />
        </Link>
        <nav className="nav">
          <Link to="episodes">Episodes</Link>
          <Link to="books">Book Club</Link>
          <Link to="about">About Us</Link>
          <Link to="contact">Contact</Link>
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
