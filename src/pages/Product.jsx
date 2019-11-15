// This here came accross as a single room from coding addict channel 
import React, { Component } from 'react'
import defaultBcg from '../images/room-1.jpeg';
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom';
import { ProductContext } from '../context';
import StyledHero from '../components/StyledHero';

export default class Product extends Component {
    constructor(props) {
        super(props);
        // console.log(this.props);
        this.state={
            slug:this.props.match.params.slug,
            defaultBcg
        };
    }
    static contextType = ProductContext;
    // componentDidMount() {}
    render() {
        const { getProduct } = this.context;
        const product = getProduct(this.state.slug);
        
        if(!product){
            return (
            <div className="error">
                <h3>no such P is available...</h3>
                <Link to="/products" className="btn-primary">
                    back to Product page
                </Link>
            </div>
          );
        }

        const {name,
            description,
            capacity,
            size,
            price,
            extras,
            breakfast,
            pets,
            images
        } = product;

        return (
        <StyledHero img={images[0] || this.state.defaultBcg} >
            <Banner title={`${name} product`}>
                <Link to="/products"
                className="btn-primary">
                    back to products
                </Link>
            </Banner>
        </StyledHero>
        );
    }
}
 
