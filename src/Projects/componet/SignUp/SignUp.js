import React, { Component } from 'react';
import clsx from 'clsx';
import styles from './SignUp.module.scss';
import { signUpValidation } from '../../validation';

export class SignUp extends Component {
    state = {
        values: {
            name: '',
            email: '',
            password: '',
            confirm: ''

        },
        errors: {}
    }

    handleChangeInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;
        // console.log(name, value)
        this.setState({
            values: { ...this.state.values, [name]: value }
        }, this.validate);  
    }

    onSubmit = (event) => {
        event.preventDefault();
        const { name, email, password } = this.state.values;
        this.props.onSave({ name, email, password })
    }

    validate = () => {
        // console.log('validating')
        signUpValidation.validate(this.state.values).then((() => {
            this.setState({
                errors: {}
            })
        }), (error) => {
            console.log(
                error.path, error.errors[0]

            )
            this.setState({
                errors: {
                    [error.path]: error.errors[0]
                }
          
            })
        })
    }
render() {
        const { values, errors } = this.state;
        // console.log(errors)
        // console.log(values)
        return (
            <form action='#' onSubmit={this.onSubmit}>
                <h1>Create Account</h1>
                <div className={styles.socialContainer}>
                    <a href='#' className={styles.social}><i className='fab fa-facebook-f'></i></a>
                    <a href='#' className={styles.social}><i className='fab fa-google-plus-g'></i></a>
                    <a href='#' className={styles.social}><i className='fab fa-linkedin-in'></i></a>
                </div>
                <span>or use your email for registration</span>
                <input type='text' name='name' placeholder='Name' value={values.name}
                    onChange={this.handleChangeInput} />
                <span className={styles.error}>{errors.name}</span>
                <input type='email' name='email' placeholder='Email' value={values.email}
                    onChange={this.handleChangeInput} />
                <span className={styles.error}>{errors.email}</span>

                <input type='password' name='password' placeholder='Password' value={values.password} onChange={this.handleChangeInput} />
                <span className={styles.error}>{errors.password}</span>

                <input type='password' name='confirm' placeholder='Confirm Password' value={values.confirm} onChange={this.handleChangeInput} />
                <span className={styles.error}>{errors.confirm}</span>

                <button type='submit'>Sign Up</button>
            </form>
        )
    }
}
