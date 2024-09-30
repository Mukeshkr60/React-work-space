import React from 'react'

const ConditionRenderingEx4 = () => {

    let names = ["Abhi" , "Tinku" , "Dolly" , "Chiku" , "Pinki" , "Melodi"]
     
  return (
    <div>
       {
        names.map((val,i) => {
            return (
                <div>
                    <p>{val}</p>
                </div>
            )
        })
       }
        </div>
  )
}

export default ConditionRenderingEx4