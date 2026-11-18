import {useState} from 'react'

function PATCH_Method() {

    const [name,setName]=useState("ramesh");
    const [email,setEmail]=useState("ramesh.kumar.a@gmail.com");
    const [load,setLoad]=useState(true);
    const [error,setError]=useState("")
    const handle=async(e)=>{
        e.preventDefault();
        // try{

        //     setLoad("true");
        //     setError("");
        //     const response=await fetch("https://jsonplaceholder.typicode.com/users/1",{
        //         method:"PATCH",
        //         headers:{
        //             "Content-Type":"application/json"
        //         },
        //         body:JSON.stringify({
        //             name:name,
        //             email:email
        //         })

            
        //     });
        //     if(!response.ok){
        //    throw new Error("Patch the data failed");
        //     }
        //     const data= await response.json();
        //     console.log(data);
        //     alert("Sucessfully Patching the data")
        // }catch(error){
        //     console.log(error.message)
        // }

          try{
        const response= await axios.patch("https://jsonplaceholder.typicode.com/users/1")
                
        console.log(response.data);
        alert("patch the data");
            

          }catch(error){
              setError(error.message)
          }finally{
            setLoad(true)
          }
        if(load){
            <p>Loading...</p>
        }else{
            <p>error:{error.message}</p>
        }
    }
  return (
    <div>
        <h2>PATCH_Method</h2>
        <form onSubmit={handle}>
           
           <label>1.Enter your name: </label>
           <input 
           type="text"
           value={name}
           placeholder='enter your name'
           onChange={(e)=>setName(e.target.value)}
            />

            <br />
            <br />
            <label>2.Enter your mail: </label>
            <input 
           type="email"
           value={email}
           placeholder='enter your email'
           onChange={(e)=>setEmail(e.target.value)}
            />
         <button type="submit">patch update</button>
        </form>
    </div>
  )
}

export default PATCH_Method;