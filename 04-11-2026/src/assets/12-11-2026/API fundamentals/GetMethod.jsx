import {useState,useEffect} from 'react'

function Getmethod() {

    const [user,setUser]=useState([]);
    const [loading,setLoading]=useState(true);

    // using useeffect fetch the data on server

    useEffect(()=>{
        async function user(){
            try{
                const response= await fetch("https://jsonplaceholder.typicode.com/users",{method:"GET"});
            if(!response.ok){
                throw new Error("Falied to fetch the data")
            }
            const data =await response.json()
            setUser(data)
            }
            catch(error){
                console.log(error.message);
            }finally{
  
  
                setLoading(false);
            }
            
        }
        user();
    },[])

    if(loading) return <p>Loading...</p>
  return (
    <div>
        <h2>User List</h2>
        {user.map(user=>(
            <div>
                <ol  type='A' key={user.id}>
                <li>name:{user.name}</li>
                <li> email:{user.email}</li>
                </ol>
            </div>
        ))}
    </div>
  )
}

export default Getmethod