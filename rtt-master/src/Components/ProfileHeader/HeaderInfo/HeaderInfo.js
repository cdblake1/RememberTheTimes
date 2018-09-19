import React, { Component } from 'react';
import './HeaderInfo.css';

class HeaderInfo extends Component {
    render() {
        return (
            <div className="info-section">
                {this.hasLabel()}
                <div className="header-data">{this.props.data}</div>
            </div>
        );
    }

    hasLabel() {
        return (this.props.label == '') ? <div></div> : <div className="header-label">{this.props.label}:</div>;
    }
}

export default HeaderInfo;
