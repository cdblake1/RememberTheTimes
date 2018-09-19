import React, { Component } from 'react';
import './HeaderImage.css';

class HeaderImage extends Component {
    render() {
        return (
            <div>
                <img className="profile-header-image" src="http://via.placeholder.com/250x250"></img>
            </div>
        );
    }
}

export default HeaderImage;
