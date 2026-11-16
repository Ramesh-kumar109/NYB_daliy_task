import {useState} from 'react'

function Login() {
    const [isLoggedin,setLoggedIn]=useState(false);
  return (
    <div>
        { isLoggedin ?(
            <>
            <h2>Welcome to Dashboard</h2>-
            
            <button onClick={()=>{setLoggedIn(false)}}> Logout</button>
            </>
        ):(
            <>
            <h2>Please Login</h2>
            <p>Please login your account</p>
            <button onClick={()=>{setLoggedIn(true)}}>Login</button>
            </>
        )
    }
    </div>
  )
}

export default Login