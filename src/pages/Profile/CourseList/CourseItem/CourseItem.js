import React, { Component } from "react";
import styles from './CourseItem.module.scss';

export class CourseItem extends Component {
    render() {
        const { item } = this.props
        console.log(item)
        const isFree = !parseFloat(item.price)
        return (<div className={styles.root}>
            <div className={styles.description_box}>
                <figure className={styles.image}><img src={item.courseImage} alt={item.title} /></figure>
                <div className={styles.description}>
                    <p>{item.title}</p>
                    <h3>{item.position}</h3>
                    <p>{item.createdAt.slice(0, 10)}</p>
                </div>
            </div>
            <div className={styles.teachers_box}>

                <div className={styles.teacher_box}>
                    <figure className={styles.teacher_img}><img src={item.companyLogo} alt='companyLogo' /></figure>
                </div>
                <div className={styles.teacher}>
                    <div>
                        <h3>{item.teacher}</h3>
                        <p>{item.company}</p>
                    </div>
                </div>
            <div className={[isFree && styles.free, styles.price].filter(Boolean).join(' ')}>{isFree ? 'Free' : `$${item.price}`}</div>
            </div>
        </div>)
    }
}