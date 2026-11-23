import {useState} from 'react'

function DroupDown() {

     const [course,setCourse]=useState("");

    const handle=(e)=>{
       e.preventDefault();
       setCourse(e.target.value);
    }
  return (
    <div>
        <h2>Droupdown</h2>
        <select onChange={handle} value={course}>
            <option value="Select-course">--Select-Course--</option>
          <option value="HTML">HTML Course</option>
          <option value="CSS">CSS Course</option>
          <option value="JAVA SCRIPT">JavaScript</option>
          <option value="ReatJS">ReactJS</option>
        </select>

        <h2>Course:{course}</h2>
    </div>
  )
}

export default DroupDown