import React from "react"
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

export default IndexPage
