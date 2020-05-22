//create componet by class 
import React from 'react'

// const user = {
//     first_name : 'andres',
//     last_name : 'armas',
//     edad: 22
// }
class Card extends React.Component{
    render(){
        return <div>
            <ul>
                <li>Hola { this.props.name }</li>
            </ul>
            </div>;
    }
}

export default Card