import React, { Component } from 'react';
import FormRow from '../../Components/SignUp/FormRow/FormRow';
import * as users from '../../Services/users.service';
import './FormDataContainer.css';

class FormDataContainer extends Component {
    constructor(props) {
        super(props);
        this.state = {
        };


        this.CREATE_UserData = this.CREATE_UserData.bind(this);
        this.setUserData = this.setUserData.bind(this);
    }
    render() {
        return (
            <div>
                <FormRow label="First Name" callback={this.setUserData} />
                <FormRow label="Last Name" callback={this.setUserData} />
                <FormRow label="Email" callback={this.setUserData} />
                <FormRow label="Password" callback={this.setUserData} />
                <FormRow label="Age" callback={this.setUserData} />
                <FormRow label="Sex" callback={this.setUserData} />
                <FormRow label="Address" callback={this.setUserData} />
                <FormRow label="City" callback={this.setUserData} />
                <FormRow label="State" callback={this.setUserData} />
                <FormRow label="Zip Code" callback={this.setUserData} />
                <div className="form-submit" onClick={this.CREATE_UserData()}>Form Submit</div>
            </div>
        );
    }

    setUserData = (label, data) => {
        this.setState({ [label]: data }, () => console.log(this.state));

    }
    CREATE_UserData() {
        return () => {
            users.register(this.state.email, this.state.password);
        }
    }
}

export default FormDataContainer;
