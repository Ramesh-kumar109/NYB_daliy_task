import {useEffect,useState} from 'react'

function SearchAPI() {

    // store API data

    const [user,setUser]=useState([]);

    // store search api
    const [search,setSearch]=useState('');

    //fetch api data
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(data=>{
            setUser(data)
        })
        .catch(error=>{
            console.log(error)
        })
    },[])

    // search api data

    const filterdata= user.filter(user=>user.name.toLowerCase().includes(search.toLowerCase()));
  return (
    <div>
        <h2>search api data</h2>
        <input 
        type="text"
        placeholder='enter your name'
        value={search}
        onChange={(e)=>{
            setSearch(e.target.value)
        }}
         />

         {
            filterdata.map(user=>
                <div key={user.id}>
                  <p>{user.name}</p>
                  <p>{user.email}</p>
                </div>
            )
         }

         {
            filterdata.length === 0 &&(
                <p>No Data found</p>
            )
         }
    </div>
  )
}

export default SearchAPI