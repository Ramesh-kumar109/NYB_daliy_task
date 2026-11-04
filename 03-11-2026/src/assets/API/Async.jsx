import {useState,useEffect} from 'react'

function Async() {

    const [user,setUser]=useState([]);
    async function child(){
        try{
            const response=await fetch("https://jsonplaceholder.typicode.com/users");
            const data=await response.json();
            setUser(data);
        }
        catch(error){
            console.log(error);
        }
    }

    useEffect(()=>{
            child();
    },[]);
  return (
    <div>
        <h2>Async</h2>
        {user.map(data=>(
        <p key={data.id}> {data.name}</p>
    ))}
    </div>
    
  )
}

export default Async