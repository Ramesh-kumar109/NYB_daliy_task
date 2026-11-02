import{useState,useEffect} from 'react'

function ReactHooks() {
    const [count,setCount]=useState(0);

    useEffect(()=>{
        console.log(`you clicked ${count} times`);
    },[count]);
  return (
    <div>
        <h2>ReactHooks</h2>
        <button onClick={()=>setCount(count+1)}>Click me</button>
        <p>You clicked {count} times</p>
    </div>
  )
}
export default ReactHooks