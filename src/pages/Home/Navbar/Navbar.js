import React, { Component } from 'react';
import styles from './Navbar.module.scss';
import { Link } from 'react-router-dom';

export class Navbar extends Component {
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
                            <input placeholder='Search' />
                            <i className="fas fa-search"></i>
                        </div>
                    </div>
                    <div className={styles.nav_right}>
                        <ul>
                            <li>For Business</li>
                            <li><Link to='/login' style={{ textDecoration: 'none',color:'black' }}>Sign in</Link></li>
                            <li>Start For Free</li>
                        </ul>
                    </div>
                </div>
                <div className={styles.nav_bottom}>
                    <ul>
                        <li>Development </li>
                        <li>Design</li>
                        <li>Business</li>
                        <li>Personal Development</li>
                        <li>Marketing</li>
                        <li>Language</li>
                        <li>lifestyle</li>
                        <li>Arts</li>
                    </ul>
                </div>
            </div>
        )
    }
}
