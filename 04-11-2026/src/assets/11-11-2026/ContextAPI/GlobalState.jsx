import {useContext} from 'react'
import UserContext from "./UserContext"

function GlobalState() {

    const name=useContext(UserContext)
  return (
    <div>
        <h2>Global state access the data.</h2>
        <h2>name:{name}</h2>
    </div>
  )
}

export default GlobalState