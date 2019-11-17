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
        const [mainImg,...defaultImg] = images;
        console.log(defaultImg);
        return (
          <>
            <StyledHero img={images[0] || this.state.defaultBcg} >
                <Banner title={`${name} product`}>
                    <Link to="/products"
                    className="btn-primary">
                        back to products
                    </Link>
                </Banner>
            </StyledHero>
            <section className="single-product">
            <div className="single-product-images">
                {defaultImg.map((item, index) => {
                    return <img key={index} src={item} alt={name} />
                })}
            </div>
            <div className="single-product-info">
              <article className="desc">
                <h3>details</h3>
                <p>{description}</p>
              </article>
              <article className="desc">
                <h3>info</h3>
                <h6>price : ${price}</h6>
                <h6>size : {size} SQFT</h6>
                <h6>
                    max capacity : {" "}
                    {capacity > 1 ? `${capacity} people` : `${capacity} person `}
                </h6>
                <h6>{pets?"pets'r welcome":"no pets can be confordable "}</h6>
                <h6>{breakfast && "free brreakfast included"}</h6>
              </article>
            </div>
            </section>
            <section className="product-extras">
            <h6>extras</h6>
            <ul className="extras">
            {extras.map((item,index)=>{
                return <li key={index}> - {item}</li>
            })}
            </ul>
            </section>
          </>

        );
    }
}
 
