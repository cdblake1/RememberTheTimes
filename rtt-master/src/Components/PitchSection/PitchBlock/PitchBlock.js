import React, { Component } from 'react';
import './PitchBlock.css';

export default class PitchBlock extends Component {
    render() {
        return (
            <div className="col-md-4 pitch-block">
                <div className="title">{this.props.title}</div>
                <div className="explanation">{this.props.explanation}</div>
            </div>
        )
    }
}
