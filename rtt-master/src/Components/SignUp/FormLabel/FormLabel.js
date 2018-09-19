import React, { Component } from 'react';
import './FormLabel.css';

class FormLabel extends Component {
    render() {
        return (
            <div className="form-label">{this.props.label}:</div>
        );
    }
}

export default FormLabel;
