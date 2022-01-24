import React, { Component } from 'react';
import clsx from 'clsx';
import { SignUp } from './componet/SignUp/SignUp';
import { SignIn } from './componet/SignIn/SignIn';
import { Sidebar } from './componet/Sidebar/Sidebar';
import styles from './Projects.module.scss'
import { useNavigate } from 'react-router-dom';

class Projects extends Component {
    constructor() {
        super();
        const item = localStorage.getItem('data')
        const information = item ? JSON.parse(item) : [];
        this.state = {
            isAdd: false,
            information
        }
    }

    onChange = () => {
        this.setState({
            isAdd: !this.state.isAdd
        })
    }

    onSubmit = (information) => {
        this.setState((prev) => {
            return {
                information: [information, ...prev.information]
            }
        }, this.updateLocalStorage)
    }

    onSubmitSignIn = (information) => {
        // console.log(information);
        const items = this.getLocalStorage();
        // console.log('items i n local storage', items)
        // console.log(information);
        const item = items.find(function (item) {
            if (item.email === information.email && item.password === information.password)
                return true
        })
        if (item) {
            localStorage.setItem('IS_LOGGED_IN', JSON.stringify(true));
            this.props.navigate('/profile');
        } else {
            alert('It\'s wrong ,you must sign up')
        }
    }

    updateLocalStorage = () => { localStorage.setItem('data', JSON.stringify(this.state.information)) };
    getLocalStorage = () => {
        const result = localStorage.getItem('data');
        return result ? JSON.parse(result) : [];
    };

    render() {
        // const {rightPanelActive} = this.state.isAdd ? styles.rightPanelActive : styles ;
        // console.log(rightPanelActive)
        return (
            <div className={styles.root}>
                <div className={clsx(styles.container, { [styles.rightPanelActive]: this.state.isAdd })} id='container'>
                    <div className={clsx(styles.formContainer, styles.signUpContainer)}>
                        <SignUp className={styles.root}
                            onSave={this.onSubmit} />
                    </div>
                    <div className={`${styles.formContainer} ${styles.signInContainer}`}>
                        <SignIn onSaveSignIn={this.onSubmitSignIn} />
                    </div>
                    <div className={styles.overlayContainer}>
                        <Sidebar
                            onChange={this.onChange}
                            isAdd={this.state.isAdd}
                        />
                    </div>
                </div >
            </div>

        )
    }
}
const Auth = (() => {
    const navigate = useNavigate()
    return <Projects navigate={navigate} />
}) 
export default Auth