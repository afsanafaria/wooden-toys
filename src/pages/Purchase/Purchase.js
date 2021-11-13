import React, { useEffect, useState } from 'react';
import { Card, Col, Container, FloatingLabel, Form, Image, Row, Button } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import useAuth from '../../hooks/useAuth';
import Header from '../shared/Header/Header';
import { useForm } from "react-hook-form";

const Purchase = () => {
    const { user } = useAuth()
    const { productId } = useParams();
    const [singleProduct, setSingleProduct] = useState([]);
    const { register, handleSubmit, reset } = useForm();

    useEffect(() => {
        fetch(`https://vast-castle-60665.herokuapp.com/products/${productId}`)
            .then(res => res.json())
            .then(data => setSingleProduct(data))
    }, [productId])

    const history = useHistory()

    const onSubmit = data => {
        fetch('https://vast-castle-60665.herokuapp.com/orders', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.insertedId) {
                    window.confirm("Is your information correct?")
                    reset();
                    history.push('/dashboard')
                }
            })
    };

    return (
        <div>
            <Header></Header>
            <Container >
                <Row className="w-100 my-5">
                    <Col md={6} >
                        <Card >
                            <Image variant="top" height="200" src={singleProduct.productImg} />
                            <Card.Body>
                                <Card.Title>{singleProduct.productName}
                                    <h6 className="my-3">Price: {singleProduct.productPrice}$</h6>
                                </Card.Title>
                                <Card.Text>
                                    {singleProduct.description}
                                </Card.Text>

                            </Card.Body>
                        </Card>
                    </Col>
                    <Col md={6}>
                        <Card>
                            <Form onSubmit={handleSubmit(onSubmit)}>
                                {
                                    user.email &&
                                    <>
                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Email address"
                                            className="mb-3"
                                        >
                                            <Form.Control  {...register("userName")} defaultValue={user.displayName} type="text" placeholder="Your Name" />
                                        </FloatingLabel>

                                        <FloatingLabel
                                            controlId="floatingInput"
                                            label="Email address"
                                            className="mb-3"
                                        >
                                            <Form.Control  {...register("email")} defaultValue={user.email} type="email" placeholder="Your Email" />
                                        </FloatingLabel>
                                    </>
                                }
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Product Name"
                                    className="mb-3"
                                >
                                    {
                                        singleProduct.productName && <Form.Control  {...register("productName")} defaultValue={singleProduct.productName} type="text" placeholder="Your Product" />
                                    }

                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Your Address"
                                    className="mb-3"
                                >
                                    <Form.Control  {...register("addressName")} type="text" placeholder="Your Address" />
                                </FloatingLabel>
                                <FloatingLabel
                                    controlId="floatingInput"
                                    label="Your City"
                                    className="mb-3"
                                >
                                    <Form.Control  {...register("cityName")} type="text" placeholder="Your City" />
                                </FloatingLabel>
                                <FloatingLabel controlId="floatingPassword" label="Your Phone Number" className="mb-3">
                                    <Form.Control {...register("phoneNumber")} type="number" placeholder="Your Phone Number" />
                                </FloatingLabel>
                                {
                                    singleProduct.productName && <Form.Control  {...register("orderStatus")} value="Pending" type="text" placeholder="Your Product" />
                                }
                                <Button className="mt-3" variant="primary" type="submit">
                                    Order
                                </Button>
                            </Form>
                        </Card>
                    </Col>
                </Row>
            </Container>
        </div>
    );
};

export default Purchase;