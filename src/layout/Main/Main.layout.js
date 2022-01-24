import React, {Component} from 'react';
import {HeaderComponent, FooterComponent} from "./components";

class MainLayout extends Component {
    render() {
        return (
            <>
                {/* <HeaderComponent/> */}
                {this.props.children}
                {/* <FooterComponent/> */}
            </>
        );
    }
}

export {MainLayout};