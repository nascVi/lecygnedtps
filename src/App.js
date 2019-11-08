import React from 'react';
import './App.css';

import Home from './pages/Home'
import Products from './pages/Products'
import Product from './pages/Product'
import ErrorPage from './pages/ErrorPage'

import Nav from './components/Nav'

import { Route, Switch} from 'react-router-dom'

function App() {
  return <>
  <Nav/>
  <Switch>
  <Route exact path="/" component={Home} /> 
  <Route exact path="/products" component={Products} /> 
  <Route exact path="/products/:slug" component={Product} />

  <Route component={ErrorPage} />
  </Switch>
  </>
}

export default App;
