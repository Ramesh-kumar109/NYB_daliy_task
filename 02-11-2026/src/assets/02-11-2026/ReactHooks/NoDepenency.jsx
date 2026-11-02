import{useState,useEffect} from 'react'

function NoDepenency() {
    const[count,setCount]=useState(0);
     useEffect(()=>{
        console.log("useEffect without dependency");
     })
  return (
    <div>
        <h2>NoDepenency</h2>
        <h2>count:{count}</h2>
        <button onClick={()=>setCount(count+1)}>Increment</button>
    </div>
  )
}

export default NoDepenency