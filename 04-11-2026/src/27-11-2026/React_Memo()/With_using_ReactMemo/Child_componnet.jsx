import React,{useState} from 'react'

const Child=React.memo(function Child({name}){
    console.log("Child components rendering")
return <h2>Hello Mr:{name}</h2>
})

function Child_Component() {
    const [count,setCount]=useState(0);

    const handle=()=>{setCount(count+1)}
  return (
    <div>
        <Child name=" M.S.Dhoni"/>

        <h2>count:{count}</h2>
        <button onClick={handle} >Increase</button>
    </div>
  )
}

export default Child_Component