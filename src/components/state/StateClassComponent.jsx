import React, { Component } from 'react';

class Home extends Component {
    // cara 1
    // constructor() {
    //     super()
    //     this.state = {
    //         navigation: "initial",
    //         counter: 0
    //     }
    // }

    // cara 2
    state = {
        navigation: "initial",
        counter: 0
    }

    getData = () => {
        // get data to server
        this.setState({navigation: "ready"})
    }

    addCounter = () => {
        // cara 1
        const { counter } = this.state
        this.setState({ counter: counter +1 })

        // cara 2
        // this.setState((prevState) => ({
        //     ...prevState,
        //     counter: 10
        // }))
    }

    render() {
        console.log("Render Component")
        const { navigation, counter } = this.state

        if (navigation === "initial") {
            return (
                <div>
                    <p>Loading</p>
                    <button onClick={this.getData}>Get Data</button>
                </div>
            )
        }

        return (
            <div>
                <h1>Counter</h1>
                <p>{counter}</p>
                <button onClick={this.addCounter}>Add Counter</button>
            </div>
        )
    }
}

export default Home