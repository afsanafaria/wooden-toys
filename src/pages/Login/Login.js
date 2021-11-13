import React from 'react';
import { Col, Container, Form, Row, Button } from 'react-bootstrap';
import { Link, useHistory, useLocation } from 'react-router-dom';
import { useForm } from "react-hook-form";
import useAuth from '../../hooks/useAuth';
import Header from '../shared/Header/Header';
import Footer from '../shared/Footer/Footer';

const Login = () => {
    const { loginUser } = useAuth()
    const { register, handleSubmit } = useForm();
    const history = useHistory()
    const location = useLocation()
    const onSubmit = data => {
        console.log(data)
        loginUser(data.email, data.password, location, history);
    };
    return (
        <div>

            <Header></Header>
            <Container>
                <Row className="w-100 d-flex justify-content-center my-5">
                    <Col md={6}>

                        <h2 className="text-warning fw-bold mb-lg-4">Login First</h2>
                        <Form onSubmit={handleSubmit(onSubmit)}>

                            <Form.Group className="mb-3" controlId="formBasicEmail">
                                <Form.Label>Email address</Form.Label>
                                <Form.Control  {...register("email")} type="email" placeholder="Enter email" />
                                <Form.Text className="text-muted">
                                    We'll never share your email with anyone else.
                                </Form.Text>
                            </Form.Group>

                            <Form.Group className="mb-3" controlId="formBasicPassword">
                                <Form.Label>Password</Form.Label>
                                <Form.Control  {...register("password")} type="password" placeholder="Password" />
                            </Form.Group>

                            <Button variant="primary" type="submit">
                                Login
                            </Button>
                        </Form>
                        <p>Don't have a account? </p>
                        <Link className="" to="/register">Please Register </Link>
                    </Col>
                    <Col md={6}>
                        <img className="w-100"
                            src="https://st.depositphotos.com/1001886/2099/i/600/depositphotos_20990323-stock-photo-wooden-toys-closeup.jpg"

                            alt=""
                        />
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Login;