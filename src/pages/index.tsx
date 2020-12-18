import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from '../components/layout'
import SEO from "../components/seo"
import SectionJumbotron from "../sections/jumbotron"
import SectionAbout from "../sections/about"
import SectionVisionMision from "../sections/vision"
import SectionProduct from "../sections/product"
import SectionPartner from "../sections/partner"
import { SectionSemangat } from "../sections/semangat"

const IndexPage: React.FC = () => (
  <Layout invertButton={true}>
    <SEO title="Halaman Utama" />
    <SectionJumbotron />
    <SectionAbout />
    <SectionVisionMision />
    <SectionProduct />
    <SectionPartner />
    <SectionSemangat />
  </Layout>
)

export default IndexPage