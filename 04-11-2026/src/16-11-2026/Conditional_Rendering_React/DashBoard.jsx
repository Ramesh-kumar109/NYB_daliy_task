import {useState} from 'react'

function DashBoard() {

    const [islogedin,setlogedin]=useState(false);
    const [role,setRole]=useState("Admin");
  return (
    <div>
        <h1>Student Portal</h1>
        {islogedin ?(
            <div>
                <h2>welcome!</h2>
                {role ==="admin" ?(
                    <h2>Admin DashBoard</h2>
                ):(<h2>Student Dashboard</h2>)}

                <button onClick={()=>{setlogedin(false)}}>Logout</button>
            </div>
        ):(
            <>
            <h2>Please Login</h2>
            <button onClick={()=>{setRole("student");setlogedin(true)}}>Student Login</button>
            <br />
            <br />
            <button onClick={()=>{setRole("admin");setlogedin(true)}}>Admin Login</button>
            </>
             
        )
        }
   
    </div>
  );
}

export default DashBoard