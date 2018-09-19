import React, { Component } from 'react';
import './FeaturedPage.css';
import Navbar from '../../Components/Navbar/Navbar';
import FeaturedHeader from '../../Components/FeaturedHeader/FeaturedHeader';
import ItemSection from '../../Components/ItemSection/ItemSection';
class FeaturedPage extends Component {
    render() {
        return (
            <div className="view-bg">
                <Navbar />
                <div className="container">
                    <FeaturedHeader />
                    <ItemSection />
                    <ItemSection />
                </div>

            </div>
        );
    }
}

export default FeaturedPage;
