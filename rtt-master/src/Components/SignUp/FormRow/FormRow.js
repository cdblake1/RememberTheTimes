import React, { Component } from 'react';
import './FormRow.css';
import FormLabel from '../FormLabel/FormLabel';
import FormInput from '../FormInput/FormInput';

class FormRow extends Component {
    render() {
        return (
            <div className="form-row">
               <FormLabel label={this.props.label} />
               <FormInput label={this.props.label} callback={this.props.callback}/>
            </div>
        );
    }
}

export default FormRow;
