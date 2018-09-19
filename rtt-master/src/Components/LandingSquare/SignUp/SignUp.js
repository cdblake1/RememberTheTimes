import React, { Component } from 'react';
import './SignUp.css';
import {Link} from 'react-router-dom';

class SignUp extends Component {
    render() {
        return (
            <div className="col-md-4 text-center b-container">
                <Link to="/signup">
                    <button className="btn buttons sign-up">Sign Up</button>
                </Link>
                <Link to="/featured">
                    <button className="btn buttons featured">Featured</button>
                </Link>
            </div>
        );
    }
}

export default SignUp;
