import React, { useState, useEffect } from "react"
import { Link } from "gatsby"
import playButton from "../images/player/play-button.svg"
import pauseButton from "../images/player/pause-button.svg"
import volumeOn from "../images/player/volume-on.svg"
import volumeOff from "../images/player/volume-off.svg"
import "./episode.css"

const Player = ({
  title,
  audio,
  description,
  length,
  formattedDate,
  path,
  episode,
  isEpisodeHeader = false,
}) => {
  const [isPlaying, setIsPlaying] = useState(false)
  const [isMuted, setIsMuted] = useState(false)
  const [currentTime, setCurrentTime] = useState(0)
  const [duration, setDuration] = useState(0)
  const [playerValue, setPlayerValue] = useState(0)
  const [volumeValue, setVolumeValue] = useState(1)

  const updateDuration = e => {
    setDuration(e.currentTarget.duration)
  }

  const onTimeUpdate = e => {
    const { currentTime } = e.currentTarget
    const progressTime = (currentTime / duration) * 100
    if (Number.isNaN(progressTime)) return
    setPlayerValue(progressTime)
    setCurrentTime(currentTime)
  }

  const jumpAudio = e => {
    const audioPlayer = document.getElementById("audio-player")

    let newListenTime =
      (e.nativeEvent.offsetX / e.currentTarget.offsetWidth) * duration
    const progressTime = (newListenTime / duration) * 100

    if (Number.isNaN(progressTime)) return
    audioPlayer.currentTime = newListenTime
    setPlayerValue(progressTime)
    setCurrentTime(newListenTime)
  }

  const toggleIsMuted = () => {
    const audioPlayer = document.getElementById("audio-player")
    const nextIsMuted = !isMuted
    audioPlayer.volume = nextIsMuted ? 0 : volumeValue
    setIsMuted(nextIsMuted)
  }

  const updateVolume = e => {
    const audioPlayer = document.getElementById("audio-player")
    let newUpdatedVolume = 
      (e.nativeEvent.offsetX / e.currentTarget.offsetWidth)
    if (newUpdatedVolume <= 0) newUpdatedVolume = 0
    audioPlayer.volume = newUpdatedVolume;
    setIsMuted(false);
    setVolumeValue(newUpdatedVolume)
  }

  const formatTime = time => {
    let calculatedTime = time

    let hours = Math.floor(time / 3600)
    calculatedTime = time - hours * 3600
    let minutes = Math.floor(calculatedTime / 60)
    let seconds = Math.floor(calculatedTime - minutes * 60)

    if (seconds < 10) {
      seconds = `0${seconds}`
    }

    if (hours) {
      if (minutes < 10) {
        minutes = `0${minutes}`
      }
      return `${hours}:${minutes}:${seconds}`
    }

    return `${minutes}:${seconds}`
  }

  return (
    <div
      className={isEpisodeHeader ? "episode  episode-page-header" : "episode"}
    >
      <div className="episode-info">
        <button
          className={isPlaying ? "audio-control pause" : "audio-control play"}
          onClick={() => {
            let audio = document.querySelector("#audio-player")
            isPlaying ? audio.pause() : audio.play()
            setIsPlaying(!isPlaying)
          }}
          aria-label={isPlaying ? "Pause podcast" : "Play podcast"}
        ></button>
        <div>
          <h1 className="episode-title">{title}</h1>
          <p className="episode-date">{`${episode} | ${formattedDate}`}</p>
          <p className="episode-description">{description}</p>
        </div>
      </div>
      <audio
        id="audio-player"
        onTimeUpdate={onTimeUpdate}
        onLoadedMetadata={updateDuration}
      >
        <source src={audio} type="audio/mpeg" />
      </audio>
      <div className="player-container">
        <p className="player-total-time">{length}</p>
        <progress
          className="player"
          id="player"
          max="100"
          value={playerValue}
          onClick={e => jumpAudio(e)}
        />
        <div className="current-time-volume-container">
          <p className="player-current-time">{formatTime(currentTime)}</p>
          <div className="player-volume-container">
            {volumeValue === 0 || isMuted ? (
              <img src={volumeOff} alt="Volume Off" onClick={() => toggleIsMuted()} />
            ) : (
              <img src={volumeOn} alt="Volume On" onClick={() => toggleIsMuted()} />
            )}
            <progress
              className="volume"
              id="volume"
              max="100"
              value={isMuted ? 0 : volumeValue * 100}
              onClick={e => updateVolume(e)}
            />
          </div>
        </div>
      </div>
      {!isEpisodeHeader && (
        <Link to={path} className="episode-header-button">
          <button className="button">Read show notes</button>
        </Link>
      )}
    </div>
  )
}

export default Player
