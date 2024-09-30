import React , { useState} from 'react'

const UseStateEx7 = () => {

    let [state, setState] = useState( ()=> {
        console.log("function Executed") })

        let func = () => {
            console.log("Func execute") }

  return (
    <div>
        <button onClick={ ()=> {state ()}}>Click</button>
    </div>
  )
}

export default UseStateEx7