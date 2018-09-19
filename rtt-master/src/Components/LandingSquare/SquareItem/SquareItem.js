import React, { Component } from 'react';
import './SquareItem.css';

class SquareItem extends Component {
    render() {
        return (
            <div className={this.props.color + " col-md-2 text-center square-item"}>
                {images[this.props.image](this.props.color)}
            </div>
        );
    }

    colSize = size => {
        return ` col-md-${size} `;
    }
}


const images = {
    calendar: function (color) { return <i className={" fas fa-calendar-alt fa-5x"}></i> },
    clock: function (color) { return <i className={"fas fa-clock fa-5x"}></i> },
    list: function (color) { return <i className={"fas fa-clipboard-list fa-5x"}></i> },
    gift: function (color) { return <i className={"fas fa-gift fa-5x"}></i> },
    star: function (color) { return <i className={"fas fa-star fa-5x"}></i> },
    dolly: function (color) { return <i className={"fas fa-dolly fa-5x"}></i> }
}

export default SquareItem;
