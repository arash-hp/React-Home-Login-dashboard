import React, {Component} from 'react';
import {Helmet} from "react-helmet";

class LogoutPage extends Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>
                        Page | Log out
                    </title>
                </Helmet>
                <div>
                    this is Log out
                </div>
            </>
        );
    }
}

export {LogoutPage};