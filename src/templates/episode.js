import React from "react"
import { Link, graphql } from "gatsby"
import PageHeader from "../components/PageHeader"
import Footer from "../components/Footer"

export default function Template({ data }) {
  const { title, description, date } = data.markdownRemark.frontmatter
  const { html } = data.markdownRemark
  console.log(data)
  return (
    <div>
      <PageHeader />
      <h1>{title}</h1>
      <p>{date}</p>
      <p>{description}</p>
      <div dangerouslySetInnerHTML={{ __html: html }} />
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
        date
      }
    }
  }
`
