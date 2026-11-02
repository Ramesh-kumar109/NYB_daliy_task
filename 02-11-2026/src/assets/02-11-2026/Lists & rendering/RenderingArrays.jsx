
function RenderingArrays() {

    const name=["Ramesh","kumar","Arun","snajai"];

  return (
    <div>
     <h2>Students list:</h2>
     <ul>
        {name.map((student,index)=>(
            <li key={index}>{student}</li>
        ))}
     </ul>
    </div>
  )
}

export default RenderingArrays