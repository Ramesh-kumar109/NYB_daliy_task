import {useRef} from 'react'

function Uncontrolled() {
   const ref=useRef(null)
   
   function handle(){
     alert(ref.current.value);

   }
    return (
    <div>
        <input 
        type="text"
        ref={ref}
        placeholder='enter your name'
         />

         <button onClick={handle}>Submit</button>
    </div>
  )
}

export default Uncontrolled