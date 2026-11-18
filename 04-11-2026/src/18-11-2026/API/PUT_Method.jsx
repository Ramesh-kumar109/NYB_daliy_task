import {useState} from 'react'

function PUT_Method() {
    const [name,setName]=useState("ramesh");
    const [email,setEmail]=useState("ramesh@2022.com");

    const update= async (event)=>{
        event.preventDefault();
        try{
            const response= await fetch("https://jsonplaceholder.typicode.com/users/1",
            {
                method:"PUT",
                headers:{
                    "Content-Type":"application/json"
                },
                body:JSON.stringify({
                    name:name,
                    email:email
                })
                
            })
            if(!response.ok){
                throw new Error("Update the data Failed");
            }
            const result= await response.json();
            console.log(result);
            alert("Your data updated successfully");
        }catch(error){
            console.log(error.message);
        }


    }
  return (
    <div>
        <h2>PUT_Method</h2>

        <form onSubmit={update}>

            <label>Enter Your name:</label>
            <input 
            type="text"
            value={name}
            onChange={(e)=>{setName(e.target.value)}}
            placeholder='Enter your name'
             />


             <br />
             <br />
             <label>Enter your mail:</label>
             <input 
             type="email"
             value={email}
             placeholder='enter your email'
             onChange={(e)=>{setEmail(e.target.value)}}

              />

              <br />
              <br />
              <button type="submit">Update</button>
        </form>

    </div>
  )
}

export default PUT_Method