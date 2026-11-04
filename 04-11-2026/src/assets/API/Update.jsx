import { useState } from 'react'

function Update() {

    const [name,setname]=useState("Ramesh kumar");
    const [email,setEmail]=useState("ramesh@123.com");

    const handle=async(e)=>{
        e.preventDefault();
        try{
            const response=await fetch("https://jsonplaceholder.typicode.com/users/1",{
              method:"PUT",
                headers:{
                "content-type":"application/json"
                },
                body:JSON.stringify({
                     name:name,
                     email:email
                })
            })
            if(!response.ok){
                throw new Error("Failed to update the data")
            }
              const result=await response.json();
              console.log("Update successful:", result);
              alert("Student updated successfully");

        }catch(error){
            console.log("error:",error.message);
        }
    }
  return (
    <div>
        <form  onSubmit={handle}>
            <h2>update the data in CURD method</h2>
          <input 
          type="text"
          placeholder='enter your name'
          value={name}
          onChange={(e)=>{
            setname(e.target.value)
          }} 
          />


          <input 
          type="email"
          placeholder='enter your email'
          value={email}
          onChange={(e)=>{
            setEmail(e.target.value)
          }} 
          />

          <button type="submit">submi</button>
        </form>
    </div>
  )
}

export default Update