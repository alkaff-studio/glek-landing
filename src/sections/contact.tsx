import { faEnvelope, faMapMarkerAlt, faPhone } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { Formik, FormikHelpers, FormikValues } from 'formik';
import React from 'react'
import { Button, Col, Form, Row } from 'react-bootstrap'
import Iframe from 'react-iframe';
import * as yup from 'yup'
import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const parse = require('html-react-parser');
const MySwal = withReactContent(Swal)

interface SectionContactProps extends React.HTMLAttributes<HTMLElement>{
    address: string,
    email: string,
    phone: string,
}

const schema = yup.object({
    name: yup.string().required(),
    email: yup.string().email().required(),
    subject: yup.string().required(),
    message: yup.string()
})

export const SectionContentWrapper = React.forwardRef((props, ref) => {
    return <section id="section-contact" className="section" ref={ref}>
        {props.children}
    </section> 
})

export const SectionContact = React.forwardRef<HTMLDivElement, SectionContactProps>( (props, ref) => {

    var isDisabled = false

    const sendMail = (values: FormikValues, formikBag: FormikHelpers<FormikValues>) => {
        // ev.preventDefault();
        // const form = ev.target;
        const data = new FormData();
        for( var key in values ) {
            data.append( key, values[key] )
        }
        const xhr = new XMLHttpRequest();
        xhr.open("POST", "https://formspree.io/f/mayllwwl");
        xhr.setRequestHeader("Accept", "application/json");
        xhr.onreadystatechange = () => {
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
                    icon: "info",
                    html: '<p class="typo-gray-label">Pesan Anda berhasil dikirim!</p>'
                })
                // this.setState({ status: "SUCCESS" });
                // console.log("SUCCESS")
                isDisabled = false
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
                        sendMail( values, formikBag )
                    }
                })
                // this.setState({ status: "ERROR" });
                // console.log("ERROR")
                isDisabled = false
            }
        };
        xhr.send(data);
    }

    return <section id="section-contact" className="section" ref={ref}>
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
                            <span>{ parse(props.address) }</span>
                        </li>
                        <li>
                            <i className="icon">
                                <FontAwesomeIcon icon={faEnvelope} />
                            </i>
                            <span>{ parse(props.email) }</span>
                        </li>
                        <li>
                            <i className="icon">
                                <FontAwesomeIcon icon={faPhone} />
                            </i>
                            <span>{ parse(props.phone) }</span>
                        </li>
                    </ul>
                    <div className="map-container">
                        <Iframe
                            url="https://www.google.com/maps/embed?pb=!1m14!1m8!1m3!1d7931.101726740122!2d106.825027!3d-6.322569!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0xad7009cfa53be7dd!2sWaralaba%20Anak%20Bangsa!5e0!3m2!1sid!2sid!4v1608301079990!5m2!1sid!2sid"
                            width="100%"
                            height="450"
                            frameBorder={0}></Iframe>
                    </div>
                </div>
            </Col>
            <Col md={6}>
                <div className="section-content section-form">
                    <h5 className="typo-text-lg-bold typo-primary-dark">Kirimkan Pesan</h5>
                    <Formik validationSchema={schema}
                        onSubmit={sendMail}
                        initialValues={{}}>
                        {({
                            handleSubmit,
                            handleChange,
                            handleBlur,
                            values,
                            touched,
                            isValid,
                            errors,
                        }) => (
                            <Form noValidate action="https://formspree.io/f/mayllwwl" method="POST" onSubmit={handleSubmit}>
                                <Form.Group controlId="name">
                                    <Form.Label>Nama Lengkap</Form.Label>
                                    <Form.Control type="text" 
                                        placeholder="nama anda" 
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
                                    <Form.Label>Alamat Email</Form.Label>
                                    <Form.Control type="email"
                                        placeholder="nama@domain.com"
                                        value={values.email}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={touched.email && errors.email}
                                        required
                                        readOnly={isDisabled} />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.email}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="subject">
                                    <Form.Label>Judul</Form.Label>
                                    <Form.Control type="text" placeholder="judul pesan"
                                        value={values.subject}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        isInvalid={touched.subject && errors.subject}
                                        required
                                        readOnly={isDisabled} />
                                    <Form.Control.Feedback type="invalid">
                                        {errors.subject}
                                    </Form.Control.Feedback>
                                </Form.Group>
                                <Form.Group controlId="message">
                                    <Form.Label>Pesan</Form.Label>
                                    <Form.Control as="textarea" placeholder="isi pesan" rows={3}
                                        value={values.message}
                                        onChange={handleChange}
                                        onBlur={handleBlur}
                                        required
                                        readOnly={isDisabled} />
                                </Form.Group>
                                <div className="text-right">
                                    <Button variant="primary" size="sm" type="submit" disabled={isDisabled}>Kirim Pesan</Button>
                                </div>
                            </Form>
                        )}
                    </Formik>
                </div>
            </Col>
        </Row>
    </div>
</section>
})