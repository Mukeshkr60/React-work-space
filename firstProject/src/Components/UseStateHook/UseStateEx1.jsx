import React from 'react'

const UseStateEx1 = () => {
    let count = 0
  return (
    <div>
        <button onClick={ () =>
         {console.log("Incrementing the count")
            count++
            console.log(count)
         }  
          
        }> Increment</button>
    </div>


  )
}

export default UseStateEx1