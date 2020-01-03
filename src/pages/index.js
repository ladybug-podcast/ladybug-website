import React from "react"
import { graphql, Link } from "gatsby"
import SEO from "../components/seo"
import HomeHeader from "../components/HomeHeader"
import Episode from "../components/Episode"
import Footer from "../components/Footer"
import "./pages.css"

const IndexPage = () => (
  <div>
    <SEO title="Ladybug Podcast" />
    <HomeHeader />
    <main>
      <h2>Recent Episodes</h2>
      <Episode />
      <Episode />
      <Episode />
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

export default IndexPage
