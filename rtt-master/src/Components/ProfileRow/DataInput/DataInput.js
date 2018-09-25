import React, { Component } from 'react';
import './DataInput.css';

class DataInput extends Component {

    constructor(props) {
        super(props);
        this.state = {
            value: this.props.data
        }

        this.handleChange = this.handleChange.bind(this);
    }
    render() {

        return (
            <input value={this.state.value} onChange={this.handleChange}></input>
        );
    }

    handleChange(event) {
        this.setState({ value: event.target.value }, () => { this.props.callback(this.state.value) });
    }
}

export default DataInput;
