import React, {useState} from 'react'

const UseStateEx5 = () => {
    
    let [state, useState] = useState(true)
  return (
    <div>
    {/* <p onClick={ () => { setState}}> {state == true ? "ONN" : "OFF"}</p> */}
    <button onClick ={ ()=> {setState (!state)}}> { state == true ? "ONN" : "OFF"}</button>
    </div>
  )
}

export default UseStateEx5