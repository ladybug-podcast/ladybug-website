import React from "react"
import { Link } from "gatsby"
import playButtonWhite from "../images/player/play-button.svg"
import "./episode.css"

const Episode = ({
  title,
  audio,
  description,
  length,
  formattedDate,
  path,
  episode,
  isEpisodeHeader = false,
}) => {
  return (
    <div
      className={isEpisodeHeader ? "episode  episode-page-header" : "episode"}
    >
      <div className="episode-info">
        <img className="play" src={playButtonWhite} alt="Play" />
        <div>
          <h1 className="episode-title">{title}</h1>
          <p className="episode-date">{`${episode} | ${formattedDate}`}</p>
          <p className="episode-description">{description}</p>
        </div>
      </div>
      <div className="player-container">
        <p className="player-total-time">{length}</p>
        <progress className="player" id="player" max="100" value="35" />
        <p className="player-current-time">14:03</p>
      </div>
      {!isEpisodeHeader && (
        <Link to={path}>
          <button className="button">Read show notes</button>
        </Link>
      )}
    </div>
  )
}

export default Episode
