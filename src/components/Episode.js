import React from "react"
import playButtonRed from "../images/play-button-red.svg"
import "./episode.css"

const Episode = () => (
  <div className="page-flex-horizontal" style={{ marginBottom: "32px" }}>
    <img className="play-button-red" src={playButtonRed} alt="play" />
    <div>
      <h2 className="episode-title">Career Paths In Tech</h2>
      <p className="episode-date">Season 1 Episode 2 | August 24, 2018</p>
      <p>
        There are so many different paths your career can follow in the tech
        industry. There's frontend, backend, or even full-stack development. You
        could also be a software engineer, quality assurance engineer, UX
        engineer, manager, developer advocate, or something else entirely!
      </p>
    </div>
  </div>
)

export default Episode
