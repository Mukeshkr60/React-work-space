// import React , {useState} from 'react'

// const UseStateEx3 = () => {
//     let [state, setState] = useState(0)
//     console.log(state)
//   return (
//     <div>
//         <p> count : {state} </p>
//         <button onClick={handlclick}> Increment </button>
//     </div>
//   )
// }

// export default UseStateEx3

import React , {useState} from 'react'

const UseStateEx3 = () => {
    let [state, setState] = useState("Hiee")
    console.log(state)
    let handlclick = () => {
        setState ("Byee")
    }
  return (
    <div>
        <p>  {state} </p>
        <button onClick={handlclick}> say bye </button>
    </div>
  )
}

export default UseStateEx3