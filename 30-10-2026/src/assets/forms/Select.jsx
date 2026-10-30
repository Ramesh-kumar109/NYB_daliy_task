import {useState} from "react"
function Select(){
    const [course,setCourse]=useState("");

    function handle(event){
        setCourse(event.target.value);
    }
    return(
        <div>
            <h2>select your course</h2>
            <select  value="{course}"onChange={handle}>
                <option value="select">-Select-</option>
             <option value="HTML">HTML</option>
             <option value="CSS">CSS</option>
             <option value="JavaScript">JavaScript</option>
            </select>

            <h2>course:{course}</h2>
        </div>
    );
}

export default Select;