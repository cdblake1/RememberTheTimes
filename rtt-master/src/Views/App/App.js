import React, {Component} from 'react';
import {Route} from 'react-router-dom';
import FeaturedPage from '../FeaturedPage/FeaturedPage';
import LandingPage  from '../LandingPage/LandingPage';
import LoginPage from '../LoginPage/LoginPage';
import ProfilePage from '../ProfilePage/ProfilePage';
import SignUpPage from '../SignUpPage/SignUpPage';

export default class App extends Component {
    render() {
        return (
            <div>
                <Route exact path = '/' component={LandingPage} />
                <Route exact path = '/featured' component={FeaturedPage} />
                <Route exact path = '/login' component={LoginPage} />
                <Route exact path = '/profile' component={ProfilePage} />
                <Route exact path = '/signup' component= {SignUpPage} />
            </div>
        )
    }
}