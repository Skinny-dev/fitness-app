import React from 'react'
import CircleImage from '../images/circles.png'
import './style/card.css'
/*
    create component by function
*/

function Card(props){
    return (
        <div className="card mx-auto Fitness-Card"
            style={{
                backgroundImage:`url(${ CircleImage }), linear-gradient(to right, ${ props.leftColor }, ${ props.rightColor })`
            }}
        >
            <div className="card-body">
                <div className="row center">
                    <div className="col-6">
                        <img src={ props.image } width="100" height="100" alt="vete la versh" className="float-right"/>
                    </div>
                    <div className="col-6 Fitness-Card-Info">
                             <h1>{ props.title }</h1>
                            <p> { props.description }</p>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Card