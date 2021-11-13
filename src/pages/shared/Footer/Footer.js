import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Footer.css'

const Footer = () => {
    return (
        <div className="footer bg-warning">
            <Container>
                <Row className="w-100 mt-5 pt-5 ">
                    <Col md={4}>
                        <h4 className="mx-3">Get Set Go</h4>
                        <ul>

                            <li>About Us</li>
                            <li>Careers</li>
                            <li>FAQ</li>
                        </ul>

                    </Col>
                    <Col md={4}>
                        <h4 className="mx-3">Services</h4>
                        <ul>

                            <li>Wooden Toys</li>
                            <li>Wooden Colorful Toys</li>
                            <li>Wooden Toys for boys</li>
                            <li>Wooden Toys for girs</li>
                        </ul>
                    </Col>
                    <Col md={4}>
                        <h4 className="mx-3">Get in touch</h4>
                        <ul>

                            <li><i class="fab fa-facebook"></i></li>
                            <li><i class="fab fa-google-plus-g"></i></li>
                            <li><i class="fab fa-linkedin"></i></li>
                        </ul>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Footer;