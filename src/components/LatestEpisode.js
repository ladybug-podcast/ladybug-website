import React from "react"
import playButtonWhite from "../images/play-button.svg"
import "./latestEpisode.css"

const LatestEpisode = () => (
  <div className="latest-episode">
    <div className="latest-episode-info">
      <img className="play" src={playButtonWhite} alt="Play" />
      <div>
        <h1 className="latest-episode-title">Career Paths In Tech</h1>
        <p className="latest-episode-date">
          Season 1 Episode 2 | August 24, 2018
        </p>
        <p className="latest-episode-description">
          There are so many different paths your career can follow in the tech
          industry. There's frontend, backend, or even full-stack development.
          You could also be a software engineer, quality assurance engineer, UX
          engineer, manager, developer advocate, or something else entirely!
        </p>
      </div>
    </div>
    <div className="player-container">
      <p className="player-total-time">49:02</p>
      <progress className="player" id="player" max="100" value="35" />
      <p className="player-current-time">14:03</p>
    </div>
    <button className="button">Read more</button>
  </div>
)

export default LatestEpisode
