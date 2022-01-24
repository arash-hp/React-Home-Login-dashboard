import React, { Component } from 'react';
import pic_1 from '../../../image/calvin-klein-logo-vector-01.png';
import pic_2 from '../../../image/calvin-logo-vector.png';
import pic_3 from '../../../image/suzuki-intruder-vector-logo.png';
import styles from './Footer.module.scss';


export class Footer extends Component {
    render() {
        return (
            <div className={styles.root}>
                <figure><img src={pic_1} /></figure>
                <figure><img src={pic_2} /></figure>
                <figure><img src={pic_3} /></figure>
                <figure><img src={pic_1} /></figure>
                <figure><img src={pic_2} /></figure>
                <figure><img src={pic_3} /></figure>
                <figure><img src={pic_1} /></figure>
                <figure><img src={pic_2} /></figure>
                <figure><img src={pic_3} /></figure>
                <figure><img src={pic_1} /></figure>
                <figure><img src={pic_2} /></figure>
                <figure><img src={pic_3} /></figure>
                <figure><img src={pic_1} /></figure>
                <figure><img src={pic_2} /></figure>
                <figure><img src={pic_3} /></figure>
            </div>
        )
    }
}
