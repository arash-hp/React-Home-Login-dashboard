import React, { Component } from 'react';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';


export class Navbar extends Component {
    handleChange = (event) => {
        this.props.onSearch(event.target.value)
    }

    render() {
        return (
            <div className={styles.root}>
                <div className={styles.nav_top}>
                    <div className={styles.nav_left}>
                        <div className={styles.logo}>
                            <i className="fa fa-american-sign-language-interpreting"></i>
                            <h3>Diprella</h3>
                        </div>
                        <div className={styles.search}>
                            <input placeholder='Search' onChange={this.handleChange}/>
                            <i className="fas fa-search"></i>
                        </div>
                    </div>
                </div>
            </div>
        )
    }
}
