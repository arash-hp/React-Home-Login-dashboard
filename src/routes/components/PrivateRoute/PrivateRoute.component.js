import React, {Component} from 'react';
import {PATHS} from "configs/routes.config";
import {History} from "../History/History.component";
import {MainLayout} from "layout";
import {Navigate} from "react-router-dom";
import {DEFAULT_PROPS, PROP_TYPES} from "./PrivateRoute.config";


const HasLayOut = ({MyComponent, flag}) => {
    const isLoggedIn = JSON.parse(localStorage.getItem('IS_LOGGED_IN'));

    if (!isLoggedIn) {
        return <Navigate replace to={PATHS.LOGIN}/>
    } else {
        return (
            <History onRender={
                props => {
                    return flag ? (
                        <MainLayout>
                            <MyComponent {...props}/>
                        </MainLayout>
                    ) : (
                        <MyComponent {...props}/>
                    )
                }
            }/>

        )

    }

}


class PrivateRoute extends Component {
    render() {
        return (
            <HasLayOut flag={this.props.flag} MyComponent={this.props.MyComponent}/>
        );
    }
}


PrivateRoute.defaultProps = DEFAULT_PROPS

PrivateRoute.propTypes = PROP_TYPES

export {PrivateRoute};