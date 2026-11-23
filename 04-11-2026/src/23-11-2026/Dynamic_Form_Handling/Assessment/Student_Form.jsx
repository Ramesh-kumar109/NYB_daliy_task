import {useState} from 'react'

function Student_Form() {
    const [form,setForm]=useState({
        name:"",
        email:"",
        password:"",
        address:"",
        Hobby:"",
        gender:"",
        course:[]

        
        });

        const handle=(e)=>{
          setForm({...form,[e.target.name]:e.target.value});
        }

        const handleSubmit=(e)=>{
         e.preventDefault();
         alert("Form submitted successfully");
         console.log(form)
         
        }
  return (
    <div>

        <form onSubmit={handleSubmit}>
            <label>name:</label>
        <input type="text"
        name="name"
        value={form.name}
        placeholder='enter your name'
        onChange={handle}
        required
         />

         <br />
         <br />
         <label>Email:</label>
         <input type="email"
         placeholder='Enter your Email'
         onChange={handle}
         name="email"
         value={form.email}
         required
          />

          <br /><br />
          <label>password:</label>
          <input type="password"
          name="password"
          value={form.password}
          onChange={handle}
          required
           />
          <br /><br /> <label>Address:</label>
           <textarea
           placeholder='enter your address'
           rows="4"
           cols="30"
           required
           name="address"
           value={form.address}
           onChange={handle}
            />
          <br />
          <label>Select your hobbies:</label>
            <select
            name="Hobby"
            value={form.Hobby}
            onChange={handle}
            required
            >
               
              <option value="" disabled>---Select---</option>
               <option value="kabaddi">Kabaddi</option>
              <option value="Cricket">Cricket</option>
               <option value="Football">Football</option>
            </select>
            <br /> <br />
            
            <label>Gender:</label>
            <label>
                <input type="radio"
                value="male"
                name="gender"
                checked={form.gender === "male"}
                onChange={handle}
                required
                />
                male
            </label>
            <label>
                <input type="radio"
                value="Female"
                name="gender"
                checked={form.gender === "Female"}
                onChange={handle}
                />
                Female
            </label>

            <label>
                <input type="radio"
                value="Other"
                name="gender"
                checked={form.gender === "Other"}
                onChange={handle}
                />
                Other
            </label>
             <br /> <br />


             <label>Course:
                <input type="checkbox"
                     name="course"
                     value="Javascript"
                onChange={handle}
                     checked={form.course.includes("Javascript")}
                 /> Javascript
             </label>

             <label>
                <input type="checkbox"
                name="course"
                value="ReactJS"
                onChange={handle}
                checked={form.course.includes("ReactJS")}
                 /> ReactJS
             </label>

             <label>
                <input type="checkbox"
                name="course"
                value="Java"
                onChange={handle}
                checked={form.course.includes("Java")}
                 /> Java
             </label>

                <br /><br />
            <button type="submit">Submit</button>

         

            
        </form>
        
    </div>
  )
}

export default Student_Form