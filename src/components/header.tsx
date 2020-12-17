import React, { MouseEventHandler } from "react"
import Image from "./img"

interface HeaderProp {
	siteTitle?: string,
	buttonWhite?: boolean
}

const Header = ({ siteTitle, buttonWhite = false }: HeaderProp) => {
	const buttonClass = buttonWhite ? 'btn-light' : 'btn-primary';
	const onButtonClick = (e:React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
		console.log("Button clicked!")
	}
	return (
		<header className="header">
			<div className="container">
				<div className="row justify-content-space-between">
					<div className="col">
						<div className="logo-wrapper">
							<Image src="logo.png" />
						</div>
					</div>
					<div className="col">
						<div className="text-right">
							<button className={ "btn " + buttonClass } onClick={onButtonClick}>Kontak Glek</button>
						</div>
					</div>
				</div>
			</div>
		</header>
	)
}

export default Header