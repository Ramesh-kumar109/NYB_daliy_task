import {useState,useEffect} from "react"

function ErrorHandling() {

    const [user,setUser]=useState([]);
    const [error,setError]=useState("");

    useEffect(()=>{

        async function name() {
            try{
        
          const response= await 
          fetch("https://jsonplaceholder.typicode.com/users");
                  if(!response.ok){
                    throw new Error("API request Fail");
                  }
                  const data = await response.json();
                  setUser(data);

               }
               catch(error){
                    setError(error.message)
               }
            }         
            name();
    },[])
  return (
    <div>
        <h2>Error handling</h2>
        {error && <p>error:{error}</p>}

        {user.map(user=>(
            <div key={user.id}>
                <p>{user.name}</p>
            </div>
        ))}
    </div>
  )
}

export default ErrorHandling