import {useState,useCallback} from 'react'

function React_Callback() {

    const[count,setCount]=useState(0);
    const handleClick=useCallback(()=>{
        console.log("Button clicked");
    },[]);
  return (
    <div>
        <h2>React_Callback</h2>
        <h2>count:{count}</h2>
        <button onClick={()=>{setCount(count+1)}}>increment</button>
        <br />
        <button onClick={handleClick}>Click me</button>
    </div>
  )
}

export default React_Callback;