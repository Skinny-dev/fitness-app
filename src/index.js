/*
    forma clasic en react al inciar 

    const element = document.createElement('h1') // creamos elemeto 
    element.innerText = 'Hello Karla' // Texto a mostros
    const container = document.getElementById('root') // Contenedor o indicardor es (root) index.html
    container.appendChild(element)

    fin de lo clasico 
*/

import React from 'react'
import ReactDom from 'react-dom'
import Card from './components/Card'
import 'bootstrap/dist/css/bootstrap.css'

ReactDom.render(
    <Card
        title = "Vete a la versh"
        description = "El mejor contenido de vete la versh"
        image = "https://firebasestorage.googleapis.com/v0/b/fitness-a1456.appspot.com/o/vete_versh1.jpeg?alt=media&token=d69855f7-baf0-4799-b736-bb6a930b5c26" 
        leftColor = "#A74CF2"
        rightColor = "#617BFB"
    />,
    document.getElementById('root')
)

/*
    const user = {
        firstName: 'andres',
        lastName: 'armas',
        ege: 23,
    }
    function getName(user) {
        return user.firstName + ' ' + user.lastName + ' ' + user.ege
    }
    function getGreeting(user){
        if (user) {
            return <h1>Hola { getName(user) }</h1>
        }
        return <h1>Hello stranger </h1>
    }
    function tick(){
        const element = (
            <div>
                <h1>{getGreeting(user)}</h1>
                <h2>It is {new Date().toLocaleString()}</h2>
            </div>
        )
        ReactDom.render(
            element,
            document.getElementById('root')
        )
    }
    setInterval(tick, 1000)

*/






