import React from 'react'
import WithAuth from "./WithAuth"

function DashBoardinformation() {
  return (
    <div>
        <h2>DashBoardinformation</h2>
        <h2>welcome  to Dashboard </h2>
    </div>
  )
}
const Protectdashboard=WithAuth(DashBoardinformation);
export default Protectdashboard;