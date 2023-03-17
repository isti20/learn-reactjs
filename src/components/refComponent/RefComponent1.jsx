import React, { Component } from 'react'

class RefComponent1 extends Component {
    handleFocus = () => {
        const element = document.getElementById("focus")
        element.focus()
    }

    handleReset = () => {
        const element = document.getElementById("focus")
        element.value = ""
    }

    handleSetValue = () => {
        const element = document.getElementById("focus")
        element.value = "Tutorial reactjs"
    }

    render() {
        return (
            <div>
                <input type="text" id="focus"/>
                <br />
                <button onClick={this.handleFocus}>Focus</button>
                <br />
                <button onClick={this.handleReset}>Reset</button>
                <br />
                <button onClick={this.handleSetValue}>Set Value</button>
            </div>
        )
    }
}

export default RefComponent1