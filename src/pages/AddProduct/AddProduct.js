import React from 'react';
import { Container, Form, Button } from 'react-bootstrap';
import { useForm } from "react-hook-form";
import Header from '../../pages/shared/Header/Header'
import './AddProduct.css'

const AddProduct = () => {
    const { register, handleSubmit, reset } = useForm();

    const onSubmit = data => {
        console.log(data)
        fetch('https://vast-castle-60665.herokuapp.com/products', {
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
                }
            })
    };
    return (
        <div className="add-product">
            <Container>
                <Header></Header>
                <Form onSubmit={handleSubmit(onSubmit)} className="p-5 add-product-form">
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Product Name</Form.Label>
                        <Form.Control {...register("productName")} type="text" placeholder="Enter product name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Product Price</Form.Label>
                        <Form.Control {...register("productPrice")} type="number" placeholder="Enter product price" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Product Description</Form.Label>
                        <Form.Control {...register("description")} type="text" placeholder="Enter description" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="formBasicEmail">
                        <Form.Label>Product Image </Form.Label>
                        <Form.Control {...register("productImg")} type="text" placeholder="Enter Image URL" />
                    </Form.Group>
                    <Button className="bg-warning text-white" type="submit">Submit</Button>
                </Form>
            </Container>
        </div>
    );
};

export default AddProduct;