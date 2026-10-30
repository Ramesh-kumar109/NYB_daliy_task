import {useState} from "react"

function FormsHandling(){
 const [name,setName]=useState("");
 const [email,setEmail]=useState("");
 function handle(event){
    event.preventDefault();
    alert(`Name: ${name} Email: ${email}`);
 }
 
return(
    <div>
        <h2>1.Forms handling</h2>
        <h2>Registration form</h2>
        <form onSubmit={handle}>
           
           <input 
           placeholder="Enter name"
           value={name}
           onChange={(e)=>setName(e.target.value)}
           type="text" />
           <br />
           <br />

           <input
           placeholder="enter your mail" 
           value={email}
           onChange={(e)=>setEmail(e.target.value)}
           type="email" />

           <button type="submit">submit</button>
        </form>
          
    </div>
);
}
export default FormsHandling;