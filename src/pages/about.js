import React from "react"
import SEO from "../components/seo"
import PageHeader from "../components/PageHeader"
import TeamMemberBlock from "../components/TeamMemberBlock"
import Footer from "../components/Footer"
import { kellyBio, emmaBio, aliBio } from "../data/bios"
import "./pages.css"

const AboutPage = () => (
  <div className="page">
    <SEO title="Ladybug Podcast" />
    <PageHeader />
    <div className="page-banner">
      <h1>About Us</h1>
    </div>
    <main>
      <TeamMemberBlock
        name={kellyBio.name}
        title={kellyBio.title}
        location={kellyBio.location}
        bio={kellyBio.bio}
        image={kellyBio.image}
        links={kellyBio.links}
      />
      <TeamMemberBlock
        name={emmaBio.name}
        title={emmaBio.title}
        location={emmaBio.location}
        bio={emmaBio.bio}
        image={emmaBio.image}
        links={emmaBio.links}
      />
      <TeamMemberBlock
        name={aliBio.name}
        title={aliBio.title}
        location={aliBio.location}
        bio={aliBio.bio}
        image={aliBio.image}
        links={aliBio.links}
      />
    </main>
    <Footer />
  </div>
)

export default AboutPage
