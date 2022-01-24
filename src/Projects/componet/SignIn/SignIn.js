import React, { Component } from 'react';
import { signInValidation } from '../../validation';
import styles from './SignIn.module.scss';

export class SignIn extends Component {
    state = {
        values: {
            email: '',
            password: '',
        },
        errors: {}
    }

    //validate 

    //submit

    handleChangeInput = (event) => {
        const name = event.target.name;
        const value = event.target.value;

        this.setState({
            values: { ...this.state.values, [name]: value }
        }, this.validate)
    }

    onSubmit = (event) => {
        event.preventDefault();
        const { email , password} = this.state.values ; 
        this.props.onSaveSignIn({email , password})
        // console.log(this.state.errors)
        // getLocalStorage = () => {
        //     const result = localStorage.getItem('data');
        //     return result ? JSON.parse(result) : [];
        // }
        
    }

    validate = () => {
        // console.log('validating')
        signInValidation.validate(this.state.values).then((() => {
            this.setState({
                errors: {}
            })
        }), (error) => {
            // console.log(
            //     error.path, error.errors[0]
            // )
            this.setState({
                errors: {
                    [error.path]: error.errors[0]
                }
            })
        })
    }


    render() {
        const { values, errors } = this.state;
        // console.log(values);
        return (
            <form action='#' onSubmit={this.onSubmit}>
                <h1>Sign in</h1>
                <div className={styles.socialContainer}>
                    <a href='#' className={styles.social}><i className='fab fa-facebook-f'></i></a>
                    <a href='#' className={styles.social}><i className='fab fa-google-plus-g'></i></a>
                    <a href='#' className={styles.social}><i className='fab fa-linkedin-in'></i></a>
                </div>
                <span>or use your account</span>
                <input type="email" name='email' placeholder='Email'
                    onChange={this.handleChangeInput}
                    value={values.email} />
                <span className={styles.error}>{errors.email}</span>
                <input type="password" name='password' placeholder='Password'
                    onChange={this.handleChangeInput}
                    value={values.password} />
                <span className={styles.error}>{errors.password}</span>
                <a href='#'>Forgot your password</a>
                <button>Sign In</button>
            </form>
        )
    }
}
