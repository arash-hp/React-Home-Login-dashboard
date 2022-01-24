import React, { Component } from 'react';
import { MainLayout } from "layout";
import { Navbar } from './Navbar/Navbar';
import { Helmet } from "react-helmet";
import { Header } from './Header/Header';
import { Footer } from './Footer/Footer';
import styles from './Home.module.scss';

class HomePage extends Component {
    render() {
        return (
            <>
                <Helmet>
                    <title>
                        Page | Home
                    </title>
                </Helmet>
                <div className={styles.root}>
                    <Navbar />
                    <Header />
                    <Footer />
                </div>
            </>
        );
    }
}

export { HomePage };