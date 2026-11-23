import {useState} from 'react'

function Text_Field() {
    const [name,setName]=usestate("");

    // add text field

    const addtext=()=>{
        setName([...name,""]);
    }

    // update field

    const handle=(index,value)=>{
        const update=[...name];
        update[index]=value
        setName(update)
    }
    // delete

    const remove =(index)=>{
      setName(name.fliter((_,i)=>i!==index));
    }
    // submit form
        
    const handlesubmit=(e)=>{
       e.preventDefault();
       console.log(name);
    }
    return (
    <div>
        <h2>Text_Field</h2>
        <form>
            {name.map((name,index)=>(
                <div key={name.id}>
                 <input 
                 type="text"
                 
                  />
                </div>
            ))}
        </form>
    </div>
  )
}

export default Text_Field