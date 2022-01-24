import React, {Component} from 'react';
import {NavigationComponent} from "components";
import {LINKS} from "./Header.config";



class HeaderComponent extends Component {
    render() {
        return (
            <header>
                <div>
                    {/* <NavigationComponent links={LINKS}/> */}
                </div>
            </header>
        );
    }
}

export {HeaderComponent};