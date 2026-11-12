import { useState } from 'react'

function PostMethod() {

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const [message,setMessage]=useState("");

        async function user(event){
        event.preventDefault();

      try{
          const response =await  fetch("https://jsonplaceholder.typicode.com/users",
            {method:"POST",
            headers:{
                 "content-type":"application/json"
            },
            body:JSON.stringify({
              name:name,
              email:email
          })
        }
        );
        if(!response.ok){
            throw new Error("failed to send  the data");
        }

        const data= await response.json();
        console.log(data)
        setMessage("user created sucessfully");
        setName("");
        setEmail("");
      }catch(error){
        setMessage(error.message);
      }

      } 
  return (
    <div>
         <form onSubmit={user}>
      <h2>Post Method</h2>

        <br />
        <input 
        type="text"
        value={name}
        placeholder='Enter your name'
        onChange={(e)=>setName(e.target.value)}
        required
         />

         <br />
         <br />
         <input 
         type="email"
         placeholder='Enter your Email'
         value={email}
         onChange={(e)=>setEmail(e.target.value)}
         required
          />
           <br />
           <br />
          <button type="submit">Register</button>
         </form>
        
        <p>{message}</p>
    </div>
  )
}

export default PostMethod
