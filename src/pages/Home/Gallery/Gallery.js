import React from 'react';
import { Col, Container, Row } from 'react-bootstrap';
import './Gallery.css'
const Gallery = () => {
    return (
        <div className="gallery">
            <h1 className="my-5 py-2 text-center heading text-warning">Gallery</h1>
            <Container>
                <Row className="w-100 mx-auto">
                    <Col md={6}>
                        <img className="w-100"
                            src="https://kidslovewhat.com/wp-content/uploads/2019/08/wooden-toys-for-kids.jpg"

                            alt=""
                        />
                    </Col>
                    <Col md={6}>
                        <img className="w-100"
                            src="https://www.emeraldheights.com/wp-content/uploads/2018/12/DSC_9622.jpg"

                            alt=""
                        />
                    </Col>

                </Row>
            </Container>
        </div>
    );
};

export default Gallery;