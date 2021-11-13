import React from 'react';
import { Card, Col, Image, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Product = (props) => {
    const { _id, productImg, productPrice, productName, description } = props.product;
    return (
        <div>
            <Col>
                <Card>
                    <Image variant="top" height="200" src={productImg} />
                    <Card.Body>
                        <Card.Title>{productName}
                            <h6 className="my-3">Price: {productPrice}$</h6>
                        </Card.Title>
                        <Card.Text>
                            {description}
                        </Card.Text>
                        <Link to={`/purchase/${_id}`}><Button variant="warning" className="text-white">Purchase</Button></Link>
                    </Card.Body>
                </Card>
            </Col>
        </div>
    );
};

export default Product;