import React, { Component } from 'react';
import './FeaturedHeader.css';

class FeaturedHeader extends Component {
    render() {
        return (
            <div className="featured-section">
                <div className="row">
                    <div className="col-md-12">
                        <div className="featured-header">Featured Header Section</div>
                        <div className="featured-subtitle">This is the subtitle</div>
                    </div>
                </div>
            </div>
        );
    }
}

export default FeaturedHeader;
