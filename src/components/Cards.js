import React from 'react'


function Cards(props){
    return  <div>
            <ul>
                <li>
                    <h1 style={{ color:"black", background: "green" }}>Hola {props.name}</h1>
                </li>
            </ul>
    </div>
}

export default Cards