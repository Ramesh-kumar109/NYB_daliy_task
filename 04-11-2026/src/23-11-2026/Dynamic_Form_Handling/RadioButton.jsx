import {useState} from 'react'

function RadioButton() {

    const[Gender,setGender]=useState("");
    const handle=(e)=>{
        e.preventDefault();
        setGender(e.target.value);

    }
  return (
    <div>
        <h2>RadioButton</h2>

        <label>
            <input type="radio"name="gender" value="Male"  checked={Gender==="Male"} onChange={handle}/>
            Male
        </label>
        <br />
        <br />
         <label>
            <input type="radio"name="gender" value="Female"  checked={Gender==="Female"} onChange={handle}/>
            Female
        </label>
        <br /><br />
         <label>
            <input type="radio" name="gender" value="Other" checked={Gender === "Other"} onChange={handle}/>
            Other
        </label>

        <h2>Gender:{Gender}</h2>
    </div>
  )
}

export default RadioButton