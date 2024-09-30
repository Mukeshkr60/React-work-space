import React from 'react'

const PropsEx3Child = () => {

  let state = props.props.state 
  let setState = props.props.setState 
  return (
    <div>
     <button onClick={ ()=> {
      state = setState+1
     }}>
      Increment</button>
    </div>
  )
}

export default PropsEx3Child