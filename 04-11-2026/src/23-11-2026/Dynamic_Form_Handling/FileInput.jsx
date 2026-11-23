import {useState} from 'react'

function FileInput() {
    const [file,setFile]=useState(null);

    const handle=(e)=>{
       setFile(e.target.files[0]);
    }
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(!file){
            console.log("Please provideyour file");
            return;
        }
        console.log("File-name",file.name);
        console.log("File-size",file.size);
        console.log("File-type",file.type);

        alert("file selected successfully")
    }
  return (
    <div>
        <h2>FileInput</h2>
        <h2>Updoad resume</h2>

        <form onSubmit={handleSubmit}>

            <input type="file"
            onChange={handle}
            accept='.pdf,.doc,.docx'
             />
           
           {file && <p>file:{file.name}</p>}
        

        <button type='submit'>Upload</button>
        </form>


    </div>
  )
}

export default FileInput