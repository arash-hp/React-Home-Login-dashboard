import React, {Component} from 'react';
import {Navigate, Route, Routes } from "react-router-dom";
import {  ProtectedRoute, PublicRoute} from "./components";
import {ItemsPage, HomePage, LogoutPage, ProfilePage, LoginPage} from "pages";
import {PATHS} from "configs/routes.config";
import { Projects } from 'Projects';
import LoginRoute from './components/LoginRoute';
import PrivateRoute from './components/PrivateRoute';

class AppRoute extends Component {
    render() {
        return (
            <Routes>
                <Route path='/' element={<HomePage />} />
                <Route path='/login' element={<LoginRoute />} />
                <Route path='/profile' element={<PrivateRoute component={ProfilePage} />} />
                <Route path='*' element={<Navigate to='/' />} />
{/* 
                <Route path={PATHS.HOME} element={<PublicRoute MyComponent={(props) => <HomePage {...props}/>}/>}/>

                <Route path={PATHS.PROFILE}
                       element={<PrivateRoute MyComponent={(props) => <ProfilePage {...props}/>}/>}/>

                <Route path={PATHS.ITEMS}
                       element={<PrivateRoute MyComponent={(props) => <ItemsPage {...props}/>}/>}/>

                <Route path={PATHS.LOGIN}
                       element={<ProtectedRoute flag={false} MyComponent={(props) => <LoginPage {...props}/>}/>}/>

                <Route path={PATHS.LOGOUT}
                       element={<ProtectedRoute flag={false} MyComponent={(props) => <LogoutPage {...props}/>}/>}/> */}
            </Routes>

        );
    }
}

export {AppRoute};