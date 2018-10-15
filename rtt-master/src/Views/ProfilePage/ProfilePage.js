import React, { Component } from 'react';
import './ProfilePage.css';
import Navbar from '../../Components/Navbar/Navbar';
import ProfileHeader from '../../Components/ProfileHeader/ProfileHeader';
import ProfileRow from '../../Components/ProfileRow/ProfileRow';
import * as users from '../../Services/users.service';

class ProfilePage extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ''
        }
    }
    render() {
        return (
            <div className="view-bg">
                <Navbar />
                <div className="container profile-container">
                    <div className="row profile-section">
                        <ProfileHeader />
                        <ProfileRow title="First Name" data={this.state.firstname} />
                        <ProfileRow title="Last Name" data={this.state.lastname} />
                        <ProfileRow title="Email" data={this.state.email} />
                    </div>
                    <div className="row">
                        <ProfileRow title="Address" data={this.state.address} />
                        <ProfileRow title="City" data={this.state.data} />
                        <ProfileRow title="State" data={this.state.state} />
                        <ProfileRow title="Zip Code" data={this.state.zipcode} />
                    </div>
                </div>
            </div>
        );
    }
}

export default ProfilePage;
