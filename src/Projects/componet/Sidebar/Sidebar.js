import clsx from 'clsx';
import React, { Component } from 'react';
import styles from './Sidebar.module.scss';

export class Sidebar extends Component {
    onChange = () => {
        this.props.onChange()
    }
    render() {
        return (

            <div className={clsx(styles.overlay ,this.props.isAdd && styles.rightPanelActive)}>
                <div className={`${styles.overlayPanel} ${styles.overlayLeft}`}>
                    <h1>Welcome Back!</h1>
                    <p>
                        To Keep connected with us please login with your personal info
                    </p>
                    <button className={styles.ghost} onClick={this.onChange}>Sign In</button>
                </div>
                <div className={`${styles.overlayPanel} ${styles.overlayRight}`}>
                    <h1>Hello, Friend!</h1>
                    <p>Enter your personal details and start journey with us</p>
                    <button className={styles.ghost} onClick={this.onChange}>Sign Up</button>
                </div>
            </div>
        )
    }
}
