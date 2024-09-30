// rcc   :-  shortcut

import React, { Component } from 'react'

class ClassBasedIntro extends Component {

  constructor(){
    super()
    this.state = {
        count : 0
    }
  }

  render() {
    return (
      <div>
    
   
       
     <p> count : {this.state.count}</p>
     
        <button onClick={ ()=> {
            this.setState( {count : this.state.count + 1})
        }}> Increment</button>
   
      </div>
    )
  }
}
export default  ClassBasedIntro 
