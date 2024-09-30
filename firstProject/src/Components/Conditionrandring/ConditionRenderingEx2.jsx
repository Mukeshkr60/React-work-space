import React, { useState } from 'react'

const ConditionRenderingEx2 = () => {
    let website = prompt("enter website")
    let [state,setState] = useState(website)
  return (
    <div>
        <a href={state == "w3school" ? "https://www.w3schools.com/" 
          : "https://www.javapoint.com" 
        }>Click</a>
    </div>
  )
}

export default ConditionRenderingEx2