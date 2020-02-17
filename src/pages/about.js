import React from "react"

import Layout from "../components/Layout"
import Header from "../components/Header"
import About from "../components/About"
import SEO from "../components/seo"

const AboutPage = () => (
  <Layout>
    <SEO title="About" />
    <Header />
    <About />
  </Layout>
)

export default AboutPage
