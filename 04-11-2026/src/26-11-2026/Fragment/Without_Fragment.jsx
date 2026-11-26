import {useState} from 'react'

function Without_Fragment() {
    const [name,setName]=useState("Ramesh Kumar");

    const handle=()=>{setName("Raj kumar")}
  return (
    <div>
      <h2>Without_Fragment</h2>
      <h2>Name:{name}</h2>
      <button onClick={handle}>Change Name</button>
    </div>
  )
}

export default Without_Fragment