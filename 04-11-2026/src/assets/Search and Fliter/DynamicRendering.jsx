import {useEffect,useState} from 'react'

function DynamicRendering() {
    const[user,setUser]=useState([]);
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=> response.json())
        .then(data=>setUser(data))
        .catch(error=>console.log(error))
    },[])
  return (
    <div>
        <h2>DynamicRendering</h2>
        {user.map(user=>(
            <div key={user.id}>
                <p>{user.name}</p>
                <p>{user.email}</p>
            </div>
        ))}
    </div>
  )
}

export default DynamicRendering