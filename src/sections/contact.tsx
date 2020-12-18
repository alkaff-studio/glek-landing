import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import Iframe from 'react-iframe';

const parse = require('html-react-parser');

interface SectionContactProps {
    address: string,
    email: string,
    phone: string
}

export const SectionContact = ({ address, email, phone }: SectionContactProps ) => {
    return (
        <section id="section-contact" className="section">
            <div className="container">
                <Row>
                    <Col md={6}>
                        <div className="section-content section-info">
                            <h4 className="typo-display-md-bold typo-gray-body">Get In Touch</h4>
                            <ul className="list-unstyled list-contact">
                                <li>
                                    <i className="icon">
                                        <FontAwesomeIcon icon={faMapMarkerAlt} />
                                    </i>
                                    <span>{ parse(address) }</span>
                                </li>
                                <li>
                                    <i className="icon">
                                        <FontAwesomeIcon icon={faEnvelope} />
                                    </i>
                                    <span>{ parse(email) }</span>
                                </li>
                                <li>
                                    <i className="icon">
                                        <FontAwesomeIcon icon={faPhone} />
                                    </i>
                                    <span>{ parse(phone) }</span>
                                </li>
                            </ul>
                            <div className="map-container">
                                <Iframe 
                                    src="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7931.101726740122!2d106.825027!3d-6.322569!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xad7009cfa53be7dd!2sWaralaba%20Anak%20Bangsa!5e0!3m2!1sid!2sid!4v1608301079990!5m2!1sid!2sid"
                                    width="100%"
                                    height="450"
                                    frameBorder={0}></Iframe>
                            </div>
                        </div>
                    </Col>
                    <Col md={6}>
                        <div className="section-content section-form">
                            <h5 className="typo-text-lg-bold typo-primary-dark">Kirimkan Pesan</h5>
                            <Form>
                                <Form.Group controlId="name">
                                    <Form.Label>Nama Lengkap</Form.Label>
                                    <Form.Control type="text" placeholder="nama anda" />
                                </Form.Group>
                                <Form.Group controlId="email">
                                    <Form.Label>Alamat Email</Form.Label>
                                    <Form.Control type="email" placeholder="nama@domain.com" />
                                </Form.Group>
                                <Form.Group controlId="subject">
                                    <Form.Label>Judul</Form.Label>
                                    <Form.Control type="text" placeholder="judul pesan" />
                                </Form.Group>
                                <Form.Group controlId="message">
                                    <Form.Label>Pesan</Form.Label>
                                    <Form.Control as="textarea" placeholder="isi pesan" rows={3} />
                                </Form.Group>
                                <div className="text-right">
                                    <Button variant="primary" size="sm" type="submit">Kirim Pesan</Button>
                                </div>
                            </Form>
                        </div>
                    </Col>
                </Row>
            </div>
        </section>
    )
}