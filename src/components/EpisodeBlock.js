import React from "react"
import { Link } from "gatsby"
import "./episode.css"

const EpisodeBlock = ({ episodeInfo }) => {
  const {
    title,
    description,
    episode,
    formattedDate,
    path,
    length,
  } = episodeInfo.node.frontmatter
  return (
    <div
      className="page-flex-vertical banner-margin"
      style={{ marginBottom: "100px" }}
    >
      <div style={{ display: "flex" }}>
        <div>
          <h2 className="episode-title">{title}</h2>
          <p className="episode-date">{`${episode} | ${formattedDate}`}</p>
          <p>{description}</p>
        </div>
        <p className="episode-length">{length}</p>
      </div>
      <Link to={path}>
        <button className="button button-border">Listen</button>
      </Link>
    </div>
  )
}

export default EpisodeBlock
