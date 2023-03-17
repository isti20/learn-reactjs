import React, { Component } from 'react'

class EventClass1 extends Component {
    state = {
        counter:0,
    }

    handleClick() {
        console.log("Handle Click Me!")
        const { counter } = this.state
        this.setState({counter: counter + 1})
    }

    handleClickArrowFunction = (event) => {
        console.log(event.target)
        const { counter } = this.state
        this.setState({counter: counter + 1})
    }

    handleSubmit = (event) => {
        event.preventDefault()
        console.log(event)
    }

    render() {
        console.log(this.state.counter)
        return (
            <div>
                <button 
                style={{height:40, width:100, fontSize:17}}
                onClick={this.handleClick.bind(this)} 
                >
                    Click me!
                </button>

                <button 
                style={{height:40, width:100, fontSize:17}}
                onClick={this.handleClickArrowFunction} 
                >
                    Click here!
                </button>

                <form onSubmit={this.handleSubmit}>
                    <input type="text" name="username" />
                    <button type="submit">Submit</button>
                </form>
            </div>
        )
    }
}

export default EventClass1