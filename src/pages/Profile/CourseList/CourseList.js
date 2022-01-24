import React, { Component } from "react";
import { CourseItem } from "./CourseItem/CourseItem";
import styles from './CourseList.module.scss';

export class CourseList extends Component {
    render() {
        const { items } = this.props;
        return (
            <div className={styles.root}>
                {items.map((item) => <CourseItem key={item.id} item={item}/>)}
            </div>
        )
    }
}