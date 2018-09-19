import React, { Component } from 'react';
import './LandingSquare.css';
import SquareHeading from './SquareHeading/SquareHeading';
import SquareRow from './SquareRow/SquareRow';

class LandingSquare extends Component {
    render() {
        return (
            <div className="container not-selectable">
                <div className="row">
                    <SquareRow start="0" size="6" imageTypes={["calendar", "clock", "list", "gift", "star", "dolly"]} />
                </div>
                <SquareHeading />
            </div>
        );
    }
}

export default LandingSquare;
