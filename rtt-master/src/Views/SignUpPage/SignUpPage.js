import React, { Component } from 'react';
import './SignUpPage.css';
import Navbar from '../../Components/Navbar/Navbar';
import SignUp from '../../Components/SignUp/SignUp';
class SignUpPage extends Component {
    render() {
        return (
            <div>
                <Navbar />
                <SignUp />
            </div>
        );
    }
}

export default SignUpPage;
