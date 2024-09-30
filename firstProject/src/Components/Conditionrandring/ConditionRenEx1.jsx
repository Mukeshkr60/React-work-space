import React from 'react'

export const ConditionRenEx1 = () => {
  let [value,setState] = useState(true)
  let handleClick = () => {
    setValue(!value)
  }
  return (
    <div>
      <h1 onClick = {handleClick} >{value == true ? "Positive" : Negative}</h1>
    </div>
  )
}

