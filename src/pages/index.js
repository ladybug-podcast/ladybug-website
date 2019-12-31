import React from "react"
import SEO from "../components/seo"
import HomeHeader from "../components/HomeHeader"
import RecentEpisode from "../components/RecentEpisode"
import Footer from "../components/Footer"
import "./pages.css"

const IndexPage = () => (
  <div>
    <SEO title="Ladybug Podcast" />
    <HomeHeader />
    <main className="home-main">
      <h2>Recent Episodes</h2>
      <RecentEpisode />
      <RecentEpisode />
      <RecentEpisode />
    </main>
    <Footer />
  </div>
)

export default IndexPage
