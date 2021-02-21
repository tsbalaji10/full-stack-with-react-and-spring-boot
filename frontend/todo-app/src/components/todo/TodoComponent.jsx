import { Formik, Form, Field, ErrorMessage } from 'formik'
import moment from 'moment'
import React, { Component } from 'react'
import TodoDataService from '../../api/todo/TodoDataService'
import AuthenticationService from './AuthenticationService'

class TodoComponent extends Component {
    constructor(props) {
        super(props)
        this.state = {
            id: this.props.match.params.id,
            description: 'Learn Forms',
            targetDate: moment(new Date()).format('YYYY-MM-DD')
        }
        this.onSubmit = this.onSubmit.bind(this)
        this.validate = this.validate.bind(this)
    }
    onSubmit(values) {
        // console.log(values)
        let username = AuthenticationService.getLoggedInUserName()
        if (this.state.id === -1) {
            TodoDataService.createTodo(username, {
                id: this.state.id,
                description: values.description,
                targetDate: values.targetDate
            }).then(() =>
                this.props.history.push('/todos')
            )
        } else {
            TodoDataService.updateTodo(username, this.state.id, {
                id: this.state.id,
                description: values.description,
                targetDate: values.targetDate
            }).then(() =>
                this.props.history.push('/todos')
            )
        }
    }
    componentDidMount() {
        if(this.state.id===-1){
            return
        }
        let username = AuthenticationService.getLoggedInUserName()
        TodoDataService.retrieveTodo(username, this.props.match.params.id)
            .then(response => this.setState({
                description: response.data.description,
                targetDate: moment(response.data.targetDate).format('YYYY-MM-DD')
            }))
    }
    validate(values) {
        let errors = {}
        if (!values.description) {
            errors.description = 'Enter a description'
        } else if (values.description.length < 5) {
            errors.description = 'Enter atleast 5 Characters in Description'
        }
        if (!moment(values.targetDate).isValid) {
            errors.description = 'Enter a valid Target Date'
        }
        return errors
    }
    render() {
        let { description, targetDate } = this.state
        // let description=this.state.description
        // let targetDate=this.state.targetDate
        return (
            <div>
                <div>
                    <h1>Todo</h1>
                    <div className='container'>
                        <Formik initialValues={{ description, targetDate }} onSubmit={this.onSubmit} validate={this.validate}
                            validateOnBlur={false} validateOnChange={false} enableReinitialize={true}>
                            {(props) => (
                                <Form>
                                    <ErrorMessage name="description" component="div" className="alert alert-warning" />
                                    <ErrorMessage name="targetDate" component="div" className="alert alert-warning" />
                                    <fieldset className="form-group">
                                        <label>Description</label>
                                        <Field className="form-control" type="text" name="description" />
                                    </fieldset>
                                    <fieldset className="form-group">
                                        <label>Target Date</label>
                                        <Field className="form-control" type="date" name="targetDate" />
                                    </fieldset>
                                    <button className="btn btn-success" type="submit">Save</button>
                                </Form>
                            )}
                        </Formik>
                    </div>
                </div>
            </div>
        )
    }
}


export default TodoComponent