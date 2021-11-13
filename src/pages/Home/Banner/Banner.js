import React from 'react';
import { Container } from 'react-bootstrap';
import './Banner.css'

const Banner = () => {
    return (
        <div className="banner d-flex  text-warning">
            <Container className="">
                <h1 className="home-heading lh-base pt-lg-5 pt-md-5 mt-md-5 mt-lg-5">Smart and Wooden Toys<br /> for Babies</h1>
                <h4 className="lh-base">A space curious, creative and inquistive mind <br /> that love to create and play</h4>
            </Container>
        </div>
    );
};

export default Banner;