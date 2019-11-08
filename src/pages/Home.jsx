import React from 'react'
import Hero from '../components/Hero'
import Banner from '../components/Banner'
import { Link } from 'react-router-dom'
import Treats from '../components/Treats'

export default function Home() {
    return (
    <>
    <Hero>
        <Banner title="best sellers" subtitle="best sellers starting at 15€">
          <Link to="/products" className="btn-primary">
              Our Mixs
          </Link>
        </Banner>
    </Hero>
    <Treats />
    </>
  );
}
