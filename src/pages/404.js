import React from "react"
import { graphql } from 'gatsby';
import Img from "gatsby-image"
import SEO from "../components/seo"
import PageHeader from "../components/PageHeader"
import Footer from "../components/Footer"
import "./pages.css"

const NotFoundPage = () => (
  <div className="page">
    <SEO title="404: Page not found" />
    <PageHeader />
    <main>
      <div className="page-banner">
        <h1>404: Page not found</h1>
      </div>
    </main>
    <Footer />
  </div>
)

export default NotFoundPage
