import { useState, useCallback, memo } from 'react'


const Render = memo(function Render({ onClick }) {
    console.log("Child components");
    return(
        <div>
            <button onClick={onClick}> Child Button Click </button>
        </div>
    );
});

function Child() {
    const [count,setCount]=useState(0);
    const handle=useCallback(()=>{
     console.log("Child components rendering");
    },[]);

    const btnclick=()=>{setCount(count+1)}
  return (
    <div>
        <h2>Count:{count}</h2>
        <button onClick={btnclick}>Click me</button>
        <Render onClick={handle} />
    </div>
  )
}

export default Child;