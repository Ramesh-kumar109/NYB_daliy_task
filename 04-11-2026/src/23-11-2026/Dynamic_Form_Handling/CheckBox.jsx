import {useState} from 'react'

function CheckBox() {
    const [check,setCheck]=useState(false);

    const Handle=(e)=>{
        setCheck(e.target.checked);
    }

    const Handleform=(e)=>{
       e.preventDefault();
       console.log("Your Hobbies are",{check})
    }
  return (
    <div>
        <h2>CheckBox</h2>
        <form onSubmit={Handleform}>
         <label>
             <input type="checkbox"
             onChange={Handle}
              />Kabaddi
        </label>
        <br />
        <br />
        <label>
             <input type="checkbox"
             onChange={Handle}
              />Circket
        </label>
        <br /><br />
        <label>
             <input type="checkbox"
             onChange={Handle}
              />Football
        </label>
              <br /><br />
              <button type="submit">Submit</button>
              </form>
        <p>check box status: {check ? "success":"Fail"}</p>
    </div>
  )
}

export default CheckBox