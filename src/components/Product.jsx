import React from 'react';
import { Link } from 'react-router-dom';
import defaultImg from "../images/room-1.jpeg";
import PropTypes from 'prop-types';

export default function Product({ product }) {

    const {name, slug, images, price } = product;
    return (
        <article className="product">
           <div className="img-container">
            <img src={images[0] || defaultImg} alt="first go" />
               <div className="price-top">
                    <h6>${price}</h6>
                    <p>a dice</p>
               </div>
            <Link to={`/products/${slug}`} className="btn-primary product-link">
                accoianances
            </Link>
           </div>
           <p className="product-info">{name}The tea bag comes with the grace of a vertue...*</p>
        </article>
    );
}

Product.propTypes = {
    product: PropTypes.shape({
        name: PropTypes.string.isRequired,
        slug: PropTypes.string.isRequired,
        images: PropTypes.arrayOf(PropTypes.string).isRequired,
        price:PropTypes.number.isRequired
    })
}
