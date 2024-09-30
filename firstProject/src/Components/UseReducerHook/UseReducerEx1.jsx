import React, { useReducer, useState } from 'react'

const UseReducerEx1 = () => {

    let initialSate = {
        count : 0
    }
   let reducerFunction = (state, action) =>{
     console.log(action);
       switch(action){
           case "increment" : return {count : state.count+1} ; break ;
           case "decrement" : return {count : state.count-1} ; break ;
           case "reset" : return {count : initialSate.count} ; break ;
        default : 
        console.error("wrong dispatch")
        return {count: state.count};
       }
   }

    let [state, dispatch] = useReducer( reducerFunction,initialSate)
    


  return (
    <div>
   <h1> count : {state.count} </h1>
   <button  onClick={ ()=> {dispatch("increment")}} >increment</button>
   <br />
   <button  onClick={ ()=> {dispatch("decrement")}} >decrement</button>
   <br />
   <button  onClick={ ()=> {dispatch("reset")}} >reset</button>
    </div>
  ) 
}

export default UseReducerEx1
