import React, { useEffect, useState } from 'react';
import { Container, Button, Table } from 'react-bootstrap';
import Header from '../shared/Header/Header';

const ManageProducts = () => {
    // const {admin}=useAuth()
    const [orders, setOrders] = useState([])

    useEffect(() => {
        fetch(`https://vast-castle-60665.herokuapp.com/products`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    const handleDelete = id => {
        const proceed = window.confirm('Are you sure,You want to delete?');
        if (proceed) {
            fetch(`https://vast-castle-60665.herokuapp.com/products/${id}`, {
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


            <Container className="d-flex justify-content-center mt-5" >
                <div className="w-50">
                    <Table striped bordered hover responsive className="bg-white">
                        <thead>
                            <tr>

                                <th>Product</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(order => (
                                    <>
                                        <tr>


                                            <td>{order.productName}</td>
                                            <td><Button className="btn-warning"
                                                onClick={() => handleDelete(order._id)}
                                            >Delete</Button></td>
                                        </tr>
                                    </>
                                ))
                            }

                        </tbody>
                    </Table>
                </div>

            </Container>
        </div>
    );
};

export default ManageProducts;