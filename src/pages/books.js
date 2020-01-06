import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import PageHeader from "../components/PageHeader"
import Footer from "../components/Footer"
import "./pages.css"

const BooksPage = ({ data }) => (
  <div className="page">
    <SEO title="Ladybug Podcast" />
    <PageHeader />

    <main style={{ marginBottom: "40px" }}>
      <div className="page-banner">
        <h1>Book Club</h1>
      </div>
      <p className="banner-margin">
        We've started a book club! Each month we'll be reading a popular
        non-fiction book and bringing you an extra episode to discuss our
        thoughts.
      </p>
      <p>
        If you'd like to follow along, feel free to join our{" "}
        <a
          href="https://www.goodreads.com/group/show/1056127-ladybug-podcast-book-club"
          target="_blank"
          rel="noopener noreferrer"
        >
          Goodreads group
        </a>
        .
      </p>
      <div className="bookshelf">
        <div className="book">
          <h1>January</h1>
          <Img fixed={data.atomicHabits.childImageSharp.fixed} />
        </div>
        <div className="book">
          <h1>February</h1>
          <Img fixed={data.invisibleWomen.childImageSharp.fixed} />
        </div>
        <div className="book">
          <h1>March</h1>
          <Img fixed={data.itDoesntHaveToBeCrazyAtWork.childImageSharp.fixed} />
        </div>
      </div>
    </main>
    <Footer />
  </div>
)

export const AllBooksQuery = graphql`
  {
    atomicHabits: file(relativePath: { eq: "books/habits.jpg" }) {
      childImageSharp {
        fixed(width: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    invisibleWomen: file(relativePath: { eq: "books/invisible-women.jpg" }) {
      childImageSharp {
        fixed(width: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
    itDoesntHaveToBeCrazyAtWork: file(
      relativePath: { eq: "books/it-doesnt-have-to-be-crazy-at-work.jpg" }
    ) {
      childImageSharp {
        fixed(width: 250) {
          ...GatsbyImageSharpFixed
        }
      }
    }
  }
`

export default BooksPage
