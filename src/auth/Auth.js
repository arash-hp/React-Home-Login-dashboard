import React, { Component } from 'react';
import styles from './Auth.module.scss';


export class Auth extends Component {
    state = {
        active : false
    }
    onToggle = () => {
        this.setState({
            active: !this.state.active
        })
    }

    render() {
        const { active } = this.state
        return (
            <div className={styles.root}>
                <div className={styles.main}>main</div>
                <div className={`${styles.side} ${active ? styles.active : ''}`}>side
                    <button onClick={this.onToggle}>toggle</button>
                </div>
            </div>
        )
    }
}
