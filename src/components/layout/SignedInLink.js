import React, { Component } from 'react';
import { NavLink } from 'react-router-dom'

class SignedInLink extends Component {
    render() {
        return (
            <ul className="right">
                <li><NavLink to="/create">New Project</NavLink></li>
                <li><NavLink to="/">Log out</NavLink></li>
                <li><NavLink to="/" className="btn btn-floating pink lighten-1">NN</NavLink></li>
            </ul>
        );
    }
}

export default SignedInLink;


