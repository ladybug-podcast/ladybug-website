import React from "react"
import { formatTime, renderValueNow, renderValueText } from "../utils/utils"
import "./player.css"

const Player = ({ length, audio }) => (
  <div className="player-container">
    <p className="player-total-time">{length}</p>
    <progress className="player" id="player" max="100" value="35" />
    <p className="player-current-time">14:03</p>
  </div>
)

export default Player
