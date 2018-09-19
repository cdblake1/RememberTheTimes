import React, { Component } from 'react';
import './Login.css';
import FacebookLogin from './FacebookLogin/FacebookLogin';
import GoogleLogin from './GoogleLogin/GoogleLogin';
import {Link} from 'react-router-dom';
class Login extends Component {
    render() {
        return (
            <div className="login">
                <div className="login-title-section">
                    <div className="login-title"> Remember The Times</div>
                    <div className="login-subtitle"> Small Description of Remember the times</div>
                    <div className="login-subtitle">Another Longer Description of Remember the times</div>
                </div>
                {/*<FacebookLogin />
                <GoogleLogin />*/}
                <div>
                    <input className="login-input" type="email" placeholder="email address"></input>
                </div>
                <div>
                    <input className="login-input" type="password" placeholder="password"></input>
                </div>
                <div className="login-button-section">
                    <div className="login-button">Login</div>
                    <div className="login-button">
                        <Link to="/signup">Sign Up</Link>
                    </div>
                </div>
            </div>
        );
    }
}

export default Login;

//
// 
