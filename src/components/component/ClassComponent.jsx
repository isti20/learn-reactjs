import React, { Component } from 'react'

class CComponent extends Component {
    state = {
        counter: 0
    }

    addCounter = () => {
        const { counter } = this.state
        const nextCounter = counter + 1
        this.setState({ counter: nextCounter})
    }

    render() {
        const { counter } = this.state
        return (
            <div>
                <h1>Class Component</h1>
                <p>counter: {counter}</p>
                <button onClick={this.addCounter}>Add counter</button>
            </div>
        )
    }
}

export default CComponent