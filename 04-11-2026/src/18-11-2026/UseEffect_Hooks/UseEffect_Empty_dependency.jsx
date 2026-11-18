import {useState,useEffect} from 'react'

function UseEffect_Empty_dependency() {
    const [count,setCount]=useState(0);
    useEffect(()=>{
      console.log("count:",count)
    },[])
  return (
    <div>
        <h2>UseEffect_Empty_dependency</h2>
        <h2>count:{count}</h2>
        <button onClick={()=>{setCount(count+1)}}>Increase</button>

    </div>
  )
}

export default UseEffect_Empty_dependency