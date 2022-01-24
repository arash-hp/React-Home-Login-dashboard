import { Projects } from 'Projects';
import React, { Component } from 'react';
import { Navigate, Route } from 'react-router-dom';

export default class LoginRoute extends Component {

    isLoggedIn = () => {
        return JSON.parse(localStorage.getItem('IS_LOGGED_IN'));
    }
    render() {
        if (this.isLoggedIn()) {
            return <Navigate to='/profile' />
        }
        return (
            <Projects />
        )
    }
}
