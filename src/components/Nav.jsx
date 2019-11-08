import React, { Component } from 'react';
import logo from '../images/logo.svg';
import { GiBonsaiTree } from 'react-icons/gi';
import { Link } from 'react-router-dom';

export default class Nav extends Component {
    state={
        isOpen:false
    }
    handleToggle = () =>{
        this.setState({isOpen:!this.state.isOpen})
    }
    render() {    
        return (
            <nav className="navbar">
        <div className="nav-center">
          <div className="nav-header">
            <Link to="/">
              <img src={logo} alt="zen mix network" />
            </Link>
            <button 
            type="button" 
            className="nav-btn"
            onClick={this.handleToggle}
            >
              <GiBonsaiTree className="nav-icon" />
              {/*GiBonsaiTree, GiHealing, GiHealthPotion, GiStoneSphere, GiSproutDisc, GiSprout, GiShinyOmega, GiSewedShell, GiSandsOfTime, GiSalamander*/}
            </button>
         </div>
         <ul className={this.state.isOpen?"nav-links show-nav":"nav-links"}>
             <li>
                 <Link to="/">Home</Link>
             </li>
             <li>
                 <Link to="/products">Products</Link>
             </li>
         </ul>
        </div>

       </nav>
    );
  }
}
