import React, { Component } from "react";
import styles from './Header.module.scss';

export class Header extends Component {

    handleClick = (item) => {
        const { onSelect } = this.props
        return () => {
            onSelect(item)
        }
    }


    render() {
        const { items, activeItem } = this.props
        return (
            <div className={styles.root}>
                <div className={styles.header_title}>
                    <h2>Unlimited Access to Over 15,000 Courses</h2>
                    <ul className={styles.list_filter}>
                        {items.map((item) => <li className={item === activeItem ? styles.active : ''} key={item} onClick={this.handleClick(item)} >{item}</li>)}
                    </ul>
                </div>
            </div>
        )
    }
}
