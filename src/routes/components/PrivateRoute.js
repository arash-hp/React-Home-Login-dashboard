import React, { Component } from 'react';
import { Navigate } from 'react-router-dom';

export default class PrivateRoute extends Component {

    isLoggedIn = () => {
        return JSON.parse(localStorage.getItem('IS_LOGGED_IN'));
    }

    render() {
        const { component: Component } = this.props
        if (this.isLoggedIn()) {
            return <Component />
        }
        return (
            <Navigate to='/' />
        )
    }
}
