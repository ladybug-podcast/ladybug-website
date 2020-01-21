import React from "react"
import { graphql } from "gatsby"
import Img from "gatsby-image"
import SEO from "../components/seo"
import PageHeader from "../components/PageHeader"
import Footer from "../components/Footer"
import "./pages.css"

const LINK_ATOMIC_HABITS =
  "https://www.goodreads.com/book/show/40121378-atomic-habits"
const LINK_INVISIBLE_WOMAN =
  "https://www.goodreads.com/book/show/41104077-invisible-women"
const LINK_IT_DOESNT_HAVE_TO_BE_CRAZY_AT_WORK =
  "https://www.goodreads.com/en/book/show/38900866-it-doesn-t-have-to-be-crazy-at-work"

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
          <a
            href={LINK_ATOMIC_HABITS}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img fixed={data.atomicHabits.childImageSharp.fixed} />
          </a>
          <a
            href={LINK_ATOMIC_HABITS}
            className="button button-border"
            target="_blank"
            rel="noopener noreferrer"
          >
            Details
          </a>
        </div>
        <div className="book">
          <h1>February</h1>
          <a
            href={LINK_INVISIBLE_WOMAN}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img fixed={data.invisibleWomen.childImageSharp.fixed} />
          </a>
          <a
            href={LINK_INVISIBLE_WOMAN}
            className="button button-border"
            target="_blank"
            rel="noopener noreferrer"
          >
            Details
          </a>
        </div>
        <div className="book">
          <h1>March</h1>
          <a
            href={LINK_IT_DOESNT_HAVE_TO_BE_CRAZY_AT_WORK}
            target="_blank"
            rel="noopener noreferrer"
          >
            <Img
              fixed={data.itDoesntHaveToBeCrazyAtWork.childImageSharp.fixed}
            />
          </a>
          <a
            href={LINK_IT_DOESNT_HAVE_TO_BE_CRAZY_AT_WORK}
            className="button button-border"
            target="_blank"
            rel="noopener noreferrer"
          >
            Details
          </a>
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
