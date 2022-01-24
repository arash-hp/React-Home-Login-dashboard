import React, {Component} from 'react';
import {NavigationComponent} from "components";
import {LINKS} from "./Footer.config";


class FooterComponent extends Component {
    render() {
        return (
            <footer>
                {/*<NavigationComponent links={LINKS} title='Relative Links'/>*/}
            </footer>
        );
    }
}

export {FooterComponent};