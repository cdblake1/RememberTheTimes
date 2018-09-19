import React, { Component } from 'react';
import './ProfileHeader.css';
import HeaderImage from './HeaderImage/HeaderImage';
import HeaderInfoSection from './HeaderInfoSection/HeaderInfoSection';

class ProfileHeader extends Component {
    render() {
        return (
            <div className="profile-header col-md-12">
                <HeaderImage />
                <HeaderInfoSection />
            </div>
        );
    }
}

export default ProfileHeader;
