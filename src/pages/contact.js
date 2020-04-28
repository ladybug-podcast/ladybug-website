import React from "react"
import SEO from "../components/seo"
import PageHeader from "../components/PageHeader"
import Footer from "../components/Footer"
import "./pages.css"

const ContactPage = () => (
  <div className="page">
    <SEO title="Ladybug Podcast" />
    <PageHeader />

    <main>
      <div className="page-banner">
        <h1>Contact Us</h1>
      </div>
      <h2>Get In Touch</h2>
      <p>
        Have some feedback or just want to get in touch? Feel free to send us a
        DM on{" "}
        <a
          className="highlight"
          href="https://twitter.com/LadybugPodcast"
          target="_blank"
          rel="noopener noreferrer"
        >
          Twitter
        </a>{" "}
        or send an email to <span className="highlight">hello@ladybug.dev</span>
        .
      </p>
      <h2>Sponsorships</h2>
      <p>
        We're Emma Bostian, Kelly Vaughn, and Ali Spittel - three seasoned
        software developers working in different sectors. We wanted to add our
        voices to the podcasting sphere and share our experiences and advice. We
        have great discussions around how to start coding, the hot technologies
        right now, how to get your first developer job, imposter syndrome, how
        to write CSS and more!
      </p>
      <p>
        Our podcast has been reaching a large audience of diverse developers
        from junior to senior and everything in between. According to Spotify's
        analytics, 35% of our listeners are women, far outpacing the industry.
      </p>
      <p>
        Moving into our third season, we have over 290,000 listens from our
        first 38 episodes. We average 5,000 listeners in the first week after
        releasing an episode, and some of our episodes have well over 10,000
        listens. We're very excited about the future of our podcast!
      </p>
      <p>
        Our episodes are released first thing each Monday morning, and are about
        both technical topics and career advice for other developers.
      </p>
      <h3>Sponsorship Pricing</h3>
      <ul>
        <li>Two $1,000 pre-roll slots</li>
        <li>Two $800 mid-roll slots</li>
      </ul>
      <h3>What's Included</h3>
      <ul>
        <li>
          Your logo, link, and description on our website on the episode's page
        </li>
        <li>
          A link to your site within the show notes syndicated to podcast
          clients and our RSS feed
        </li>
        <li>
          Event tracking on your logo to track clicks from our website to yours
        </li>
      </ul>
      <h3>Episode Format</h3>
      <ul>
        <li>An introduction to what the episode is about</li>
        <li>Our jingle</li>
        <li>Pre-roll sponsors</li>
        <li>The first half of the episode</li>
        <li>Mid-roll sponsors</li>
        <li>The second half of the episode</li>
      </ul>
      <p>
        We can customize your message in keeping with our tone and experiences,
        or deliver a script you send us. We do want to make sure we are excited
        about our sponsors, and we would love to participate in demos or even
        build sample apps ourselves if applicable and possible. Each
        advertisement is approximately 1 minute in length.
      </p>
      <p>
        Send us an email at{" "}
        <a href="mailto:hello@ladybug.dev" className="highlight">
          hello@ladybug.dev
        </a>{" "}
        with any questions or to sponsor the show!
      </p>
    </main>
    <Footer />
  </div>
)

export default ContactPage
