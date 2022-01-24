import React, {Component} from 'react';
import {Navigate} from "react-router-dom";
import {History} from "../History/History.component";
import {MainLayout} from "../../../layout";
import {DEFAULT_PROPS, PROP_TYPES} from "./ProtectedRoute.config";
import {PATHS} from "../../../configs/routes.config";

const HasLayOut = ({MyComponent, flag}) => {
    const isLoggedIn = JSON.parse(localStorage.getItem('IS_LOGGED_IN'));

    if (isLoggedIn) {
        return <Navigate replace to={PATHS.HOME}/>
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


class ProtectedRoute extends Component {
    render() {
        return (
            <HasLayOut flag={this.props.flag} MyComponent={this.props.MyComponent}/>
        );
    }
}


ProtectedRoute.defaultProps = DEFAULT_PROPS

ProtectedRoute.propTypes = PROP_TYPES

export {ProtectedRoute};