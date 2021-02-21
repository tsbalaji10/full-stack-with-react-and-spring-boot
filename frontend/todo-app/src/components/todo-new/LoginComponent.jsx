import React, { Component } from "react";
import AuthenticationService from "./js/AuthenticationService";

class LoginComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            userName: 'in28minutes',
            password: '',
            hasLoginFailed: false,
            showSuccessMessage: false
        }
        this.handleChange = this.handleChange.bind(this)
        this.loginClicked=this.loginClicked.bind(this)
    }
    render() {
        return (
            <div className="container">
                <h1>Login</h1>
                {this.state.hasLoginFailed && <div className="alert alert-warning">Invalid Credentials</div>}
                {this.state.showSuccessMessage && <div>Login Successful</div>}
                User Name:<input type="text" name="username" value={this.state.userName} onChange={this.handleChange} />
                Password:<input type="password" name="password" value={this.state.password} onChange={this.handleChange} />
                <button className="btn btn-success" onClick={this.loginClicked}>Login</button>
            </div>
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

    loginClicked() {
        console.log("login clicked")
        if(this.state.userName==='in28minutes' && this.state.password==='dummy'){
            AuthenticationService.registerSuccessfulLogin(this.state.userName,this.state.password)
            this.props.history.push(`/welcome/${this.state.userName}`)
        }else{
            this.setState({hasLoginFailed:true})
            this.setState({showSuccessMessage:false})
        }
    }
}
export default LoginComponent