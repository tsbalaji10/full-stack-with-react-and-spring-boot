import React, { Component } from "react";
// import {Route, Redirect} from 'react-router-dom'
import AuthenticationService from './AuthenticationService.js'

class LoginComponent extends Component {
    constructor(props) {
        super(props)

        this.state = {
            userName: 'in28minutes',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        // this.handleUserNameChange = this.handleUserNameChange.bind(this);
        // this.handlePasswordChange = this.handlePasswordChange.bind(this);
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked = this.loginClicked.bind(this)

    }
    render() {
        return (
            <div className="container">
                <h1>Login</h1>
                {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Login Successful</div>}
                {/* <ShowInvalidCredentials hasLoginFailed={this.state.hasLoginFailed} /> */}
                {/* <ShowLoginSuccessMessage showSuccessMessage={this.state.showSuccessMessage}/> */}
                User Name: <input type="text" name="username" value={this.state.userName} onChange={this.handleChange} />
                Password: <input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
            </div>
        )
    }

    loginClicked() {
        // if (this.state.userName === 'in28minutes' && this.state.password === 'dummy') {
        //     AuthenticationService.registerSuccessfulLogin(this.state.userName,this.state.password)
        //     this.props.history.push(`/welcome/${this.state.userName}`)
        // this.setState({ showSuccessMessage: true })
        // this.setState({ hasLoginFailed: false })
        // } else {
        //     this.setState({ hasLoginFailed: true })
        //     this.setState({ showSuccessMessage: false })
        // }

        // AuthenticationService.executeBasicAuthenticationService(this.state.userName, this.state.password).then(
        //     (response) => {
        //         console.log(response)
        //         AuthenticationService.registerSuccessfulLogin(this.state.userName, this.state.password)
        //         this.props.history.push(`/welcome/${this.state.userName}`)
        //     }
        // ).catch(
        //     () => {
        //         this.setState({ hasLoginFailed: true })
        //         this.setState({ showSuccessMessage: false })
        //     }
        // )

        AuthenticationService.executeJwtAuthenticationService(this.state.userName, this.state.password).then(
            (response) => {
                console.log(response)
                AuthenticationService.registerSuccessfulLoginForJwt(this.state.userName,response.data.token)
                this.props.history.push(`/welcome/${this.state.userName}`)
            }
        ).catch(
            () => {
                this.setState({ hasLoginFailed: true })
                this.setState({ showSuccessMessage: false })
            }
        )
    }
    handleChange(event) {
        // console.log(event.target.name)
        // console.log(event.target.value)
        this.setState(
            {
                [event.target.name]: event.target.value
            }
        )
    }

    /*handleUserNameChange(event) {
        console.log(event.target.value)
        this.setState(
            { userName: event.target.value }
        )
    }
    handlePasswordChange(event) {
            console.log(event.target.value)
            this.setState(
                {password:event.target.value}
            )
    }*/
}

export default LoginComponent