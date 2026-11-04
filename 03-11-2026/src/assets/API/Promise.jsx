import {useState,useEffect} from 'react'

function Promise() {

    const [Data ,setUser]=useState([]);

    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>{
            return response.json();
        })
        .then(data=>{
            setUser(data);
        })
        .catch(error=>{
            console.log("error",error)
        })
    },[]);
  return (
    <div>
        <h2>user details</h2>
        {Data.map(data=>(
            <p key={data.id}>{data.name}</p>
        ))}

    </div>
  )
}

export default Promise