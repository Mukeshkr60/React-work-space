import React from 'react'
import PropsEx7Child1 from './PropsEx7Child1'

const PropsEx7 = () => {
    let name = "Alexa"
  return (
    <div>
      <PropsEx7Child1
      props={name}/>
    </div>
  )
}

export default PropsEx7