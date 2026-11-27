import React,{useState} from 'react'

function Child_Components(props) {
    console.log("Child components rendering");
    const[count,setCount]=useState(0);

    const increase=()=>{setCount(count+1)};
    const decrease=()=>{setCount(count-1)};
  return (
    <div>
        <h2>Child_Components</h2>
        <h2>Hello:{props.name}</h2>

        <h2>count:{count}</h2>

        <button onClick={increase}>Increase</button>

        <br />
        <button onClick={decrease}>Decrease</button>


    </div>
  )
}

export default Child_Components