import {useState,useEffect} from 'react'

function UseEffect_with_dependency() {

  const [count,setCount]=useState(0);
  const [name,setName]=useState("Ramesh");
  
  useEffect(()=>{
    console.log("Count Value: ",count)
    console.log("name:",name);

    return()=>{
        console.log("cleanup count",count)
    }
  },[count,name]);
  return (
    <div>
        <h2>UseEffect_with_dependency</h2>
        <h2>count: {count}</h2>
        <h2>name:{name}</h2>
        <button onClick={()=>{setCount(count+1)}}>Increase</button>
        <br />
        <br />
        <button onClick={()=>{setCount(count-1)}}>Decrease</button>
       <br />
       <br />
       <button onClick ={()=>setName("kumar")} >Change name</button>
       <br />
       <br />
       <button onClick ={()=>setName("ramesh")} >Change name</button>

    </div>
  )
}

export default UseEffect_with_dependency