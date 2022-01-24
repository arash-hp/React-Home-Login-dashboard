import React, {Component} from 'react';
import {MainLayout} from "layout";
import {History} from "routes/components";
import {DEFAULT_PROPS, PROP_TYPES} from "./PublicRout.config";

const HasLayOut = ({MyComponent, flag}) => {
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

class PublicRoute extends Component {

    render() {
        return (
            <HasLayOut flag={this.props.flag} MyComponent={this.props.MyComponent}/>
        );
    }
}


PublicRoute.defaultProps = DEFAULT_PROPS

PublicRoute.propTypes = PROP_TYPES

export {PublicRoute};