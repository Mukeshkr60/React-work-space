import React, { useState } from 'react'

const UseStateEx4 = () => {
    let [state, setState] = useState("red")
  return (
    <div>
        <div style={{width: "300px" , height: "300px", background : state }}>
        </div>

        <button className='border-[1px] border-black p-1' onClick={ ()=> {setState("red")}}>red</button>
        <button className='border-[1px] border-black p-1' onClick={ ()=> {setState("blue")}}>blue</button>
        <button className='border-[1px] border-black p-1' onClick={ ()=> {setState("green")}}>green</button>
        <button className='border-[1px] border-black p-1' onClick={ ()=> {setState("black")}}>black</button>
        <button className='border-[1px] border-black p-1' onClick={ ()=> {setState("gray")}}>gray</button>
        <button className='border-[1px] border-black p-1' onClick={ ()=> {setState("yellow")}}>yellow</button>
    </div>
  )
}

export default UseStateEx4