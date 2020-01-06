import React from "react"
import { graphql } from "gatsby"
import SEO from "../components/seo"
import PageHeader from "../components/PageHeader"
import EpisodeBlock from "../components/EpisodeBlock"
import Footer from "../components/Footer"
import "./pages.css"

const EpisodesPage = ({ data }) => (
  <div className="page">
    <SEO title="Ladybug Podcast" />
    <PageHeader />

    <main>
      <div className="page-banner">
        <h1>Episodes</h1>
      </div>
      {data.allMarkdownRemark.edges.map(post => {
        return (
          <EpisodeBlock episodeInfo={post} key={post.node.frontmatter.path} />
        )
      })}
    </main>
    <Footer />
  </div>
)

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
          }
        }
      }
    }
  }
`

export default EpisodesPage
