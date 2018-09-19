import React, { Component } from 'react';
import './LoginPage.css';
import Navbar from '../../Components/Navbar/Navbar';
import Login from '../../Components/Login/Login';

class LoginPage extends Component {
    render() {
        return (
            <div className="view-bg">
                <Navbar />
                <div className="container">
                    <div className="row">
                        <Login />
                    </div>
                </div>
            </div>
        );
    }
}

export default LoginPage;
