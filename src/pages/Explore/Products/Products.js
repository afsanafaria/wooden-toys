import React, { useEffect, useState } from 'react';
import { Card, Col, Image, Container, Row, Button, Spinner } from 'react-bootstrap';
import { Link } from 'react-router-dom';

const Products = () => {
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('https://vast-castle-60665.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])

    if (products.length <= 0) {
        return <div className="loader text-warning"><Spinner className="" animation="border" /></div>
    }
    return (
        <div>
            <h1 className="text-center text-warning my-3 pb-4">Products</h1>
            <Container>
                <Row xs={1} md={2} className="g-4 w-100 mx-auto">
                    {products.slice(0, 6).map(product => (
                        <div>
                            <Col>
                                <Card>
                                    <Image variant="top" height="200" src={product.productImg} />
                                    <Card.Body>
                                        <Card.Title>{product.productName}
                                            <h6 className="my-3">Price: {product.productPrice}$</h6>
                                        </Card.Title>
                                        <Card.Text>
                                            {product.description.slice(0, 120)}......

                                        </Card.Text>
                                        <Link to={`/purchase/${product._id}`}><Button variant="warning" className="text-white">Purchase</Button></Link>
                                    </Card.Body>
                                </Card>
                            </Col>
                        </div>
                    ))}
                </Row>
            </Container>
        </div>
    );
};

export default Products;