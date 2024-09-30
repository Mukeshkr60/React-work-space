import { useState } from 'react'
import Layout from './Components/Layout/Layout'
import UseStateIntro from './Components/UseStateHook/UseStateIntro'
import ClassBasedIntro from './Components/classBasedComp/ClassBasedIntro'
import PropsIntro from './Components/Propes/PropsIntro'
//import { ConditonRenIntro } from './Components/Conditionrandring/ConditonRenIntro'
import EventsIntro from './Components/SyntheticEvents/EventsIntro'
import UseEffectIntro from './Components/UseEffect/UseEffectIntro'
import UseMemoInto from './Components/UsememoHook/UseMemoInto'
import UseReducerIntro from './Components/UseReducerHook/UseReducerIntro'


function App() {
  const [count, setCount] = useState(0)

  return (
   
            // <Layout/>

            // useState hook
            // <div>
            //  {/* <UseStateIntro/> */}
            //  <ClassBasedIntro/>
            // </div>
          //   <div>
          //  <PropsIntro></PropsIntro>
          //   </div>
          // <div>
          //   <ConditonRenIntro/>
          // </div>

          //  <div>
          //    <EventsIntro/> 
          //  </div>

          // <div>
          //   <UseEffectIntro/>
          // </div>

          // <div>
          //   <UseMemoInto/>
          // </div>

          <div>
            <UseReducerIntro/>
          </div>


          
  )
}

export default App



