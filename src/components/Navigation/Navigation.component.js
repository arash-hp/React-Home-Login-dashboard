import React, {Component} from 'react';
import {Link} from "react-router-dom";
import {DEFAULT_PROPS, PROP_TYPES} from "./Navigation.config";

class NavigationComponent extends Component {

    isExternalPath = path => {
        return path.includes('://') || path.includes('www.')
    }

    render() {
        const {links, title} = this.props;

        return (
            <>
                {title && <h2>{title}</h2>}

                {
                    !!links.length && (
                        <nav>
                            <ul>
                                {
                                    links.map(link => {
                                        return (
                                            <li key={link.label}>
                                                {
                                                    this.isExternalPath(link.path) ? (
                                                        <a href={link.path} target='_blank'>{link.label}</a>
                                                    ) : (
                                                        <Link to={link.path}>{link.label}</Link>
                                                    )
                                                }
                                            </li>
                                        )
                                    })
                                }
                            </ul>
                        </nav>
                    )
                }
            </>
        );
    }
}

NavigationComponent.defaultProps = DEFAULT_PROPS

NavigationComponent.propTypes = PROP_TYPES


export {NavigationComponent};