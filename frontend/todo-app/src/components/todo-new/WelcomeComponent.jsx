import { Component } from 'react'
import { Link } from 'react-router-dom'
import HelloWorldService from './js/HelloWorldService.js'
class WelcomeComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            welcomeMessage: ''
        }
        this.retrieveWelcomeMessage = this.retrieveWelcomeMessage.bind(this)
    }
    render() {
        return (
            <div>
                <div className="container">
                    <h3>Welcome {this.props.match.params.name}. You can manage your todos <Link to="/todos"> here.</Link></h3>
                </div>
                <div className="container">
                    <h1>Click here to get a customized welcome message.</h1>
                    <button onClick={this.retrieveWelcomeMessage} className="btn btn-success">Welcome</button>
                </div>
                <div className="container">
                    {this.state.welcomeMessage}
                </div>
            </div>
        )
    }

    retrieveWelcomeMessage() {
        HelloWorldService.executeHelloWorldPathVariableService(this.props.match.params.name).then(
            response => {
                this.setState({ welcomeMessage: response.data.message })
            }
        )
    }
}

export default WelcomeComponent