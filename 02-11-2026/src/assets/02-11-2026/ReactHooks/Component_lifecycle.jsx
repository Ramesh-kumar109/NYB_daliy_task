import {useEffect} from 'react'
function Component_lifecycle() {
    useEffect(()=>{
        console.log("Component_lifecycle");   
    },[]);
  return (
    <div>
        <h2>Component_lifecycle</h2>
        
    </div>
  )
}

export default Component_lifecycle