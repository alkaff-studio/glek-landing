import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React from 'react'
import { Col, Nav, Row, Tab } from 'react-bootstrap'
import { PartnerContent } from '../components/partner'

import ImgStore from './../images/img-store.svg'
import BgSectionVm from './../images/bg-section-vm.png'

const SectionPartner = () => (
    <section id="section-partner" className="section">
        <div className="container-fluid px-0">
            <div className="section-title text-center">
                <h5><span className="badge badge-primary">Glek</span></h5>
                <h4 className="typo-display-md-bold typo-gray-body">Kemitraan Franchise</h4>
            </div>
            <div className="section-content">
                <Tab.Container id="tab-partner" defaultActiveKey="cafe">
                    <Row noGutters={true}>
                        <Col md={6}>
                            <Nav variant="pills" className="flex-column nav-partners">
                                <Nav.Item>
                                    <Nav.Link eventKey="cafe">
                                        <div className="content">
                                            <i className="icon">
                                                <ImgStore />
                                            </i>
                                            <span>Cafe Concept</span>
                                        </div>
                                        <div className="arrow">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </div>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="outlet">
                                        <div className="content">
                                            <i className="icon">
                                                <ImgStore />
                                            </i>
                                            <span>Outlet Concept</span>
                                        </div>
                                        <div className="arrow">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </div>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="booth">
                                        <div className="content">
                                            <i className="icon">
                                                <ImgStore />
                                            </i>
                                            <span>Booth Concept</span>
                                        </div>
                                        <div className="arrow">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </div>
                                    </Nav.Link>
                                </Nav.Item>
                                <Nav.Item>
                                    <Nav.Link eventKey="countainer">
                                        <div className="content">
                                            <i className="icon">
                                                <ImgStore />
                                            </i>
                                            <span>Countainer Concept</span>
                                        </div>
                                        <div className="arrow">
                                            <FontAwesomeIcon icon={faChevronRight} />
                                        </div>
                                    </Nav.Link>
                                </Nav.Item>
                            </Nav>
                        </Col>
                        <Col md={6}>
                            <Tab.Content className="tab-content-partner">
                                <Tab.Pane eventKey="cafe">
                                    <PartnerContent
                                        title="Cafe Concept"
                                        list={[ "Booth", "Peralatan Komplit", "Bahan Baku", "Seragam", "Marketing Medsos" ]}
                                        image={BgSectionVm} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="outlet">
                                    <PartnerContent
                                        title="Outlet Concept"
                                        list={[ "Booth", "Peralatan Komplit", "Bahan Baku", "Seragam", "Marketing Medsos" ]} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="booth">
                                    <PartnerContent
                                        title="Booth Concept"
                                        list={[ "Booth", "Peralatan Komplit", "Bahan Baku", "Seragam", "Marketing Medsos" ]} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="countainer">
                                    <PartnerContent
                                        title="Countainer Concept"
                                        list={[ "Booth", "Peralatan Komplit", "Bahan Baku", "Seragam", "Marketing Medsos" ]} />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </div>
    </section>
)

export default SectionPartner