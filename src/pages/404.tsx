import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'

const NotFoundPage = () => (
    <Layout>
        <SEO title="404: Not Found" />
        <div className="page-error page-error-404">
            <h1>404: Not Found</h1>
            <p>You just hit a route that doesn&#39;t exist... the sadness.</p>
        </div>
    </Layout>
)

export default NotFoundPage