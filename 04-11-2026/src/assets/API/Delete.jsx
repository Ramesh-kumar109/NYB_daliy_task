import {useEffect,useState} from 'react'

function Delete() {
    const [user,setUser]=useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(data=>{
            setUser(data)
        })
        .catch(error=>{
            console.log("error:",error)
        })
    },[]);

    const handle=async (id)=>{
 
         try{
        const response= await fetch(`https://jsonplaceholder.typicode.com/users/${id}`,{
            
                method:"DELETE"
        });
        if(!response.ok){
            throw new Error("Delete Failed");
        }
        setUser(preventUser=>
            preventUser.filter(user=>user.id!== id)
        )
        alert("student delete successfully")
         }catch(error){
           console.log(error.message)
         }

    }
  return (
    <div>
        <h2>Delete methods</h2>
        {
            user.map(user=>(
                  <div key={user.id}>
                    <p>{user.name}</p>
                    <p>{user.email}</p>

                    <button onClick={()=>{
                     handle(user.id)                        
                    }}>Delete</button>
                  </div>                
            ))
        }

    </div>
  )
}

export default Delete