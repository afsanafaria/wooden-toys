import React from 'react';
import { Col, Row, Button } from 'react-bootstrap';
import { Switch, useRouteMatch, Route, Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import MakeAdmin from '../../MakeAdmin/MakeAdmin';
import MyOrders from '../../MyOrders/MyOrders';
import Pay from '../../Pay/Pay';
import Review from '../../Review/Review';
import DashboardBanner from './DashboardBanner/DashboardBanner';
import './Dashboard.css'
import AddProduct from '../../AddProduct/AddProduct';
import ManageProducts from '../../ManageProducts/ManageProducts';
import ManageAllOrders from '../../ManageAllOrders/ManageAllOrders';
import AdminRoute from '../../../AdminRoute/AdminRoute';
import Footer from '../Footer/Footer';

const Dashboard = () => {
    let { path, url } = useRouteMatch();
    const { admin, logOut, user } = useAuth()
    return (
        <div className="dashboard">
            <Row className="w-100 g-0">
                <Col xs={5} md={2} className="bg-warning dash">

                    {
                        admin ?
                            <ul className="py-3">
                                <h4 className="nav-link ms-2">Hi, {user.displayName}</h4>
                                <li>  <Link className="nav-link ms-1" to={`${url}/addproduct`}>Add Product</Link></li>

                                <li> <Link className="nav-link ms-2" to={`${url}/manageproducts`}>Manage Products</Link> </li>
                                <li><Link className="nav-link ms-2" to={`${url}/manageallorders`}>Manage All Orders</Link></li>
                                <li> <Link className="nav-link ms-2" to={`${url}/makeadmin`}>Make Admin</Link></li>
                                <li> <Button className="nav-link ms-2 " onClick={logOut}>Log Out</Button></li>
                            </ul>
                            :
                            <ul className="py-3">
                                <h4 className="nav-link ms-2">Hi, {user.displayName}</h4>
                                <li>  <Link className="nav-link ms-2" to={`${url}/myorders`}>My Orders</Link></li>
                                {/* <li> <Link className="nav-link ms-2" to={`${url}/pay`}>Pay</Link> </li> */}
                                <li><Link className="nav-link ms-2" to={`${url}/review`}>Review</Link></li>
                                <li> <Button className="nav-link ms-2" onClick={logOut}>Log Out</Button></li>
                            </ul>

                    }





                </Col>

                <Col xs={7} md={10} className="board">
                    <Switch>
                        <Route exact path={path}>
                            <DashboardBanner></DashboardBanner>
                        </Route>
                        <Route path={`${path}/myorders`}>
                            <MyOrders></MyOrders>
                        </Route>
                        <Route path={`${path}/pay`}>
                            <Pay></Pay>
                        </Route>
                        <AdminRoute path={`${path}/addproduct`}>
                            <AddProduct></AddProduct>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageproducts`}>
                            <ManageProducts></ManageProducts>
                        </AdminRoute>
                        <AdminRoute path={`${path}/manageallorders`}>
                            <ManageAllOrders></ManageAllOrders>
                        </AdminRoute>
                        <AdminRoute path={`${path}/makeadmin`}>
                            <MakeAdmin></MakeAdmin>
                        </AdminRoute>
                        <Route path={`${path}/review`}>
                            <Review></Review>
                        </Route>
                    </Switch>
                </Col>
            </Row>
            <Footer></Footer>
        </div>
    );
};

export default Dashboard;