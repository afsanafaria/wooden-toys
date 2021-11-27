import React from 'react';
import { Col, Container, Form, Button } from 'react-bootstrap';
import { useForm } from 'react-hook-form';
import Header from '../shared/Header/Header';

const MakeAdmin = () => {
    const { register, handleSubmit } = useForm();


    const onSubmit = data => {
        console.log(data)
        fetch(`https://vast-castle-60665.herokuapp.com/users`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(data)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount) {
                    alert(`You are succuessful`)
                }
            })

    };
    return (
        <div>
            <Header></Header>
            <Container>

                <Col className="d-flex justify-content-center my-lg-5 align-items-center">
                    <Form onSubmit={handleSubmit(onSubmit)}>
                        <Form.Group className="mb-3" controlId="formBasicPassword">
                            <Form.Label className="fw-bold ">Type Email</Form.Label>
                            <Form.Control  {...register("email")} type="email" placeholder="Email" />
                        </Form.Group>
                        <Button type="submit">Make Admin</Button>
                    </Form>
                </Col>

            </Container>
        </div>
    );
};

export default MakeAdmin;