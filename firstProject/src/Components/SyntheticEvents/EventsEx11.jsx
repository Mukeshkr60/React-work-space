import React, { useRef } from 'react'

const EventsEx11 = () => {

    let sectionRef = useRef();
   

let handleClick = () =>{
    console.log(sectionRef)
    sectionRef.current.style.background = "red"
}

  return (
    <div>
        
     <div id='div1' className='w-[100px] h-[100px] border-[1px] border-black'
     onClick={handleClick}></div>

     <div id='div2' ref={sectionRef} className='w-[100px] h-[100px] border-[1px] border-black'></div>

     <div id='div3'  className='w-[100px] h-[100px] border-[1px] border-black'></div>

     <div id='div4'  className='w-[100px] h-[100px] border-[1px] border-black'></div>

    </div>
  )
}

export default EventsEx11