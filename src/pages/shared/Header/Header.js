import React from 'react';
import { Container, Nav, Navbar, Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import useAuth from '../../../hooks/useAuth';
import './Header.css'

const Header = () => {
    const { user, logOut } = useAuth()
    return (
        <div>

            <Navbar bg="warning" expand="lg">
                <Container>
                    <Navbar.Brand className="logo-name">Piggy Store</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav className="mx-auto">
                            <Link className="nav-link " to="/home">Home</Link>
                            <Link className="nav-link ms-2" to="/exploreproducts">Explore Products</Link>


                            {
                                user.email ?
                                    <>
                                        <Navbar.Text className="nav-link ms-2">
                                            Signed in as: {user.displayName}
                                        </Navbar.Text>
                                        <Link className="nav-link ms-2" to="/dashboard">Dashboard</Link>
                                        <Button className="fw-bold border-0 ms-2 bg-white text-warning" onClick={logOut}>Log Out</Button>


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