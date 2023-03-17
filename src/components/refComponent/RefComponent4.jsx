import React, { Component } from 'react';
import Text from './TextRefComponent4';

class RefComponent4 extends Component {
    textRef = React.createRef()

    handleButton = () => {
        const element = this.textRef.current
        element.handleCalculateNumber()
    }
    render() {
        return (
            <div>
               <Text ref={this.textRef}/>
               <br />
               <button onClick={this.handleButton}>Call Calculate</button>
            </div>
        )
    }
}

export default RefComponent4