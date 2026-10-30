import React from 'react'

const Child1 = ({sendData}) => {
    const handleClick=()=>{
        sendData("Ramesh");
    }
  return (
    <div>  <h2>Child components</h2>
    <button OnClick={handleClick}>send data to parent</button>
    </div>
  )
}

export default Child1