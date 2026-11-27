import React, { useMemo, useState } from 'react'

const UserDetails = React.memo(({ user }) => {
    console.log("UserDetails rendering");
    return (
        <div>
            <h2>Name: {user.name}</h2>
            <h2>Email: {user.email}</h2>
        </div>
    );
});

function UserProfile() {
    const [count,setCount]=useState(0);
    const user = useMemo(() => ({
        name: "Ramesh kumar",
        email: "Ramesh123@gmail.com"
    }), []);

    const handle=()=>{setCount(count+1)};
  return (
    <div>

        <h2>count:{count}</h2>
        <br />
        <button onClick={handle}>Increase</button>

        <UserDetails user={user}/>

    </div>
  )
}

export default UserProfile