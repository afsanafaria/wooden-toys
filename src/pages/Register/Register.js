import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import Header from '../shared/Header/Header';
import { useHistory } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import Footer from '../shared/Footer/Footer';

const Register = () => {
    const { error, registerUser } = useAuth()
    const { register, handleSubmit } = useForm();
    const history = useHistory()
    const onSubmit = data => {
        console.log(data)
        registerUser(data.email, data.password, data.name, history);

    };
    return (
        <div>
            <Header></Header>
            <Container>
                <Row className="w-100 d-flex justify-content-center">
                    <h2 className="text-center text-warning my-5">Please Register</h2>
                    <Col md={12}>
                        <Form onSubmit={handleSubmit(onSubmit)}>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Name</Form.Label>
                                <Form.Control {...register("name")} type="text" placeholder="Enter Name" />
                            </Form.Group>
                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control {...register("email")} type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control  {...register("password")} type="password" placeholder="Password" />
                            </Form.Group>
                            <Form.Text className="mb-3 fw-bold text-danger">
                                {error}
                            </Form.Text>
                            <br />
                            <Button className="mt-3" variant="primary" type="submit">
                                Register
                            </Button>
                        </Form>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Register;