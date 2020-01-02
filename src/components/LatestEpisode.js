import React from "react"
import Player from "./Player"
import playButtonWhite from "../images/play-button.svg"
import playButtonRed from "../images/play-button-red.svg"
import "./episode.css"

const LatestEpisode = () => (
  <div className="episode episode-page-header">
    <div className="episode-info">
      <img className="play" src={playButtonWhite} alt="Play" />
      <div>
        <h1 className="episode-title">Career Paths In Tech</h1>
        <p className="episode-date">Season 1 Episode 2 | August 24, 2018</p>
        <p className="episode-description">
          There are so many different paths your career can follow in the tech
          industry. There's frontend, backend, or even full-stack development.
          You could also be a software engineer, quality assurance engineer, UX
          engineer, manager, developer advocate, or something else entirely!
        </p>
      </div>
    </div>
    <Player />
    <button className="button">Read more</button>
  </div>
)

export default LatestEpisode
