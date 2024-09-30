import React from 'react'
import { useMemo ,useState} from 'react';

const UseMemoEx1 = () => {
    let [count1, setCount1] = useState(0);
    let [count2, setCount2] = useState(0);

   let memoizedValue = useMemo( () => {
    let i =0 ;
    while(i<1000000000){
        i++;
    }
    if(count1 %2 ==0){
        return "Even"
    }else{
        return "Odd"
    }
   }, [count1])

  return (
    <div>
     
   <div>
    <button onClick={ ()=> {setCount1 (count1+1)} }> count1:{memoizedValue}</button>
   </div>

   <div>
    <button onClick={ ()=> {setCount2(count2+1)}}> count2:{count2}</button>
   </div>


    </div>
  )
}

export default UseMemoEx1
