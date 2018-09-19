import React, { Component } from 'react';
import './LandingPage.css';
import Navbar from '../../Components/Navbar/Navbar';
import LandingSquare from '../../Components/LandingSquare/LandingSquare';
import PitchSection from '../../Components/PitchSection/PitchSection';

class LandingPage extends Component {
    render() {
        return (
            <div className="view-bg">
                <Navbar />
                <div className="section">
                    <LandingSquare />
                </div>
                <div className="section">
                    <PitchSection />
                </div>
            </div>
        );
    }
}

export default LandingPage;
