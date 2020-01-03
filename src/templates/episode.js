import React from "react"
import { Link, graphql } from "gatsby"
import PageHeader from "../components/PageHeader"
import Footer from "../components/Footer"
import LatestEpisode from "../components/LatestEpisode"

export default function Template({ data }) {
  const {
    title,
    description,
    formattedDate,
    episode,
    length,
    path,
  } = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark

  return (
    <div>
      <PageHeader />
      <main style={{ margin: "0" }}>
        <LatestEpisode
          title={title}
          description={description}
          formattedDate={formattedDate}
          episode={episode}
          length={length}
          path={path}
          isEpisodeHeader={true}
        />
        <Link to="/episodes">
          <button className="button button-border">Back to episodes</button>
        </Link>
        <p
          dangerouslySetInnerHTML={{
            __html: html,
          }}
        />
      </main>
      <Footer />
    </div>
  )
}

export const postQuery = graphql`
  query BlogPostByPath($path: String!) {
    markdownRemark(frontmatter: { path: { eq: $path } }) {
      html
      frontmatter {
        path
        title
        formattedDate
        episode
        length
        description
      }
    }
  }
`
