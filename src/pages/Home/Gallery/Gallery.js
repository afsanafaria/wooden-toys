import React from 'react';
import { Col, Row } from 'react-bootstrap';
import './Gallery.css'
const Gallery = () => {
    return (
        <div className="gallery">
            <h1 className="my-5 text-center heading text-warning">Gallery</h1>

            <Row className="w-100 mx-auto">
                <Col md={6}>
                    <img className="w-100"
                        src="https://thumbs.dreamstime.com/b/creative-eco-wooden-toys-baby-und-kids-made-organic-wood-childrens-educational-friendly-shop-store-car-abstract-playground-159905795.jpg"

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
        </div>
    );
};

export default Gallery;