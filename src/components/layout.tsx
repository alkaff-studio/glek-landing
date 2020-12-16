import React from 'react'
import PropTypes from "prop-types"
import { graphql, useStaticQuery } from "gatsby"

import Header from "./header"
import Image from './img'
import SubscribeForm from './subscribe'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'

interface Props {
	children?: any,
	showButton?: boolean,
	invertButton?: boolean
}

const Layout = ({children, showButton, invertButton}:Props) => {
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
			<Header siteTitle={data.site.siteMetadata?.title || `Title`} />
			<main>{children}</main>
			<footer className="footer">
				<div className="container">
					<div className="footer-top">
						<div className="row justify-content-center">
							<div className="col-12 col-md-7">
								<h3 className="typo-display-sm mb-3">Berlangganan untuk mengetahui kabar terbaru dari kami</h3>
								<p className="typo-text-sm mx-3">Dengan berlangganan kamu akan mengetahui promo - promo menarik dari kami</p>
								<form action="#" className="mt-4">
									<div className="input-group">
										<input type="email" name="email" id="email" className="form-control" placeholder="Masukan email kamu..." />
										<div className="input-group-append">
											<button className="btn btn-light">Berlangganan</button>
										</div>
									</div>
								</form>
							</div>
						</div>
					</div>
					<div className="footer-bottom">
						<div className="row align-items-center">
							<div className="col-12 col-md-4">
								<div style={{ maxWidth: `95px` }}>
									<Image src="logo-inverted.png" />
								</div>
							</div>
							<div className="col-12 col-md-4 text-center">
								<p className="text-xs-bold copyright">Copyright &copy; PT. Waralaba Anak Bangsa</p>
							</div>
							<div className="col-12 col-md-4 text-right">
								<div className="row justify-content-end">
									<a href="https://instagram.com/glek.id" target="_blank" rel="noopener noreferrer" className="social-link">
										<FontAwesomeIcon icon={faInstagram} />
									</a>
									<a href="https://www.youtube.com/channel/UCordp6yNRpf6gJ3pMQiYPcQ" target="_blank" rel="noopener noreferrer" className="social-link">
										<FontAwesomeIcon icon={faYoutube} />
									</a>
								</div>
							</div>
						</div>
					</div>
				</div>
			</footer>
		</>
	)
}

Layout.propTypes = {
	children: PropTypes.node.isRequired,
}

export default Layout