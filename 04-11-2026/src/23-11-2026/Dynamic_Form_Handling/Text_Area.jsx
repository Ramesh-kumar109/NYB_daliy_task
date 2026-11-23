import {useState} from 'react'

function Text_Area() {
    const [message,setMessage]=useState("");

    const handle=(e)=>{
        setMessage(e.target.value);
    }
  return (
    <div>
        <h2>Text_Area</h2>
        <textarea
        value={message}
        placeholder='Enter your Text'
        onChange={handle}
        rows="5"
        cols="30"
        />

        <h2>message:{message}</h2>
    </div>

  )
}

export default Text_Area