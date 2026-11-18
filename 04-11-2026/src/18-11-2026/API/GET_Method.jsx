import {useState,useEffect} from 'react'

function GET_Method() {
    const [user,setUser]=useState([]);
    const [loading,setLoading]=useState(true);
    const [error,setError]=useState("");

    useEffect(()=>{
          fetch("https://jsonplaceholder.typicode.com/users")
          .then(response=>{
            if(!response.ok){
                throw new error("failed to get the data");
            }
            return response.json();
          })
          .then(data=>{
            setUser(data);
            setLoading(false)
          })
          .catch(error=>{
            setError(error.message);
            setLoading(false);
          });
    },[]);
    if(loading)return <p>Loading...</p>
    if(error) return <p>{error}</p>
  return (
    <div>
        <h2>GET_Method</h2>
        {user.map(user=>(
            <p key={user.id}>{user.name}-{user.email}</p>
        ))}
    </div>
  )
}

export default GET_Method