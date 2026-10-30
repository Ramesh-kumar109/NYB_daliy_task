import{useState} from "react"
function Inputfield(){
 const [name,setName]=useState("");
 const [email,setEmail]=useState("");
 const [password,setPassword]=useState("");

    return(
        <div>

            <input
             type="text"
             placeholder="enter your name"
             value={name}
             onChange={(e)=>setName(e.target.value)}
             />
              
             <br />
             <br />
                 
            <input
             type="email"
             placeholder="enter your mail"
             value={email}
             onChange={(e)=>setEmail(e.target.value)}
             />

             <br />
             <br />

             <input
             type="password"
             placeholder="enter your password"
             value={password}
             onChange={(e)=>setPassword(e.target.value)}
             />

             <h3>name:{name}</h3>
             <h3>email:{email}</h3>
             <h3>password:{password}</h3>
        </div>
    );
}

export default Inputfield;