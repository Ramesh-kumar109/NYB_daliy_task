import {useState,useEffect} from 'react'
function EmptyDependency() {
  const[count,setCount]=useState(0);
      useEffect(()=>{
         console.log("useEffectwith dependency");
      },[]);
   return (
     <div>
         <h2>EmptyDependency</h2>
         <h2>count:{count}</h2>
         <button onClick={()=>setCount(count+1)}>Increment</button>
     </div>
   )
}
export default EmptyDependency