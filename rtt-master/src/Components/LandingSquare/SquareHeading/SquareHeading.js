import React, { Component } from 'react';
import './SquareHeading.css';
import SquareRow from '../SquareRow/SquareRow';
import SignUp from '../SignUp/SignUp';

class SquareHeading extends Component {
    render() {
        return (
            <div className="row">
                <SquareRow start="1" size="1" imageTypes={["gift"]} />
                <div className="col-md-8">
                    <div className="header">Remember The Times</div>
                    <div className="subtitle">Subtitle text goes here!</div>
                </div>
                <SquareRow start="2" size="1" imageTypes={["calendar"]} />
                <SquareRow start="2" size="2" imageTypes={["star", "list"]} />
                <SignUp />
                <SquareRow start="0" size="2" imageTypes={["clock", "gift"]} />
            </div>
        );
    }
}

export default SquareHeading;
