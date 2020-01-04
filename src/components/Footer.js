import React from "react"
import { Link } from "gatsby"
import twitter from "../images/footer/twitter.svg"
import google from "../images/footer/google.svg"
import spotify from "../images/footer/spotify.svg"
import rss from "../images/footer/rss.svg"
import itunes from "../images/footer/itunes.svg"
import podcast from "../images/footer/podcast.svg"
import "./footer.css"

const Footer = () => (
  <footer className="footer">
    <div className="footer-find-episodes">
      <p>
        <span role="img" aria-label="Headphones">
          🎧
        </span>{" "}
        Find our episodes where you listen to podcasts{" "}
        <span role="img" aria-label="Headphones">
          🎧
        </span>
      </p>
      <div className="footer-icons">
        <a
          href="https://twitter.com/LadybugPodcast"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={twitter} alt="Twitter" />
        </a>
        <a
          href="https://play.google.com/music/listen?u=0#/ps/I4lyvappbarpo5olinvd2gxh3km"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={google} alt="Google Play" />
        </a>
        <a
          href="https://open.spotify.com/show/1KBO1tSnm0XRlEILmqt7Em"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={spotify} alt="Spotify" />
        </a>
        <a
          href="https://podcasts.apple.com/us/podcast/ladybug-podcast/id1469229625"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={itunes} alt="Apple Podcasts" />
        </a>
        <a
          href="https://www.stitcher.com/podcast/ladybug-podcast"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={podcast} alt="Stitcher" />
        </a>
        <a
          href="https://pinecast.com/feed/ladybug-podcast"
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={rss} alt="RSS Feed" />
        </a>
      </div>
    </div>
    <div className="footer-links">
      <Link to="/contact">Sponsor Us</Link>
      <a
        href="https://github.com/ladybug-podcast/ladybugpodcast"
        target="_blank"
        rel="noopener noreferrer"
      >
        Fix Our Website
      </a>
      <a
        href="https://docs.google.com/forms/d/e/1FAIpQLSc0IBTZA1Acv9a05VQAjtSgv-M8GRtGq7yDXSKL_vYKGcBlTw/viewform"
        target="_blank"
        rel="noopener noreferrer"
      >
        Nominate A Guest
      </a>
      <a
        href="https://forms.gle/UDVfz2cu73UyGhieA"
        target="_blank"
        rel="noopener noreferrer"
      >
        Request An Episode
      </a>
    </div>
    <p className="footer-copyright">
      © Ladybug Podcast 2019. Produced by Kelly Vaughn, Ali Spittel, and Emma
      Wedekind.
    </p>
  </footer>
)

export default Footer
