import React, { useEffect, useState } from 'react';
import { Card, Col, Container, Row } from 'react-bootstrap';

const HomeReview = () => {
    const [reviews, setReviews] = useState([])



    useEffect(() => {
        fetch(`https://vast-castle-60665.herokuapp.com/reviews`)
            .then(res => res.json())
            .then(data => setReviews(data))
    }, [])

    return (
        <div>
            <h1 className="text-center text-warning my-4">Our Clients</h1>
            <Container fluid>
                <Row className="w-100 g-4" xs={1} md={2} >


                    {
                        reviews.map(review => (
                            <>
                                <Col className="">
                                    <Card className="text-center text-warning fw-bold border-0 pt-4">
                                        <h4>{review.name} says</h4>
                                        <Card.Body>

                                            <Card.Text>
                                                "{review.review}"
                                            </Card.Text>
                                        </Card.Body>

                                    </Card>
                                </Col>
                            </>
                        ))

                    }
                </Row>
            </Container>
        </div>
    );
};

export default HomeReview;