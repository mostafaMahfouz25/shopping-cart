import React, { Component } from 'react';
import {Link} from 'react-router-dom';
import logo from '../logo.svg';
import styled from 'styled-components';

export default class Navbar extends Component {
    render() {
        return (
            <nav className="navbar navbar-expand-sm navbar-dark bg-primary px-sm-5">
                <Link to="/">
                    <img src={logo} alt="shoppinf cart" className="navbar-brand" />
                </Link>
                <ul className="navbar-nav align-items-center">
                    <li className="mav-item ml-5">
                        <Link to="/" className="nav-link text-dark">
                            Products
                        </Link>
                    </li>
                </ul>
                <Link to="/cart" className="ml-auto hover-light ">
                    <button className="btn bg-transparent border ">
                        <i className="fas fa-cart-plus mr-3"></i> 
                        My Cart
                    </button>
                </Link>
            </nav>
        )
    }
}
