import {useState} from 'react'
import Count from './PureComponents';

function ParentComponents() {

    const [count,setCount]=useState(0);
    const [name,setName]=useState("Ramesh Kumar");

  
    const handlecountup= ()=>{setCount( count+1)};
    const handlecountdown=()=>{setCount(count-1)};
    const handlename=()=>{setName("sanjai kumar")};
  return (

    <div>
        <h2>ParentComponents</h2>
        <Count count={count}/>
        <h2>name:{name}</h2>
        <button onClick={handlecountup}>Increase</button>
        <br />
        <br />
        <button onClick={handlecountdown}>Decrease</button>

        <br />
        <br />
        <button onClick={handlename}>Name Change</button>
        

    </div>
  )
}

export default ParentComponents