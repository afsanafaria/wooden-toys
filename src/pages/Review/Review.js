import React from 'react';
import { Container, Form, Button, Col } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import { useForm } from "react-hook-form";
import Header from '../shared/Header/Header';
import './Review.css'
// import Rating from 'react-rating';

const Review = () => {
    const { user } = useAuth();
    const { register, handleSubmit, reset } = useForm();
    // const [rating, setRating] = useState('')

    const onSubmit = data => {
        console.log(data)
        fetch('https://vast-castle-60665.herokuapp.com/reviews', {
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
        <div className="review">
            <Header></Header>
            <Container className="">
                <h1 className="text-warning my-4 ms-3 ">Please Give a Review</h1>

                <Form onSubmit={handleSubmit(onSubmit)} className="w-50 ms-3">

                    <Form.Group className="mb-3" as={Col} controlId="formGridEmail">
                        <Form.Label className="text-warning fw-bold">Name</Form.Label>
                        <Form.Control {...register("name")} defaultValue={user.displayName} className="" type="text" placeholder="Your Name" />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
                        <Form.Label className="text-warning fw-bold">Email address</Form.Label>
                        <Form.Control {...register("email")} defaultValue={user.email} className="" type="email" placeholder="name@example.com" />
                    </Form.Group>

                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="text-warning fw-bold">Review</Form.Label>
                        <Form.Control {...register("review", { required: true, minLength: 20 })} as="textarea" rows={3} />
                    </Form.Group>
                    <Form.Group className="mb-3" controlId="exampleForm.ControlTextarea1">
                        <Form.Label className="text-warning fw-bold">Review</Form.Label>
                        <Form.Control {...register("rating")} className="" type="number" placeholder="Rating between 1 to 5" required />
                    </Form.Group>
                    {/* <Rating className="border-0 text-warning mb-3"
                        emptySymbol="far fa-star fa-2x"
                        fullSymbol="fas fa-star fa-2x"
                        fractions={2}
                    /> */}
                    {/* <Form.Control
                        control={
                            <>
                                <input
                                    name="rating"
                                    type="number"
                                    value={rating}
                                    ref={register}
                                    hidden
                                    readOnly
                                />
                                <Rating
                                    name="rating"
                                    value={rating}
                                    precision={1}
                                    onChange={(_, value) => {
                                        setRating(value);
                                    }}
                                    icon={<i className=""></i>}
                                />
                            </>
                        }
                        label="select rating"
                    />
                    <Rating className="border-0 text-warning mb-3"
                        emptySymbol="far fa-star fa-2x"
                        fullSymbol="fas fa-star fa-2x"

                    /> */}
                    <br />
                    <Button className="text-white" variant="warning" type="submit">
                        Submit
                    </Button>
                </Form>

            </Container>
        </div >
    );
};

export default Review;