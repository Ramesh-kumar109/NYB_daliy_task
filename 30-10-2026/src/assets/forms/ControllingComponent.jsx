import {useState} from "react"
function ControlledComponents(){

    const [name,setName]=useState("");
    const [mail,setEmail]=useState("");
    function handle(event){
        event.preventDefault();
        alert(`Name: ${name} \n Email: ${mail}`);
    }
    return(
    <div>
        <h2>2.Controlled components</h2>
        <form onSubmit={handle}>

            <input 
            type="text"
            placeholder="Enter your name"
            value={name}
            onChange={(e)=>setName(e.target.value)}
             />

             <br /><br />
             <input 
             type="email"
             placeholder="Enter your email"
             value={mail}
             onChange={(e)=>setEmail(e.target.value)}
              />

              <button type="submit">submit</button>
        </form>

        <h3>Name:{name}</h3>
        <h3>Email:{mail}</h3>
        
    </div>
);
}
export default ControlledComponents;