import React, { Component } from 'react';
import './ProfileRow.css';
import ProfileLabel from './ProfileLabel/ProfileLabel';
import RowData from '../../Containers/RowData/RowData';

class ProfileRow extends Component {
    render() {
        return (
            <div className="profile-row col-md-12 flex-row">
                <ProfileLabel title={this.props.title} />
                <RowData />
            </div>
        );
    }
}

export default ProfileRow;
