import {useEffect,useState} from 'react'

function Api_Cancel_Request() {
      const [user,setUser]=useState([]);
      const [error,setError]=useState("");
      useEffect(()=>{
        const controller= new  AbortController();
        const userdata=async ()=>{
            try{
                const response=await fetch("https://jsonplaceholder.typicode.com/users",{
                signal:controller.signal
            });
            if(!response.ok){
               throw new Error(" Failed Fetch the data");
            }
            const data=await response.json();
            setUser(data)
            }
            catch(error){
                if(error.name==="AbortError"){
                    console.log("APi request Failed")
            }else{
                setError(error.message)
            }
          }
        }
        userdata();
        return()=>{
             controller.abort();
           }
      },[])

  return (
    <div>
        <h2>Api_Cancel_Request</h2>
        {error && <p>{error}</p>}

      {user.map(user=>(
        <p key={user.id}>{user.name}-{user.email}</p>
      ))}
    </div>
  )
}

export default Api_Cancel_Request