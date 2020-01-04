import React from "react"
import "../pages/pages.css"

const TeamMemberBlock = ({ name, image, title, location, bio, links }) => (
  <div className="about-wrapper">
    <img className="about-image" src={image} alt={name} />
    <div className="about-content-wrapper">
      <h2 className="about-name">{name}</h2>
      <h4 className="about-title">{title}</h4>
      <p className="about-location">{location}</p>
      {bio.map((paragraph, i) => (
        <p key={`${i}`}>{paragraph}</p>
      ))}
      {links.map((link, i) => (
        <a
          className="highlight"
          style={{ marginRight: "16px" }}
          href={link.link}
          target="_blank"
          rel="noopener noreferrer"
          key={`${link}_${i}`}
        >
          {link.title}
        </a>
      ))}
    </div>
  </div>
)

export default TeamMemberBlock
