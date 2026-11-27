import {useState} from 'react'
const products=[
    "laptop",
    "mobile",
    "Desktop",
    "Battery",
    "Monitor"
];
function Usememo_Without() {
    const [count,setCount]=useState(0);
    const [search,setSearch]=useState("");

   const Filterproduct= products.filter((product)=>
        product.toLowerCase().includes(search.toLowerCase())
    );
    console.log("Filtering the product");
  return (
    <div>
        <h2>useMemo_without</h2>
        <input type="text"
        value={search}
        placeholder='enter your search'
        onChange={(e)=>{setSearch(e.target.value)}}
         />

         <button onClick={()=>{setCount(count+1)}}>increase {count}</button>

         {Filterproduct.map((product)=>(
            <div key={product}>
                <p> {product}</p>
            </div>
         ))}
        </div>
  )
}

export default Usememo_Without;