import React from "react"
import { Link, graphql } from "gatsby"
import PageHeader from "../components/PageHeader"
import Footer from "../components/Footer"
import Player from "../components/Player"

export default function Template({ data }) {
  const {
    title,
    description,
    formattedDate,
    episode,
    length,
    path,
    audio,
  } = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark

  return (
    <div>
      <PageHeader />
      <main>
        <Player
          title={title}
          description={description}
          formattedDate={formattedDate}
          episode={episode}
          length={length}
          path={path}
          isEpisodeHeader={true}
          audio={audio}
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
        audio
      }
    }
  }
`
