import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import HomeHeader from "../components/HomeHeader"
import EpisodeBlock from "../components/EpisodeBlock"
import Footer from "../components/Footer"
import "./pages.css"

const IndexPage = ({ data }) => {
  return (
    <div>
      <SEO title="Ladybug Podcast" />
      <HomeHeader latestEpisode={data.allMarkdownRemark.edges[0]} />
      <main className="home-main">
        <h2>Recent Episodes</h2>
        <EpisodeBlock episodeInfo={data.allMarkdownRemark.edges[1]} />
        <EpisodeBlock episodeInfo={data.allMarkdownRemark.edges[2]} />
        <EpisodeBlock episodeInfo={data.allMarkdownRemark.edges[3]} />
      </main>
      <Footer />
    </div>
  )
}

export const blogsQuery = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      edges {
        node {
          frontmatter {
            path
            title
            formattedDate
            description
            episode
            length
            audio
          }
        }
      }
    }
  }
`

export default IndexPage
