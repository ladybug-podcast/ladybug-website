import React from "react"
import "./player.css"

const Player = () => (
  <div className="player-container">
    <p className="player-total-time">49:02</p>
    <progress className="player" id="player" max="100" value="35" />
    <p className="player-current-time">14:03</p>
  </div>
)

export default Player
