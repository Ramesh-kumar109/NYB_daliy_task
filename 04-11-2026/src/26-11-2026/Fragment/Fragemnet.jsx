import React,{useState} from 'react'


function Fragemnet() {

    const [name,setName]=useState("Ramesh")
  return (
    <React.Fragment>
        <h2>using a Fragemnet</h2>
        <h2>Name:{name}</h2>
        <button onClick={()=>{setName("Kumar")}}>Change Name</button>
    </React.Fragment>
  )
}

export default Fragemnet