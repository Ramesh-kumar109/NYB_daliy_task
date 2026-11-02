import {useState} from "react";
function Forms(){
    const[gender,setGender]=useState("");
    return(
        <div>
            <h2>using radio buttons user interaction between
                 multiple options are choose from one option</h2>
         <label>
            <input 
            type="radio"
            checked={gender==="male"}
            value="male"
            onChange={(e)=>setGender(e.target.value)} 
            />
            Male
         </label>

         <label>
            <input 
            type="radio"
            checked={gender==="female"}
            value="female"
            onChange={(e)=>setGender(e.target.value)} 
            />
            Female
         </label>
         <h2>select gender:{gender}</h2>
        </div>

    );
}

export default Forms;