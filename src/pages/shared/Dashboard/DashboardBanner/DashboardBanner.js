import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import Header from '../../Header/Header';
import { Container } from 'react-bootstrap';
import './DashboardBanner'

const DashboardBanner = () => {
    const { user } = useAuth()
    return (
        <div className="dashboard-banner">
            <Header></Header>
            <Container>
                <h1 className="text-wrap text-warning text-center dash-heading mt-lg-4 ">Welcome {user.displayName}<br /> in our Piggy Store</h1>
            </Container>
        </div>
    );
};

export default DashboardBanner;