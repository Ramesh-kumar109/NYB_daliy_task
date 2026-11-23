import {useState} from 'react'

function Multiple_Controlled_Components() {
    const [form,setForm]=useState({
        name:"",
        email:""
    });
    const Handlechange=(e)=>{
        setForm({
             ...form,[e.target.name]:e.target.value
        });
    };

    const formHandle=(e)=>{
      e.preventDefault();
      const data= JSON.stringify(form);
      alert(data)
    }
  return (
    <div>
        <h2>Multiple_Controlled_Components</h2>
 
        <form onSubmit={formHandle} >

            <label>Enter your name:</label>
            <input 
            type="text"
            name="name"
            value={form.name} 
            placeholder='enter your name'
            onChange={Handlechange}
            />

            <br /><br />
            <label>Enter your Email:</label>

            <input 
            type="email"
            name="email"
            value={form.email}
            placeholder='Enter your mail'
            onChange={Handlechange}
             />
            <br />
            <br />
             <button type="submit">Submit</button>

        </form>

    </div>
  )
}

export default Multiple_Controlled_Components