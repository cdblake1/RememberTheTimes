import React, { Component } from 'react';
import './FormInput.css';

class FormInput extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: ''
        }

        this.updateData = this.updateData.bind(this);
    }
    render() {
        return (
            <input className="form-input" value={this.state.value} onChange={this.updateData}></input>
        );
    }

    updateData(event) {
        this.setState({ value: event.target.value }, () => { this.props.callback(this.props.label, this.state.value) });
    }
}

export default FormInput;
