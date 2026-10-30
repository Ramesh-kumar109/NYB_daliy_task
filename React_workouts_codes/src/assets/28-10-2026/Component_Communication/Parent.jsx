//parent creates a callback function called getName
//
import React from 'react'
import Child1 from './Child1'

const Parent = () => {
    const getName=(name)=>{
        alert("Name:"+name)
    }
  return (
    <div>
        <h2>parent components</h2>
        <Child1 sendData={getName}/>
    </div>
  )
}

export default Parent