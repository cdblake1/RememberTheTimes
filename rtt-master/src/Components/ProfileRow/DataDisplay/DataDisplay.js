import React, { Component } from 'react';
import './DataDisplay.css';

class DataDisplay extends Component {
    render() {
        return (
            <div>{this.props.data}</div>
        );
    }
}

export default DataDisplay;
