import {useState} from 'react'

function Controlled_Component() {

    const[name,setName]=useState("");

  return (
    <div>
        <h2>Controlled_Component</h2>
        <h2>Enter your name:{name}</h2>
        <label >Enter your name:</label>
        <input 
        type="text"
        value={name}
        onChange={(e) => setName(e.target.value)}
        placeholder='Enter your name'
         />
    </div>
  )
}

export default Controlled_Component