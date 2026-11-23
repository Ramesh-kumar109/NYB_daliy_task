import {useState} from 'react'

function Dynamic_Text_field() {
    const [name,setName]=useState([""]);

     // add data

      const add=()=>{
        setName([...name, ""]);
      };

     // update data

      const update= (index,value)=>{
        const updatedNames=[...name];
        updatedNames[index]=value;
        setName(updatedNames);
      }

     // remove data
     const remove =(index)=>{
       setName(name.filter((_,i)=>i!==index));
     }

     //submit form

     const  handleSubmit=(e)=>{
       e.preventDefault();
      console.log("Student Name:", name);
     }

  return (
    <div>
        <h2>Dynamic_Text_field</h2>

        <form onSubmit={handleSubmit}>
          
          {name.map((value,index)=>(
            <div key={index}> 
              
              <input type="text"
              placeholder='Enter your name'
              value={value}
              onChange={(e)=>{update(index,e.target.value)}}
               />
               <button type="button" onClick={()=>remove(index)}>Remove field</button>

            </div>
        ))

        }
          <button type="button" onClick={add}>Add Details</button>
          <button type="submit">Login</button>
        </form>
    </div>
  )
}

export default Dynamic_Text_field