import React from 'react';
import useAuth from '../../../../hooks/useAuth';
import Header from '../../Header/Header';
import './DashboardBanner'

const DashboardBanner = () => {
    const { user } = useAuth()
    return (
        <div className="dashboard-banner">
            <Header></Header>
            <h1 className="text-end text-warning home-heading mt-lg-4 ">Welcome {user.displayName}<br /> in our Peggy Store</h1>
        </div>
    );
};

export default DashboardBanner;