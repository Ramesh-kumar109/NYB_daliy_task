import {useState} from 'react'

function Text_Field() {
    const [form,setForm]=useState({

        name:"",
        email:""
    });
    
    const handling =(e)=>{
      setForm({...form, [e.target.name]:e.target.value})
    }
  return (
    <div>
        <h2>Text_Field</h2>

            <label>Name:</label>
          
        <input type="text"
           name="name"
           placeholder='Enter your name'
           value={form.name}
           onChange={handling} 
        />

        <br />
        <br />
        <label >Email ID:</label>

        <input type="email"
        name="email"
        placeholder='Enter your email'
        value={form.email}
        onChange={handling} 
        />

        <h2>Name:{form.name}</h2>
        <h2>Email:{form.email}</h2>

    </div>
  )
}

export default Text_Field