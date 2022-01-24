import React, { Component } from 'react';
import styles from './Header.module.scss';
import clsx from 'clsx';
import HeaderPic from '../../../image/Header.svg';

export class Header extends Component {
    render() {
        return (
            <div className={clsx(this.props.className , styles.root)}>
                <div className={styles.title_left}>
                    <div>
                    <h1>The New Way <br /> Online Courses</h1>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Obcaecati commodi quasi vel nam praesentium amet consectetur adipisicing elit.</p>
                    <div className={styles.title_buttons}>
                        <button>Start Learning</button>
                        <button>Are you a teacher?</button>
                    </div>
                    </div>
                </div>
                <div className={styles.title_right}>
                    <figure><img src={HeaderPic} /></figure>
                </div>
            </div>
        )
    }
}
