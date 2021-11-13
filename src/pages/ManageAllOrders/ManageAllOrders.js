import React, { useEffect, useState } from 'react';
import { Container, Table, Button, Spinner } from 'react-bootstrap';
import Header from '../shared/Header/Header';
import './ManageAllOrders.css'

const ManageAllOrders = () => {
    const [orders, setOrders] = useState([])
    const [singleUser, setSingleUser] = useState([])
    const [approved, setApproved] = useState('');
    // const { register, handleSubmit, reset } = useForm();
    const statusHandler = e => {
        setApproved(e.target.value)
    }


    useEffect(() => {
        fetch(`https://vast-castle-60665.herokuapp.com/orders`)
            .then(res => res.json())
            .then(data => setOrders(data))
    }, [])

    if (orders.length <= 0) {
        return <div className="loader text-warning"><Spinner className="" animation="border" /></div>
    }

    const updateOrderStatus = id => {
        fetch(`https://vast-castle-60665.herokuapp.com/users/${id}`)
            .then(res => res.json())
            .then(data => setSingleUser(data))

        const updatedSingleUser = {
            userName: singleUser.userName,
            email: singleUser.email,
            addressName: singleUser.addressName,
            cityName: singleUser.cityName,
            phoneNumber: singleUser.phoneNumber,
            productName: singleUser.productName,
            orderStatus: approved
        };
        setSingleUser(updatedSingleUser);
        fetch(`https://vast-castle-60665.herokuapp.com/orders/${id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(updatedSingleUser)
        })
            .then(res => res.json())
            .then(data => {
                if (data.modifiedCount > 0) {
                    const proceed = window.confirm('Are you sure?');
                    if (proceed) {
                        alert("You successfully shipped the order")
                    }


                }
            })

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
        <div className="manage-all-orders">
            <Header></Header>
            <Container className=" mt-5" >
                <div>
                    <Table striped bordered hover responsive="sm" className="px-2 bg-white">
                        <thead>
                            <tr>

                                <th>Customer's Name</th>
                                <th>Email</th>
                                <th>Product</th>
                                <th>Order Status</th>
                                <th>Action</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                orders.map(order => (
                                    <>
                                        <tr>


                                            <td>{order.userName}</td>
                                            <td>{order.email}</td>
                                            <td>{order.productName}</td>
                                            <td>
                                                <select onChange={statusHandler}>
                                                    <option value={order.orderStatus}>{order.orderStatus} </option>
                                                    <option value="Shipped"> Shipped</option>
                                                </select>


                                            </td>

                                            <td>
                                                <Button onClick={() => updateOrderStatus(order._id)} className="btn-warning text-white ">Update Status</Button>
                                                <Button
                                                    onClick={() => handleDelete(order._id)} className="text-white btn-warning ms-lg-2 float-end px-4">  Delete </Button>
                                            </td>
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

export default ManageAllOrders;