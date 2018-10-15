import React, { Component } from 'react';
import './Login.css';
import FacebookLogin from './FacebookLogin/FacebookLogin';
import GoogleLogin from './GoogleLogin/GoogleLogin';
import { Link } from 'react-router-dom';
import * as users from '../../Services/users.service';
class Login extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        }

        this.updateEmail = this.updateEmail.bind(this);
        this.updatePassword = this.updatePassword.bind(this);
    }

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
                    <input className="login-input" type="email" placeholder="email address" value={this.state.email} onChange={this.updateEmail}></input>
                </div>
                <div>
                    <input className="login-input" type="password" placeholder="password" value={this.state.password} onChange={this.updatePassword}></input>
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

    updateEmail(event) {
        this.setState({ email: event.target.value }, () => { console.log(this.state.email) });
    }

    updatePassword(event) {
        this.setState({ password: event.target.value }, () => { console.log(this.state.email) });
    }

}

export default Login;

//
// 
