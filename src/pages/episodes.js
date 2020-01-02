import React from "react"
import SEO from "../components/seo"
import PageHeader from "../components/PageHeader"
import Episode from "../components/Episode"
import Footer from "../components/Footer"
import "./pages.css"

const EpisodesPage = () => (
  <div className="page">
    <SEO title="Ladybug Podcast" />
    <PageHeader />
    <div className="page-banner">
      <h1>Episodes</h1>
    </div>
    <main>
      <Episode isPageHeader={false} />
    </main>
    <Footer />
  </div>
)

export default EpisodesPage
