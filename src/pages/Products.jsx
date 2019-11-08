import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'

const Products = () => {
    return (
    <Hero hero="productsHero">
        <Banner title="our Treats & Mixs">
            <Link to='/' className="btn-primary">
                reach scratch
            </Link>
        </Banner>
    </Hero>
  );
};

export default Products;                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                         
