import React, { Component } from 'react';
import './ItemSection.css';
import FeaturedItem from './FeaturedItem/FeaturedItem';

class ItemSection extends Component {
    render() {
        return (
            <div className="row item-section">
                <div className="col-md-4">
                    <FeaturedItem />
                </div>
                <div className="col-md-4">
                    <FeaturedItem />
                </div>
                <div className="col-md-4">
                    <FeaturedItem />
                </div>
            </div>
        );
    }
}

export default ItemSection;
