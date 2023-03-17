import React from 'react';

function EventFunctional() {
    const [username, setUsername] = React.useState('')

    const handleInput = (event) => {
        // console.log(event.target.value)
        setUsername(event.target.value)
    }

    const handleSubmit = () => {
        console.log(username)
    }

    const handleClick = (event, id) => {
        console.log(event, id)
    }

    return (
        <div>
            <input type="text" name="username" onChange={handleInput}/>
            <button type="submit" onClick={handleSubmit}>Submit</button>
            <br />
            <button 
            type="submit" 
            onClick={(event) => handleClick(event, { id: 123, name: "La la land"})}
            >Click me!</button>
        </div>
    )
}

export default EventFunctional