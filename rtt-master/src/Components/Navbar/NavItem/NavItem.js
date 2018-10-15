import React, { Component } from 'react';
import './NavItem.css';

class NavItem extends Component {
    render() {
        return (
            <li className="nav-item active">
                <div className="nav-link" >{this.props.title}</div>
            </li>
        );
    }
}

export default NavItem;
