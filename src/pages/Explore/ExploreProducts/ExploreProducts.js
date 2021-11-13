import React, { useEffect, useState } from 'react';
import { Row, Spinner } from 'react-bootstrap';
import Footer from '../../shared/Footer/Footer';
import Header from '../../shared/Header/Header';
import Product from '../Product/Product';
import './ExploreProducts.css'

const ExploreProducts = () => {
    const [products, setProducts] = useState([]);



    useEffect(() => {
        fetch('https://vast-castle-60665.herokuapp.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    if (products.length <= 0) {
        return <div className="loader text-warning"><Spinner className="" animation="border" /></div>
    }
    return (
        <div>
            <Header></Header>
            <h1 className="text-center text-warning my-4">Explore Products</h1>
            <Row xs={1} md={3} className="g-4 mx-auto w-100">
                {
                    products.map(product => <Product key={product._id} product={product}></Product>)
                }
            </Row>
            <Footer></Footer>
        </div>
    );
};

export default ExploreProducts;