import React from 'react'
import Notfound from './Pages/Notfound'
import Home from './Pages/Home'
import About from './Pages/About'
import Landing from './Pages/Landing'
//import Notfound from './Pages/Notfound'

const ConditionRenderingEx3 = () => {
 let page = prompt("enter page")
 switch(page){
    case "home" : <Home/> ; break;
    case "landing" : <Landing/> ; break;
    case "about" : <About/> ; break;
    case "home" : <Notfound/> 
 }

  return (
    <div>ConditionRenderingEx3</div>
  )
}

export default ConditionRenderingEx3