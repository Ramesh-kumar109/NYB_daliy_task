import {useRef} from 'react'

function Multiple_Uncontrolled_Components() {

    const nameRef=useRef();
    const emailRef=useRef();

    const handleChange=(e)=>{
        e.preventDefault();
        const student={
            name:nameRef.current.value,
            email:emailRef.current.value,
        }
        console.log(student);

    }
  return (
    <div>
        <h2>Multiple_Uncontrolled_Components</h2>
        <form onSubmit={handleChange}>
            <label>Enter your name:</label>
        <input 
        type="text"
        ref={nameRef}
        placeholder='Enter your name'
         />
         <br />
         <br />

         <label>Enter your email:</label>

         <input 
         type="email"
         placeholder='enter your mail'
         ref={emailRef}
          />

         <br />
         <button type='submit'>Submit</button>

        </form>
         
    </div>
  )
}

export default Multiple_Uncontrolled_Components