import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from '../components/layout'
import SEO from "../components/seo"
import SectionJumbotron from "../sections/jumbotron"

const IndexPage: React.FC = () => (
  <Layout invertButton={true}>
    <SEO title="Halaman Utama" />
    <SectionJumbotron />
  </Layout>
)

export default IndexPage