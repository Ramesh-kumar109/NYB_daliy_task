import {useState} from "react";
function CheckBox(){
    const [checked,setChecked]=useState(false);
    function handle(event){
     setChecked(event.target.checked)
    }
    return(
        <div>
              <label>
                <input type="checkbox"
              checked={checked}
              onChange={handle}
              /> Accepts terms and conditions
              </label>

              <h3>status:{checked?"Accepted":"not Accepted"}</h3>
        </div>
    );
}
export default CheckBox;