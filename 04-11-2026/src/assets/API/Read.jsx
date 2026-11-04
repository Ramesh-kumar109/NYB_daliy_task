import {useState,useEffect} from 'react'
function Read() {

    const [user,setUser]=useState([]);
    useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/users")
    .then(response =>response.json())
    .then(data=>{
        setUser(data);
    })
    .catch(error=>{
        console.log("Error:",error)
    })

    },[]);
  return (
    <div>
        <h2>Read method(fetch)</h2>
        <h2>student details</h2>
        {
            user.map(user=>(
                <div key={user.id}>
                    <p >{user.name}</p>
                    <p >{user.email}</p>
                </div>
            ))
        }    
    </div>
  )
}

export default Read