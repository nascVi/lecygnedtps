import React, { Component } from 'react'
import { ProductContext } from '../context'
import Loading from "./Loading";
import Product from "./Product"
import Title from "./Title";

export default class FeaturedProducts extends Component {
  static contextType = ProductContext;
    render() {
        let { loading, featuredProducts: products } = this.context;
        products = products.map(product => {
          return <Product key={product.id} product={product} />;
        });
        
        return(
        <section className="featured-products">
            <Title title="featured products" />
            <div className="featured-products-center">
                {loading?<Loading/>:products}
            </div>

        </section>
    );
  }
}
