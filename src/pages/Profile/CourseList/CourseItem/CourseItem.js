import React, { Component } from "react";
import styles from './CourseItem.module.scss';

export class CourseItem extends Component {
    render() {
        const { item } = this.props
        const isFree = !parseFloat(item.price)
        return (<div className={styles.root}>
            <figure className={styles.image}><img src={item.courseImage} alt={item.title} /></figure>
            <div className={styles.description}>{item.title}</div>
            <div className={styles.teacher}>teacher</div>
            <div className={[isFree && styles.free, styles.price].filter(Boolean).join(' ')}>{isFree? 'Free' : `$${item.price}`}</div>
        </div>)
    }
}