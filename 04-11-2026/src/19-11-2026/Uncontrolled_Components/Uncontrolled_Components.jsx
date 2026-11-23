import {useRef} from 'react'

function Uncontrolled_Components() {
    const nameRef =useRef();

    const handle=(e)=>{
         e.preventDefault();
         alert("Your name:"+nameRef.current.value);
        console.log("Your name:"+nameRef.current.value);
    }
    
  return (
    
    <div>
        <h2>Uncontrolled_Components</h2>
        <form onSubmit={handle}>
            <label>Enter your name:</label>
        <input 
        type="text"
        placeholder='Enter your name'
        ref={nameRef}
         />
         <button type='submit'>Submit</button>
        </form>
    </div>
  )
}

export default Uncontrolled_Components