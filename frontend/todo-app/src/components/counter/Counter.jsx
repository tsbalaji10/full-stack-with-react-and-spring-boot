import React, { Component } from "react";
import './Counter.css'
import PropTypes from 'prop-types'

class Counter extends Component {

    constructor() {
        super();
        this.state = {
            c: 0
        }
        this.increment = this.increment.bind(this)
        this.decrement = this.decrement.bind(this)
        this.reset = this.reset.bind(this)
    }
    render() {
        return (
            <div className="App">
                <CounterButton incrementMethod={this.increment} decrementMethod={this.decrement} />
                <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement} />
                <span className="count">{this.state.c}</span>
                <div><button className="reset" onClick={this.reset}>Reset</button></div>
            </div>
        )
    }

    increment(by) {
        //   console.log(`increment in parent - ${by}`)
        this.setState(
            (prevState) => {
                return { c: prevState.c + by }
            }
        )
    }

    decrement(by) {
        this.setState(
            (prevState) => {
                return { c: this.state.c - by }
            }
        )
    }

    reset() {
        this.setState(
            { c: 0 }
        )
    }
}
class CounterButton extends Component {
    // constructor() {
    //     super();
        // this.state = {
        //     c: 0
        // }
        // this.increment = this.increment.bind(this);
        // this.decrement = this.decrement.bind(this);
    // }
    render() {
        // const style={fontSize:"50px",padding:"15px 30px"} style={style}
        return (
            <div className="counter">
                <button onClick={()=>this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                {/* <span className="count">{this.state.c}</span> */}
                <button onClick={()=>this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
            </div>
        )
    }

    /*increment() {
        this.setState(
            (prevState) => {
                return { c: prevState.c + this.props.by }
            }
        )
        this.props.incrementMethod(this.props.by);// Moving the state from child to parent
    }
    decrement() {
        this.setState(
            (prevState) => {
                return { c: prevState.c - this.props.by }
            }
        )
        this.props.decrementMethod(this.props.by)
    }
*/
}

CounterButton.defaultProps = {
    by: 1
}

CounterButton.propTypes = {
    by: PropTypes.number
}

export default Counter