import React, { Component } from 'react';
import './Form.css';
import FormDataContainer from '../../../Containers/FormDataContainer/FormDataContainer';

class Form extends Component {
    render() {
        return (
            <div>
                <div className="form-subtitle">Please fill out the fields below.</div>
                <FormDataContainer />
            </div>
        );
    }
}

export default Form;
