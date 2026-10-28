import{useState} from "react";

function Dynamic_rendering(){
    const[count,setCount]=useState(0);
    return(
        <div>
            <h2>Dynamic rendering</h2>
            <h3>count: {count}</h3>
            <button onClick={()=>setCount(count+1)} > Increase</button>
            </div>   
    );
}
export default Dynamic_rendering;