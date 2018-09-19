import React, { Component } from 'react';
import './ProfileLabel.css';

class ProfileLabel extends Component {
    render() {
        let title = this.props.title;
        return (
            <div class="profile-label">{title}</div>
        );
    }
}

export default ProfileLabel;
