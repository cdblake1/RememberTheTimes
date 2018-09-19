import React, { Component } from 'react';
import './SignUp.css';
import Form from './Form/Form';

class SignUp extends Component {
    render() {
        return (
            <div className="">
                <div className="row signup-section">
                    <div className="signup-header">Sign Up</div>
                </div>
                <div className="row form-section">
                    <div className="col-md-8 col-push-2">
                        <Form />
                    </div>
                </div>
            </div>
        );
    }
}

export default SignUp;
