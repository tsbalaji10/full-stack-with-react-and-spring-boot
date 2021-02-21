import { Component } from "react";
import TodoDataService from "../todo-new/js/TodoDataService.js";
import AuthenticationService from "../todo-new/js/AuthenticationService.js";
import moment from 'moment'

class ListTodosComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            todos: [],
            message: ''
        }
        this.updateTodoClicked = this.updateTodoClicked.bind(this)
        this.deleteTodoClicked = this.deleteTodoClicked.bind(this)
        this.addTodoClicked = this.addTodoClicked.bind(this)
    }
    render() {
        return (
            <div>
                <h1>List Todos</h1>
                <div className='container'>
                    <table className='table'>
                        <thead>
                            <tr>
                                <th>Description</th>
                                <th>IsCompleted?</th>
                                <th>Target Date</th>
                                <th>Update</th>
                                <th>Delete</th>
                            </tr>
                        </thead>
                        <tbody>
                            {
                                this.state.todos.map(
                                    todo =>
                                        <tr key={todo.id}>
                                            <td>{todo.description}</td>
                                            <td>{todo.done}</td>
                                            <td>{moment(todo.targetDate).format('YYYY-MM-DD')}</td>
                                            <td><button className="btn btn-success" onClick={() => this.updateTodoClicked(todo.id)}>Update</button></td>
                                            <td><button className="btn btn-warning" onClick={() => this.deleteTodoClicked(todo.id)}>Delete</button></td>

                                        </tr>
                                )
                            }
                        </tbody>

                    </table>
                    <button className="btn btn-success" onClick={this.addTodoClicked}>Add</button>
                </div>
            </div>

        )
    }
    componentDidMount() {
        console.log('componentDidMount')
        this.refreshTodos()
    }
    shouldComponentUpdate() {
        return true
    }

    refreshTodos() {
        let userName = AuthenticationService.getLoggedInUserName()
        console.log(userName)
        TodoDataService.retrieveAllTodos(userName).then(
            response => {
                console.log(response.data)
                this.setState({ todos: response.data })
            }
        )
    }
    updateTodoClicked(id) {
        this.props.history.push(`/todo/${id}`)
    }

    deleteTodoClicked(id) {
        let userName = AuthenticationService.getLoggedInUserName()
        TodoDataService.deleteTodo(userName, id).
            then(
                response => {
                    this.setState({ message: `Delete of Todo ${id} successful` })
                    this.refreshTodos()
                }
            )
    }

    addTodoClicked() {
        this.props.history.push(`todo/-1`)
    }
}

export default ListTodosComponent