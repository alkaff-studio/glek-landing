import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from '../components/layout'
import SEO from "../components/seo"
import SectionJumbotron from "../sections/jumbotron"
import SectionAbout from "../sections/about"

const IndexPage: React.FC = () => (
  <Layout invertButton={true}>
    <SEO title="Halaman Utama" />
    <SectionJumbotron />
    <SectionAbout />
  </Layout>
)

export default IndexPage