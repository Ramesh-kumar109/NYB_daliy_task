import UserContext from "./UserContext"
import {useContext} from "react"
 
function Home() {
    const {name,setName}=useContext(UserContext)
  return (
    <div>
         <h2> Global State access the data.</h2>
         <h2>name:{name}</h2>

         <br />

         <button onClick={()=>{setName("kumar")}} >Change name</button>

         <br />
         <button onClick={()=>setName("Ramesh")}>Reset</button>

    </div>
  )
}

export default Home