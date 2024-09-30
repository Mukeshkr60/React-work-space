import React, { useState } from 'react'

const EventsEx9 = () => {
  let [state, setState]  = useState ({
  username: " " ,
  password: " " ,
  list: [] 
})
  let handleChange = (e) =>{
    console.log(e.target.value)
  }
  
  return (
    <div>
   <form action="">
      
   </form>

    </div>
  )
}

export default EventsEx9