import { faChevronRight, faTimes } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import React, { MouseEventHandler, useState } from 'react'
import { Button, Col, Form, Modal, Nav, Row, Tab } from 'react-bootstrap'
import { PartnerContent } from '../components/partner'
import * as yup from 'yup'

import ImgStore from './../images/img-store.svg'
import ImgPartnerCafe from './../images/img-partner-cafe.jpg'
import ImgPartnerOutlet from './../images/img-partner-outlet.jpg'
import ImgPartnerBooth from './../images/img-partner-booth.jpg'
import ImgPartnerCountainer from './../images/img-partner-countainer.jpg'
import Image from '../components/img'
import { Formik, FormikHelpers, FormikValues } from 'formik'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

enum PartnerConcept {
    Cafe = 1,
    Outlet = 2,
    Booth = 3,
    Countainer = 4
}

const glekPackage = [
    "Cafe Concept",
    "Outlet Concept",
    "Booth Concept",
    "Countainer Concept"
]

const packageList = glekPackage.map( (item, index) => 
    <option value={item} key={index}>{item}</option>
)

interface ContactFormProps {
    onCancelClick?: MouseEventHandler<HTMLElement> | void,
    onSubmitClick: (values: FormikValues, formikBag: FormikHelpers<FormikValues>) => void | Promise<any>,
    isDisabled?: boolean
}

const formSchema = yup.object({
    name: yup.string().required("Harap isikan nama Anda"),
    email: yup.string().required("Harap isikan email Anda"),
    phone: yup.string().required("Harap isikan nomor telepon Anda"),
    description: yup.string().required("Harap isikan minimal sedikit deskripsi"),
    package: yup.string().required("Harap pilih paket yang ingin dibicarakan")
})

const ContactForm = ({ onCancelClick, onSubmitClick, isDisabled }: ContactFormProps) => (
    <Formik validationSchema={formSchema}
        initialValues={{}}
        onSubmit={onSubmitClick}>
        {
            ({
                handleSubmit,
                handleChange,
                handleBlur,
                values,
                touched,
                isValid,
                errors
            }) => (
                <Form noValidate onSubmit={handleSubmit}>
                    <Form.Group controlId="name">
                        <Form.Label>Nama Lengkap</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="Nama lengkap Anda"
                            value={values.name}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={ touched.name && errors.name }
                            required
                            readOnly={isDisabled} />
                        <Form.Control.Feedback type="invalid">
                            {errors.name}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="email">
                        <Form.Label>Email</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="nama@domain.com"
                            value={values.email}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={ touched.email && errors.email }
                            required
                            readOnly={isDisabled} />
                        <Form.Control.Feedback type="invalid">
                            {errors.email}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="phone">
                        <Form.Label>No. Telepon</Form.Label>
                        <Form.Control
                            type="text"
                            placeholder="08XX-XXXX-XXXX"
                            value={values.phone}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={ touched.phone && errors.phone }
                            required
                            readOnly={isDisabled} />
                        <Form.Control.Feedback type="invalid">
                            {errors.phone}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="description">
                        <Form.Label>Deskripsi</Form.Label>
                        <Form.Control
                            as="textarea"
                            placeholder="Deskripsi"
                            value={values.description}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={ touched.description && errors.description }
                            required
                            readOnly={isDisabled} />
                        <Form.Control.Feedback type="invalid">
                            {errors.description}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <Form.Group controlId="package">
                        <Form.Label>Paket</Form.Label>
                        <Form.Control as="select"
                            value={values.package}
                            onChange={handleChange}
                            onBlur={handleBlur}
                            isInvalid={ touched.package && errors.package }
                            required
                            readOnly={isDisabled}>
                            <option value="">Pilih paket</option>
                            {packageList}
                        </Form.Control>
                        <Form.Control.Feedback type="invalid">
                            {errors.package}
                        </Form.Control.Feedback>
                    </Form.Group>
                    <div className="text-right mt-4">
                        <Button variant="outline-primary" onClick={onCancelClick} className="mr-3">Batal</Button>
                        <Button variant="primary" type="submit">Kirim</Button>
                    </div>
                </Form>
            )
        }
    </Formik>
)

const SectionPartner = () => {
    const [show, setShow] = useState(false)
    const [concept, setConcept] = useState<PartnerConcept | undefined>(undefined)

    const handleClose = () => {
        setShow(false);
        setConcept(undefined)
    }
    const handleModal = ( c: PartnerConcept ) => {
        setConcept(c)
        setShow(true)
    }

    var isDisabled = false;
    const sendContactForm = ( values: FormikValues, formikBag: FormikHelpers<FormikValues>) => {
        const data = new FormData();
        for( var key in values ) {
            data.append( key, values[key] )
        }
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://formspree.io/f/mdoppnnw");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
            isDisabled = true
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            isDisabled = true
            if (xhr.readyState !== XMLHttpRequest.DONE) return;
            if (xhr.status === 200) {
                formikBag.resetForm({
                    values: {
                        name: '',
                        email: '',
                        subject: '',
                        message: ''
                    }
                })
                MySwal.fire({
                    title: "Berhasil!",
                    icon: "success",
                    html: '<p class="typo-gray-label">Pesan Anda berhasil dikirim!</p>'
                })
                // this.setState({ status: "SUCCESS" });
                // console.log("SUCCESS")
                isDisabled = false
                handleClose()
            } else {
                MySwal.fire({
                    title: "Gagal",
                    icon: "error",
                    html: '<p class="typo-gray-label">Sepertinya ada masalah ketika mengirim pesan Anda, silahkan coba kembali.</p>',
                    showCancelButton: true,
                    confirmButtonText: `Coba Lagi`,
                    cancelButtonText: `Batal`
                }).then( (result) => {
                    if( result.isConfirmed ) {
                        sendContactForm( values, formikBag )
                    }
                })
                // this.setState({ status: "ERROR" });
                // console.log("ERROR")
                isDisabled = false
                handleClose()
            }
        }
        xhr.send(data);
    }

    return <section id="section-partner" className="section">
        <div className="section-element">
            <div className="element-1">
                <Image src="el-partner-01.png" />
            </div>
        </div>
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
                                        image={ImgPartnerCafe}
                                        onClick={() => handleModal(PartnerConcept.Cafe)} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="outlet">
                                    <PartnerContent
                                        title="Outlet Concept"
                                        list={[ "Booth", "Peralatan Komplit", "Bahan Baku", "Seragam", "Marketing Medsos" ]}
                                        image={ImgPartnerOutlet} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="booth">
                                    <PartnerContent
                                        title="Booth Concept"
                                        list={[ "Booth", "Peralatan Komplit", "Bahan Baku", "Seragam", "Marketing Medsos" ]}
                                        image={ImgPartnerBooth} />
                                </Tab.Pane>
                                <Tab.Pane eventKey="countainer">
                                    <PartnerContent
                                        title="Countainer Concept"
                                        list={[ "Booth", "Peralatan Komplit", "Bahan Baku", "Seragam", "Marketing Medsos" ]}
                                        image={ImgPartnerCountainer} />
                                </Tab.Pane>
                            </Tab.Content>
                        </Col>
                    </Row>
                </Tab.Container>
            </div>
        </div>
        <Modal show={show} onHide={handleClose} dialogClassName="modal-70w modal-custom">
            <Modal.Body>
                <Row noGutters className="align-items-stretch">
                    <Col md={5}>
                        <div className="partner-img"></div>
                    </Col>
                    <Col md={7}>
                        <div className="partner-modal">
                            <a href="#" onClick={(e) => {e.preventDefault();handleClose()}} className="partner-modal__close">
                                <FontAwesomeIcon icon={faTimes} />
                            </a>
                            <div className="partner-modal__container">
                                <h5 className="title typo-text-lg-bold typo-gray-body">Lebih Lanjut Tentang Kemitraan</h5> 
                                <ContactForm onCancelClick={handleClose} onSubmitClick={sendContactForm} />
                            </div>
                        </div>
                    </Col>
                </Row>
            </Modal.Body>
        </Modal>
    </section>
}

export default SectionPartner