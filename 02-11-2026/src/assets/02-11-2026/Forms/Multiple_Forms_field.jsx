import {useState} from 'react'

function Multiple_Forms_field() {
    const [formData,setFormData]=useState({
        name:"",
        email:"",
        password:""
    });

    const handleChange=(e)=>{
        setFormData({
            ...formData,[e.target.name]:e.target.value});
    }

    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log(formData);
    }
  return (
    <div>

      <h2>Multiple Form Fields</h2>
      <h2> which is used to collect multiple pieces of information from the user </h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label>Email:</label>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
          />
        </div>
        <br />
        <div>
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={formData.password}
            onChange={handleChange}
          />
        </div>
        <br />

        <button type="submit">Submit</button>
      </form>
    </div>
  );
}

export default Multiple_Forms_field