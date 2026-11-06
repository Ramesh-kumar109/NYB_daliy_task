
import  SchoolPrincipal  from './SchoolPrincipal'

function Staff() {
    
  return (
    <SchoolPrincipal.Consumer>
        
                 {
                    (username) => 
                    <div><h2>Staff component call the person</h2>
                    <h2>name:{username}</h2></div>
                 }
    </SchoolPrincipal.Consumer>
    
  )
}

export default Staff