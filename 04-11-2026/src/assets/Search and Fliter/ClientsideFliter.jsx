import {useState,useEffect} from 'react'

function ClientsideFliter() {

    const [user,setUser]=useState([]);
    const [fliter,setFliter] =useState("All");

    //fetch the data for API
    useEffect(()=>{
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response=>response.json())
        .then(data=>{
            const studentData=data.map(user=>({
                id:user.id,
                name:user.name,
                marks:user.id*10
            }))
         setUser(studentData);   
        })
        .catch(error=>{
            console.log(error);
        })
    },[])

    // client filter
    const flitersstudent= user.filter(user=>{
        if(fliter==="PASS"){
            return user.marks>=50;
        }
        if(fliter==="Fail"){
            return user.marks<50;
        }
        return true;
    })

  return (
    <div>
        <h2>ClientsideFliter</h2>

        <select 
        value={fliter}
        onChange={(e)=>{
            setFliter(e.target.value);
        }}
        >
            <option value="All">ALL student</option>
            <option value="PASS">Pass</option>
            <option value="Fail">Fail</option>
        </select>

        {
                        flitersstudent.map(user=>(
                <div key={user.id}>
                  <p>{user.name}</p>
                  <p>{user.marks}</p>
                </div>
                        ))
        }

        {
            flitersstudent.length===0 &&(
                <p>No student found</p>
            )
        }
    </div>
  )
}

export default ClientsideFliter