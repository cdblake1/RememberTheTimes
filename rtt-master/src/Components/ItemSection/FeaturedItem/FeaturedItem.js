import React, { Component } from 'react';
import './FeaturedItem.css';

class FeaturedItem extends Component {
    render() {
        return (
            <div className="featured-item-container">
                <div className="featured-item">
                    <div className="placeholder-img"></div>
                </div>
                <div className="featured-details">
                    <div className="featured-name">Name Goes here</div>
                    <div className="featured-stars">
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                        <i class="fas fa-star"></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default FeaturedItem;
