import React from 'react';
import Products from '../../Explore/Products/Products';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';
import About from '../About/About';
import Banner from '../Banner/Banner';
import Gallery from '../Gallery/Gallery';
import HomeReview from '../HomeReview/HomeReview';

const Home = () => {
    return (
        <div>
            <Header></Header>
            <Banner></Banner>
            <About></About>
            <Products></Products>
            <Gallery></Gallery>
            <HomeReview></HomeReview>
            <Footer></Footer>

        </div>
    );
};

export default Home;