import React from "react"
import { Link } from "gatsby"
import playButtonRed from "../images/player/play-button-red.svg"
import "./episode.css"

const Episode = ({ title, description, episode, date, path, length }) => (
  <div className="page-flex-horizontal" style={{ marginBottom: "32px" }}>
    <Link to={path}>
      <img className="play-button-red" src={playButtonRed} alt="play" />
    </Link>
    <div>
      <h2 className="episode-title">{title}</h2>
      <p className="episode-date">{`${episode} | ${date}`}</p>
      <p>{description}</p>
    </div>
    <p className="episode-length">{length}</p>
  </div>
)

export default Episode
