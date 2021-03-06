import React from 'react'
import Image from './img'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faInstagram, faYoutube } from '@fortawesome/free-brands-svg-icons'
import MailchimpSubscribe from 'react-mailchimp-subscribe'
import { Alert } from 'react-bootstrap'

// Subscribe Form
const SubscribeForm = ({ status, message, onValidated }) => {
    let email;
    const submit = () =>
        email &&
        email.value.indexOf("@") > -1 &&
        onValidated({
            EMAIL: email.value
        });

    return (
        <div className="mt-4">
            <div className="input-group">
                <input type="email" name="email" id="email" className="form-control" placeholder="Masukan email kamu..." ref={ node => (email = node)} />
                <div className="input-group-append">
                    <button className="btn btn-light" onClick={submit}>Berlangganan</button>
                </div>
            </div>
            <div className="mt-3">
                {status === "sending" && <Alert variant="light">sending...</Alert>}
                {status === "error" && <Alert variant="danger"><span dangerouslySetInnerHTML={{__html: message}}></span></Alert>}
                {status === "success" && <Alert variant="secondary">Subscribed !</Alert>}
            </div>
        </div>
    )
}

const Footer = () => {
    return (
        <footer className="footer">
            <div className="container">
                <div className="footer-top">
                    <div className="row justify-content-center">
                        <div className="col-12 col-md-7">
                            <h3 className="typo-display-sm mb-3">Berlangganan untuk mengetahui kabar terbaru dari kami</h3>
                            <p className="typo-text-sm mx-3">Dengan berlangganan kamu akan mengetahui promo - promo menarik dari kami</p>
                            <MailchimpSubscribe url="https://glek.us7.list-manage.com/subscribe/post?u=776f1b32ed04365cfb813fb2a&amp;id=8aef195cf9"
                                render={({ subscribe, status, message }) => (
                                    <SubscribeForm
                                        status={status}
                                        message={message}
                                        onValidated={formData => subscribe(formData)}
                                    />
                                )} />
                        </div>
                    </div>
                </div>
                <div className="footer-bottom">
                    <div className="row align-items-center">
                        <div className="col-12 col-md-4">
                            <div className="logo-wrapper mx-auto mx-md-0">
                                <Image src="logo-inverted.png" />
                            </div>
                        </div>
                        <div className="col-12 col-md-4 text-right order-md-last">
                            <div className="row justify-content-center justify-content-md-end">
                                <div className="col-auto">
                                    <a href="https://instagram.com/glek.id" target="_blank" rel="noopener noreferrer" className="social-link">
                                        <FontAwesomeIcon icon={faInstagram} />
                                    </a>
                                </div>
                                <div className="col-auto">
                                    <a href="https://www.youtube.com/channel/UCordp6yNRpf6gJ3pMQiYPcQ" target="_blank" rel="noopener noreferrer" className="social-link">
                                        <FontAwesomeIcon icon={faYoutube} />
                                    </a>
                                </div>
                            </div>
                        </div>
                        <div className="col-12 order-md-2 col-md-4 text-center">
                            <p className="text-xs-bold copyright">Copyright &copy; PT. Waralaba Anak Bangsa</p>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}

export default Footer