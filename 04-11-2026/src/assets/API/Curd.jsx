import {useState} from 'react'

function Curd() {

    const [name,setName]=useState("");
    const [email,setEmail]=useState("");
    const handle=async(e)=>{
               e.preventDefault();

               try{
                const response = await fetch("https://jsonplaceholder.typicode.com/users",{
                    method:"POST",
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
                throw new Error("failed to create student")
            }
            const data= await response.json();
            console.log("create student data", data);
            alert("student create successfully");

            setName("");
            setEmail("");
               }
               catch(error){
                  console.log(error.message);
               }
    };
  return (
    <div>
        <h2>create the student data</h2>
        <form onSubmit={handle}>
          <input 
          type="text"
          placeholder='enter your name'
          value={name}
          onChange={e=>{
            setName(e.target.value)
          }}
           />

           <br />
           <br />

            <input 
          type="email"
          placeholder='enter your Email'
          value={email}
          onChange={e=>{
            setEmail(e.target.value)
          }}
           />
         <button type='submit'>submit</button>

        </form>
    </div>
  )
}

export default Curd