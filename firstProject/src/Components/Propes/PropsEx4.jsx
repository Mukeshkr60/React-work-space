import React from 'react'
import PropsEx4Child from './PropsEx4Child'

const PropsEx4 = () => {
  return (
    <div>

        {/* passing string as a props without jsx expression.
        only string is allowed to send as a props witout jsx expression,
        other data types need to be 
        wrapped within a jsx expression. */}
        
       < PropsEx4Child props = "Kumar"/>
    </div>
  )
}

export default PropsEx4