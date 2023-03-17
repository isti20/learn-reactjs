import React, { Component } from 'react'
import Level from './Level';

class Lifecycle extends Component {

    state = {
        navigation: "initial",
        counter: 0
    }

    componentDidMount() {
        console.log("Component DID MOUNT")
        setTimeout(() => {
            this.setState({ navigation: "ready"})
        }, 3000);
    }

    componentDidUpdate(prevProps, prevState) {
        console.log("Component DID UPDATE")
        console.log("PREV", prevProps, prevState)
        console.log("CURRENT", this.state, this.props)
    }

    handleAddCounter = () => {
        const { navigation, counter } = this.state
        this.setState({ counter: counter + 1})

        if (navigation === "initial") {
            return <p>Loading</p>
        }
    }

    render() {
        console.log("Component RENDER")
        const { counter } = this.state

        return (
            <div>
                <h2>Counter: { counter }</h2>
                <Level level={counter}/>
                <button onClick={this.handleAddCounter}>Add Counter</button>
            </div>
        )
    }
}

export default Lifecycle