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
        We're Emma Wedekind, Kelly Vaughn, and Ali Spittel - three seasoned
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
        Our podcast is new, but growing fast. We hit the 35,000 listens mark a
        month after our first episode. Our first episode has reached 8,000
        listens before it was four weeks old. Each episode is passing the 5k
        listens mark one week after publication. The growth has been enormous,
        and we expect these numbers to keep climbing rapidly.
      </p>
      <p>
        Our episodes are released first thing each Monday morning, and are about
        both technical topics and career advice for other developers.
      </p>
      <h3>Sponsorship Pricing</h3>
      <ul>
        <li>One $1,000 pre-roll slot</li>
        <li>Two $800 mid-roll slots</li>
      </ul>
      <h3>What's Included</h3>
      <ul>
        <li>A post-roll slot</li>
        <li>
          Your logo, link, and description on our website on the episode's page
        </li>
        <li>
          A link to your site within the show notes syndicated to podcast
          clients and our RSS feed
        </li>
      </ul>
      <h3>Episode Format</h3>
      <ul>
        <li>An introduction to what the episode is about</li>
        <li>Our jingle</li>
        <li>The pre-roll sponsor</li>
        <li>The first half of the episode</li>
        <li>Mid-roll sponsors</li>
        <li>The second half of the episode</li>
        <li>Post-roll shoutouts</li>
      </ul>

      <p>
        We can customize your message in keeping with our tone and experiences,
        or deliver a script you send us. We do want to make sure we are excited
        about our sponsors, and we would love to participate in demos or even
        build sample apps ourselves if applicable and possible.
      </p>
      <p>
        We ask for a 3 episode minimum agreement for sponsorship so that you
        consistently reach our audience each week.
      </p>
      <p>
        Send us an email at <span className="highlight">hello@ladybug.dev</span>{" "}
        with any questions or to sponsor the show!
      </p>
    </main>
    <Footer />
  </div>
)

export default ContactPage
