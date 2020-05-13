// forma clasica
/* const element = document.createElement('h1')//creacion de elementos
const element1 = document.createElement('h1') //ejemplo
element.innerText ='Hello word' //al elemento le expecificamos que texto queremos mostrar
element1.innerText = 'Hello andres'
const container  = document.getElementById('root') //creacion del contenedor el indicador es (root) index.html
container.appendChild(element1) //expecificacion del hijo que queremos usar
container.appendChild(element) 
*/

// shape by react

import React from 'react'
import ReactDom from 'react-dom'
// by youtube 
/* const element = <h1>Hello word </h1>
 const conteiner = document.getElementById('root') 
 // ReactDom.render(__QUE__, __DONDE__) 
 ReactDom.render(element, conteiner)
 */ 
// by documentation react

/*const name = 'Andres armas'
const element = <h1>Holaaa  { name }</h1>

ReactDom.render(
    // by jsx 
    element,
    document.getElementById('root')
    // <h1>Hello, world!</h1>,
    // document.getElementById('root')
  ); */


const user = {
   firstName : 'lardin',
   lastName : 'armas',
   avatar: 'http://cdn4.iconfinder.com/data/icons/avatars-xmas-giveaway/128/batman_hero_avatar_comics-256.png'
};  

function formatName(user){
    return user.firstName + ' ' + user.lastName
}
function getGreeting(user){
    if(user){
      return <h1>Hi,  {formatName(user)}</h1>
    }
    return <h1>Hello, Stranger.</h1>
    
}

const element = (
    // <div>{getGreeting(user)}</div>
    // <h1>tu nombre es {formatName(user)}</h1>
    <div>
        <h1>{getGreeting(user)}</h1>
        <img src={user.avatar}/>
        <h1>it is time {new Date().toLocaleTimeString()}, {new Date().toLocaleDateString()}</h1>
    </div> 
)
ReactDom.render(
    element,
    document.getElementById('root')
)
setInterval(getGreeting, 1000)

// function tick(){
//     const element = (
//         <div>
//             <h1>Hello </h1>
//             <h2>it is {new Date().toLocaleTimeString()}</h2>
//         </div>
//     );
//     ReactDom.render(
//         element,
//         document.getElementById('root')
//     )
// }
// setInterval(tick, 1000);
