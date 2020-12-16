import React from "react"
import { PageProps, Link, graphql } from "gatsby"

import Layout from '../components/layout'
import SEO from "../components/seo"

const IndexPage: React.FC = () => (
  <Layout>
    <SEO title="Halaman Utama" />
    <h1>Hi people</h1>
    <p>Welcome to your new Gatsby site.</p>
    <p>Now go build something great.</p>
    <button className="btn btn-primary btn-sm">Primary</button>
    <button className="btn btn-secondary btn-sm">Secondary</button>
    <button className="btn btn-light btn-sm">Light</button>
    <button className="btn btn-outline-primary btn-sm">Primary</button>
    <button className="btn btn-outline-secondary btn-sm">Secondary</button>
    <button className="btn btn-outline-light btn-sm">Light</button>
    <br/><br/>
    <button className="btn btn-primary">Primary</button>
    <button className="btn btn-secondary">Secondary</button>
    <button className="btn btn-light">Light</button>
    <button className="btn btn-outline-primary">Primary</button>
    <button className="btn btn-outline-secondary">Secondary</button>
    <button className="btn btn-outline-light">Light</button>
    <br/><br/>
    <button className="btn btn-primary btn-lg">Primary</button>
    <button className="btn btn-secondary btn-lg">Secondary</button>
    <button className="btn btn-light btn-lg">Light</button>
    <button className="btn btn-outline-primary btn-lg">Primary</button>
    <button className="btn btn-outline-secondary btn-lg">Secondary</button>
    <button className="btn btn-outline-light btn-lg">Light</button>
    <br/><br/>
    <span className="badge badge-primary">Primary</span>
    <h5>
      <span className="badge badge-primary">Primary</span>
    </h5>
    <label htmlFor="exampleInputEmail1" className="col-form-label">Email address</label>
    <input type="text" className="form-control form-control-sm" placeholder="Nama Lengkap"/>
    <input type="text" className="form-control" placeholder="Nama Lengkap"/>
    <input type="text" className="form-control form-control-lg" placeholder="Nama Lengkap"/>
    <a href="#">Watch video</a>
    <p className="text-primary-dark text-display-lg">Text Color Primary</p>
  </Layout>
)

export default IndexPage