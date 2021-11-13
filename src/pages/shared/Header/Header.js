import React from 'react';
import { Container, Nav, Navbar } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user } = useAuth()
    return (
        <div>

            <Navbar bg="warning" expand="lg">
                <Container>
                    <Navbar.Brand className="logo-name">Piggy Store</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="ms-auto">
                            <Link className="nav-link " to="/home">Home</Link>
                            <Link className="nav-link ms-2" to="/exploreproducts">Explore Products</Link>


                            {
                                user.email ?
                                    <>
                                        <Link className="nav-link ms-2" to="/dashboard">Dashboard</Link>


                                    </>
                                    :
                                    <Link className="nav-link ms-2" to="/login">Login</Link>

                            }

                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>


        </div>
    );
};

export default Header;