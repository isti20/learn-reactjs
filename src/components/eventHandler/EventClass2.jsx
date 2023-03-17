import React, { Component } from 'react'

class EventClass2 extends Component {
    state = {
        counter:0,
        list: [{id: 123, name: "Channel ngoding"}, {id:456, name:"Tutorial React"}]
    }

    handleItem = (event, id) => {
        console.log(event.target, id)
    }

    render() {
        console.log(this.state.counter)
        const { list } = this.state
        return list.map((item) => {
            return (
            <div key={item.id}>
                <h1>{item.name}</h1>
                <button 
                style={{height:100, width:150, fontSize:17}}
                onClick={(event) => this.handleItem(event, item.id)}
                >
                    Click {item.name}
                </button>
            </div>
            )
        })
    }
}

export default EventClass2