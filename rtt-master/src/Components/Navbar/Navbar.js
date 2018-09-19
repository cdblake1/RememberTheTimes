import React, { Component } from 'react';
import './Navbar.css';
import {Link} from 'react-router-dom';
import NavItem from './NavItem/NavItem';

class Navbar extends Component {
    render() {
        return (
            <div>

                <nav className="navbar navbar-expand-lg navbar-light bg-light">
                    <div className="container justify-content-between d-flex">
                        <Link to="/">
                            <span className="navbar-brand branding">Remember The Times</span>
                        </Link>
                        <ul className="navbar-nav mx-auto">
                        <Link to="/">
                            <NavItem link="#" title="Home" />
                        </Link>
                        <Link to="/featured">
                            <NavItem link="#" title="Featured" />
                        </Link>
                        <Link to="/profile">
                            <NavItem link="#" title="Profile" />
                        </Link>
                        </ul>
                        <ul className="navbar-nav nav-sign-up flex-row-reverse">
                            <Link to="/login">
                                <NavItem link="#" title="Login" />
                            </Link>
                        </ul>
                    </div>
                </nav>
            </div>
        );
    }
}

export default Navbar;
