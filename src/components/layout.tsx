import React, { MouseEventHandler } from 'react'
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"

import Header from "./header"
import Footer from './footer'

interface Props {
	children?: any,
	showButton?: boolean,
	invertButton?: boolean,
	onButtonClicked?: MouseEventHandler<React.MouseEvent<HTMLButtonElement, MouseEvent>>
}

const Layout = ({children, showButton, invertButton, onButtonClicked}:Props) => {
	const data = useStaticQuery(graphql`
		query SiteTitleQuery {
			site {
				siteMetadata {
					title
				}
			}
		}
	`)

	return (
		<>
			<Header siteTitle={data.site.siteMetadata?.title || `Title`} buttonWhite={invertButton} onButtonClicked={onButtonClicked} />
			<main>{children}</main>
			<Footer />
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout