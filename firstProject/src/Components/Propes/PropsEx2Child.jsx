import React from 'react'

const PropsEx2Child = (props) => {
   console.log(props.props.state)
   let state = props.props.state
   let setState = props.props.setState

  return (
    <div>
        <h1> Count : {state}</h1>
        <button onClick = { ()=> {
            setState(state+1)
        }}>
          <h1>Increment</h1>  </button>
    </div>
  )
}

export default PropsEx2Child