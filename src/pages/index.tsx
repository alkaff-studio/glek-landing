import React, { createRef } from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from '../components/layout'
import SEO from "../components/seo"
import SectionJumbotron from "../sections/jumbotron"
import SectionAbout from "../sections/about"
import SectionVisionMision from "../sections/vision"
import SectionProduct from "../sections/product"
import SectionPartner from "../sections/partner"
import { SectionSemangat } from "../sections/semangat"
import { SectionContact } from "../sections/contact"

class IndexPage extends React.Component {
  private contactRef = createRef<HTMLDivElement>()

  constructor(props:any) {
    super(props)
  }

  scrollToContact = () => {
    this.contactRef.current?.scrollIntoView()
  }

  render() {
    return <Layout invertButton={true} onButtonClicked={this.scrollToContact}>
    <SEO title="Halaman Utama" />
    <SectionJumbotron />
    <SectionAbout />
    <SectionVisionMision />
    {/* <SectionProduct /> */}
    <SectionPartner />
    <SectionSemangat />
    <SectionContact  ref={this.contactRef} address="Jln Kebagusan Raya No.102 Jagakarsa,<br />Jakarta Selatan" email="cs@glek.id" phone="+62 8577-9155-550" />
  </Layout>
  }
}

export default IndexPage