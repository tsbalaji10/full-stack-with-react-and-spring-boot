import React, { Component } from "react";

class CounterTest extends Component {
    constructor() {
        super()
        this.state = {
            count: 0
        }
        this.increment = this.increment.bind(this);
        this.decrement = this.decrement.bind(this);
    }
    render() {
        return (
            <div className="CounterTest">
                < CounterButton by={1} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton >
                <CounterButton by={5} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <CounterButton by={10} incrementMethod={this.increment} decrementMethod={this.decrement}></CounterButton>
                <span className="count">{this.state.count}</span>
            </div>
        )
    }

    increment(by) {
        // console.log('Incremented by- ' + by)
        this.setState(
            (prevState) => {
                return {
                    count: prevState.count + by
                }
            }
        )
    }

    decrement(by) {
        // console.log(`decremented by - ${by}`)
        this.setState(
            (prevState) => {
                return {
                    count: prevState.count - by
                }
            }
        )
    }
}

class CounterButton extends Component {
    // constructor() {
    //     super()
        /*this.state = {
            counter: 0
        }*/
        // this.increment = this.increment.bind(this);
        // this.decrement = this.decrement.bind(this);
    // }
    render() {
        return (
            <div className="CounterButton">
                <button onClick={()=>this.props.incrementMethod(this.props.by)}>+{this.props.by}</button>
                <button onClick={()=>this.props.decrementMethod(this.props.by)}>-{this.props.by}</button>
                {/* <span className="count">{this.state.counter}</span> */}
            </div>

        )
    }

  /*  increment() {
        this.setState(
            (prevState) => {
                return {
                    counter: prevState.counter + this.props.by
                }
            }
        )
        this.props.incrementMethod(this.props.by)
    }

    decrement() {
        this.setState(
            (prevState) => {
                return {
                    counter: prevState.counter - this.props.by
                }
            }
        )
        this.props.decrementMethod(this.props.by)
    }*/
}

export default CounterTest