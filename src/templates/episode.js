import React from "react"
import { Link, graphql } from "gatsby"
import PageHeader from "../components/PageHeader"
import Footer from "../components/Footer"
import Player from "../components/Player"
import Helmet from "react-helmet"

import SEO from '../components/seo'

function format_timerequired(length) {
  const length_arr = length.split(":");
  const time_required = ('PT'+(length_arr[0] === '00' ? '' : parseInt(length_arr[0])+'H')+(length_arr[1] === '00' ? '' : parseInt(length_arr[1])+'M'))
  return time_required;
}

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

  const episodeInfo = {
    title: title,
    description: description,
  }

  const schema = {
    "@context": "http://schema.org/",
    "@type": "PodcastEpisode",
    "url": "https://ladybug.dev"+path,
    "name": title,
    "datePublished": formattedDate,
    "timeRequired": format_timerequired(length),
    "description": description,
    "associatedMedia": {
      "@type": "MediaObject",
      "contentUrl": audio
    },
    "partOfSeries": {
      "@type": "PodcastSeries",
      "name": "Ladybug Podcast",
      "url": "https://ladybug.dev/"
    }
  };

  const JSONschema = JSON.stringify(schema)

  return (
    <div>
      <SEO episodeInfo={episodeInfo} />
      <Helmet>
        <script type="application/ld+json">
          {JSONschema}
        </script>
      </Helmet>
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
