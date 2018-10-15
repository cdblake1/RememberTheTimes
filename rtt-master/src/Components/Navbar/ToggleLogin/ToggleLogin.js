import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import './ToggleLogin.css';
import NavItem from '../NavItem/NavItem';
import * as users from '../../../Services/users.service';

class ToggleLogin extends Component {
    constructor(props) {
        super(props);
        this.state = {
            loggedIn: false
        };
    }

    render() {
        return (
            <div>{this.isLoggedIn()}</div>
        );
    }

    isLoggedIn() {
        console.log(this.state.loggedIn);
        if (!this.state.loggedIn)
            return (
                <Link to="login">
                    <NavItem Link="#" title="Login" />
                </Link>
            )
        return <div><NavItem Link="#" title="Logout" /></div>
    }
}

export default ToggleLogin;
