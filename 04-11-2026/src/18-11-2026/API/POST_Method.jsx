import { useState } from 'react'

function POST_Method() {
    const[name,setName]=useState("");
    const [email,setEmail]=useState("");

    const handlesubmit= async (e)=>{

        e.preventDefault();
        try{
            const response= await fetch("https://jsonplaceholder.typicode.com/users",{
                method:"POST",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name:name,
                    email:email
                })

            });
            if(!response.ok){
                throw new Error("Request Failed");
            }
            const result = await response.json()
            console.log(result);
            alert("student added sucessfull!");
            
        }
        catch(error){
            console.log(error.message);
        }
    };

    
  return (
    <div>
        <h2>POST_Method</h2>

        <form onSubmit={handlesubmit}>

          <label>Enter your name:</label>
            <input
         type="text"
         value={name}
         placeholder="enter your name"
         onChange={(e)=>setName(e.target.value)}
         />

         <br />
         <br />
         <label>Enter your Email:</label>

         <input 
         type="email"
         placeholder="enter your email"
         value={email}
         onChange={(e)=>setEmail(e.target.value)} 

          />
          <br />
          <br />

          <button type="submit">Submit</button>
        </form>

    </div>
  )
}

export default POST_Method