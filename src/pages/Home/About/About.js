import React from 'react';
import './About.css'
import { Col, Container, Image, Row } from 'react-bootstrap';

const About = () => {
    return (
        <>
            <div className="about-container">
                <Container>
                    <Row className="w-100 py-5 my-5">
                        <Col sm={5}>
                            <Image src="https://images.unsplash.com/photo-1560859253-341f42b25e20?ixid=MnwxMjA3fDB8MHxzZWFyY2h8MXx8d29vZCUyMHRveXN8ZW58MHx8MHx8&ixlib=rb-1.2.1&w=1000&q=80"
                                rounded className="w-100 about-img" />
                        </Col>
                        <Col sm={7} className="about-heading px-5 py-5 my-4">
                            <h1 className="text-warning">About Us</h1>
                            <h5 className="text-warning">Unlike mass-produced plastic toys, wooden toys are often produced using sustainably sourced raw materials and handcrafted by talented craftsmen. Since wooden toys use natural raw materials, they offer children a personal connection to the natural world as well. Wooden toys offer excellent educational value.</h5>

                        </Col>
                    </Row>
                </Container>
            </div>
        </>
    );
};

export default About;