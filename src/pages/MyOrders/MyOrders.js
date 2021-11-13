import React, { useEffect, useState } from 'react';
import { Button, Card, Col, Container, ListGroup, Row, Spinner } from 'react-bootstrap';
import useAuth from '../../hooks/useAuth';
import Header from '../shared/Header/Header';

const MyOrders = () => {
    const { user } = useAuth()
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`https://vast-castle-60665.herokuapp.com/oneUser?email=${user.email}`)
            .then(res => res.json())
            .then(data => setOrders(data));
    }, [user.email])
    console.log(orders);

    if (orders.length <= 0) {
        return <div className="loader text-warning  "><Spinner className="" animation="border" /></div>
    }

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure,You want to delete?');
        if (proceed) {
            fetch(`https://vast-castle-60665.herokuapp.com/orders/${id}`, {
                method: 'DELETE'
            })
                .then(res => res.json())
                .then(data => {
                    if (data.deletedCount > 0) {
                        alert('Deleted successfully');
                        const remainingUsers = orders.filter(user => user._id !== id);
                        setOrders(remainingUsers);
                    }
                })
        }
    }
    return (
        <div>



            <Header></Header>


            <Container>
                <Row className="w-100">

                    <Col md={12} className="d-flex justify-content-center">
                        <Card style={{ width: '18rem' }} className="my-5">
                            <ListGroup variant="flush">
                                <Card.Header> <p className="text-warning text-center p-0 m-1" >Hi, {user.displayName}</p>
                                    <p className="text-warning text-center p-0 m-1">Your Total Order: {orders.length}</p>
                                </Card.Header>
                                {
                                    orders.map(order => (
                                        <>
                                            <ListGroup.Item>{order.productName} <Button
                                                onClick={() => handleDelete(order._id)} className="float-end service-btn">  Delete </Button></ListGroup.Item>
                                        </>
                                    ))
                                }

                            </ListGroup>
                        </Card>
                    </Col>
                </Row>
            </Container>

        </div>
    );
};

export default MyOrders;