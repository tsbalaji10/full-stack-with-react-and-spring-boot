import react, { Component } from 'react'
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'
import HeaderComponent from '../todo-new/HeaderComponent'
import LoginComponent from '../todo-new/LoginComponent'
import WelcomeComponent from '../todo-new/WelcomeComponent'
import AuthenticatedRoute from '../todo-new/AuthenticatedRoute'
import ListTodosComponent from '../todo-new/ListTodosComponent'
import TodoComponent from '../todo-new/TodoComponent'
import LogoutComponent from '../todo-new/LogoutComponent'
import ErrorComponent from '../todo-new/ErrorComponent'
import FooterComponent from '../todo-new/FooterComponent'

class TodoApp extends Component {
    render() {
        return (
            <div className="TodoApp">
                <Router>
                    <HeaderComponent />
                    <Switch>
                        <Route path="/" exact component={LoginComponent} />
                        <Route path="/login" component={LoginComponent} />
                        <AuthenticatedRoute path="/welcome/:name" component={WelcomeComponent} />
                        <AuthenticatedRoute path="/todo/:id" component={TodoComponent} />
                        <AuthenticatedRoute path="/todos" component={ListTodosComponent} />
                        <AuthenticatedRoute path="/logout" component={LogoutComponent} />
                        <Route component={ErrorComponent} />
                    </Switch>
                </Router>
                <FooterComponent />
            </div>
        )
    }
}
export default TodoApp