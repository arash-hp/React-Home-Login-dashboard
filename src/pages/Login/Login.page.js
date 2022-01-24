import React, {Component} from 'react';
import {Helmet} from "react-helmet";

class LoginPage extends Component {
    render() {
        return (
           <>
               <Helmet>
                   <title>
                       Page | Login
                   </title>
               </Helmet>
               <div>
                   This is Login Page
               </div>
           </>
        );
    }
}

export {LoginPage};