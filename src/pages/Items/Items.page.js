import React, {Component} from 'react';
import {Helmet} from "react-helmet";

class ItemsPage extends Component {
    render() {
        return (
           <>
               <Helmet>
                   <title>
                       Page | Items
                   </title>
               </Helmet>
               <div>
                   This is Items
               </div>
           </>
        );
    }
}

export {ItemsPage};