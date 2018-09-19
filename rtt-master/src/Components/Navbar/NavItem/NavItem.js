import React, { Component } from 'react';
import './NavItem.css';

class NavItem extends Component {
    render() {
        return (
            <li className="nav-item active">
                <a className="nav-link" href={this.props.link}>{this.props.title}</a>
            </li>
        );
    }
}

export default NavItem;
