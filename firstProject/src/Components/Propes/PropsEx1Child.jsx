import React from 'react'

const PropsEx1Child = (props) => {
    console.log(props)
    props.fun()
  return (
    <div>PropsEx1Child</div>
  )
}

export default PropsEx1Child