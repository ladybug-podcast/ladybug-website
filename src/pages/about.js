import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import PageHeader from "../components/PageHeader"
import TeamMemberBlock from "../components/TeamMemberBlock"
import Footer from "../components/Footer"
import { kellyBio, emmaBio, aliBio } from "../data/bios"
import "./pages.css"

const AboutPage = ({ data }) => (
  <div className="page">
    <SEO title="Ladybug Podcast" />
    <PageHeader />

    <main>
      <div className="page-banner">
        <h1>About Us</h1>
      </div>
      <TeamMemberBlock
        name={kellyBio.name}
        title={kellyBio.title}
        location={kellyBio.location}
        bio={kellyBio.bio}
        image={data.kelly.childImageSharp.fixed}
        links={kellyBio.links}
      />
      <TeamMemberBlock
        name={emmaBio.name}
        title={emmaBio.title}
        location={emmaBio.location}
        bio={emmaBio.bio}
        image={data.emma.childImageSharp.fixed}
        links={emmaBio.links}
      />
      <TeamMemberBlock
        name={aliBio.name}
        title={aliBio.title}
        location={aliBio.location}
        bio={aliBio.bio}
        image={data.ali.childImageSharp.fixed}
        links={aliBio.links}
      />
    </main>
    <Footer />
  </div>
)

export const Photos = graphql`
  {
    kelly: file(relativePath: { eq: "team/kelly.jpg" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    emma: file(relativePath: { eq: "team/emma.jpg" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    ali: file(relativePath: { eq: "team/ali.jpg" }) {
      childImageSharp {
        fixed(width: 200) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default AboutPage
