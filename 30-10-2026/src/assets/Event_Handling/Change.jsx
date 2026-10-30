import {useState} from "react"
function Change(){

    const [name,setName]=useState("");
    function handlechange(event){
        setName(event.target.value);
    }
    return(
       <div>
       <h2>Onchange is an eventhandle  it detect the changes where the user interaction on input field
        or select values.
       </h2>
       
    <input type="text" placeholder="Enter your name" onChange={handlechange}/>
       <h2>name:{name}</h2>
       </div>
    );
}
export default Change;