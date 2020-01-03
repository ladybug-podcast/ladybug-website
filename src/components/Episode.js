import React from "react"
import { Link } from "gatsby"
import playButtonRed from "../images/player/play-button-red.svg"
import "./episode.css"

const Episode = ({ episodeInfo }) => {
  const {
    title,
    description,
    episode,
    formattedDate,
    path,
    length,
  } = episodeInfo.node.frontmatter
  return (
    <div className="page-flex-horizontal" style={{ marginBottom: "32px" }}>
      <Link to={path}>
        <img className="play-button-red" src={playButtonRed} alt="play" />
      </Link>
      <div>
        <h2 className="episode-title">{title}</h2>
        <p className="episode-date">{`${episode} | ${formattedDate}`}</p>
        <p>{description}</p>
      </div>
      <p className="episode-length">{length}</p>
    </div>
  )
}

export default Episode
