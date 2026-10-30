import {useState} from "react"
function Submit(){
  const [name,setName]=useState("");
    function submit(event){
    event.preventDefault();
     alert("welcome "+name);
    }
    return(
        <div>
          <h2>Onsubmit</h2>
             <form onSubmit={submit}>
                <input 
                type="text"
                placeholder="Enter your name"
                value={name}
                onChange={(event)=>setName(event.target.value)} 
                />
                <button type="submit">Submit</button>
             </form>
        </div>
    );
}

export default Submit;