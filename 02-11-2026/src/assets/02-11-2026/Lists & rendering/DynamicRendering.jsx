function DynamicRendering() {
 
    const fruits = ["Apple", "Banana", "Mango", "Orange", "Grapes"]; 
  return (
    <div>
        <h2>DynamicRendering</h2>
        {fruits.map((fruit,index)=>(
            <p key={index}>{fruit}</p>
 
        ))}
    </div>
  )
}

export default DynamicRendering