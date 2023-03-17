import React from 'react'

const ComponentJSX = () => {
    return (
        <div id= "element-main" className='text text-sm'>
            <label htmlFor=''>Label</label>
            <h1 onClick={() => console.log("JSX")}>Component JSX</h1>
            <p>Ini adalah component JSX</p>
        </div>
    )

    //Component without JSX
    // return React.createElement(
    //     "div", 
    //     {id: "element-main", class: "title"}, 
    //     React.createElement(
    //         "h1", 
    //         null, 
    //         "Component JSX"
    //     ),
    //     React.createElement(
    //         "div", 
    //         null, 
    //         React.createElement(
    //             "p",
    //             null,
    //             "Ini adalah component JSX"
    //         )
    //     )
    // )
}

export default ComponentJSX