import {useState} from "react";
function State(){
    const [name,setName]=useState("ramu")
    return(
        <div>
            <h1>Hello:{name}!</h1>
            <button onClick={()=>setName("Ramesh")}>change name</button>
            <button onClick={()=>setName("ramu")}>reset</button>
        </div>
    );
}
export default State;