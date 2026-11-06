import {useState,useEffect,useRef} from 'react'

function UseRef() {

    const [count,setCount]=useState(0);
    const previousCount = useRef(0);

    useEffect(()=>{
        previousCount.current=count;
    },[count]);
  return (
    <div>
        <h2>currnt:{count}</h2>
        <h2>Previous count:{previousCount.current}</h2>
         <button onClick={()=>setCount(count+1)}>Increase</button>
    </div>
  )
}

export default UseRef