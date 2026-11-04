import {useState} from 'react'

function Sorting() {
    const[student]=useState([
        {id:1,name:"ramesh",mark:90},
        {id:2,name:"kumar",mark:80},
        {id:3,name:"yogesh",mark:95},
        {id:4,name:"ravi",mark:50},
        {id:5,name:"raju",mark:50},
    ]);

    const [sorting,setSorting]=useState("asc");
    
    // sorting data
    const sortedStudent=[...student].sort((a,b)=>{
        if(sorting==="asc"){
            return a.mark-b.mark;
        }else{
            return b.mark-a.mark;
        }
    });
  return (
    <div>
        <h2>sorting</h2>
        <select
        value={sorting}
        onChange={(e)=>{
            setSorting(e.target.value)
        }}
        >
            <option value="asc">Ascending order</option>
            <option value="desc">Descending order</option>
        </select>

        {sortedStudent.map(student=>{
            return (
            <div key={student.id}>
                <p>{student.name}</p>
                <p>{student.mark}</p>
            </div>
            );
        })}
    </div>
  )
}

export default Sorting