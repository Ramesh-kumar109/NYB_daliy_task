import {useState} from 'react'
import WithLoading from './WithLoading';
import UserData from './UserData';

function UserDetails() {
     
    const UserWithLoad=WithLoading(UserData);
    const[isLoading,setIsLoading]=useState(true);
  return (
    <div>
        <UserWithLoad isLoading={isLoading} name="NYB Company" />
        <br />
        <br />
        <button onClick={()=>{setIsLoading(false)}}>Load Data</button>

    </div>
  )
}

export default UserDetails