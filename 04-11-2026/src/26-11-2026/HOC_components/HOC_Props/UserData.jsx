import React from 'react'
import WithUser from './WithUser'

function UserData(props) {
  return (
    <div>
        <h2>UserData</h2>
        <h2>User name:{props.name}</h2>
        <h2>User Role:{props.role}</h2>

    </div>
  )
}

const Enhancedata= WithUser(UserData);
export default Enhancedata;