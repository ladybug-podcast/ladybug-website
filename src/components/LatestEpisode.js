import React from "react"
import { Link } from "gatsby"
import Player from "./Player"
import playButtonWhite from "../images/player/play-button.svg"
import "./episode.css"

const LatestEpisode = ({
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
      <Player length={length} audio={audio} />
      {!isEpisodeHeader && (
        <Link to={path}>
          <button className="button">Read show notes</button>
        </Link>
      )}
    </div>
  )
}

export default LatestEpisode
