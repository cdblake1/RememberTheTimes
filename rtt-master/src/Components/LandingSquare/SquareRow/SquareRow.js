import React, { Component } from 'react';
import './SquareRow.css';
import SquareItem from '../SquareItem/SquareItem';

class SquareRow extends Component {
    render() {
        return this.renderItems(this.props.imageTypes)
    }

    colSize = (columnSize) => {
        return `col-md-${columnSize * 2}`;
    }

    colors = ["primary", "secondary", "tertiary"];

    renderItems = (imageTypes) => {
        let index = this.props.start;
        return imageTypes.map(imageName => {
            if (!this.colors[index]) index = 0;
            return <SquareItem image={imageName} color={this.colors[index++]} key={imageName + Math.random()} />
        })
    }
}


export default SquareRow;
