import {useState} from "react";

function Dynamnic_Fields() {

    const [fields,setFields]=useState([""]);
    // add new field
    const newfield=()=>{
        setFields([...fields,""]);
    }
  // updates fields
    const handleChange=(e,index)=>{
        const values=[...fields];
        values[index]=e.target.value;
        setFields(values);
    }

    // remove field
    const removeField=(index)=>{
        const values=[...fields];
        values.splice(index,1);
        setFields(values);
    }
  return (
    <div>
          <h2>Dynamnic_Fields</h2>
        <h2> which is used to collect multiple pieces of information from the user </h2>
        {fields.map((field,index)=>(
            <div key={index}>
                <input
                    type="text"
                    value={field}
                    onChange={(e)=>handleChange(e,index)}
                    placeholder={`skills ${index + 1}`}
                />
                <button onClick={()=>removeField(index)}>Remove</button>
            </div>
        ))}
        <br />
        <button onClick={newfield}>Add Field</button>
       <br />
       <br />
       <button onClick={()=>console.log(fields)}>Submit</button>

    </div>
  )
}

export default Dynamnic_Fields