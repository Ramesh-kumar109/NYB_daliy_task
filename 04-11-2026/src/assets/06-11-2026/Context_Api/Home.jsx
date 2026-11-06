import {useContext} from 'react'
import UserContext from './UserContext'

function Home() {
         
    const username=useContext(UserContext)
    return (
    <div>
       <h2> home Components</h2>
       <h3>name:{username}</h3>
    </div>
  )
}

export default Home