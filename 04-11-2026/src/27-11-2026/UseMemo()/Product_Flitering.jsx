import { useMemo, useState } from 'react'

function Product_Flitering() {
    const[count,setCount]=useState(0);
    const[search,setSearch]=useState("");

    const Products=[
        "Laptop",
        "Mouse",
        "Keyboard",
        "Pendrive",
        "Monitor"
    ]

    const fliterProduct= useMemo (()=>{
        console.log("Product Fliter");
      return Products.filter((product)=>{
       return product.toLowerCase().includes(search.toLowerCase())
       });
    },[search])

    const handle=(e)=>{setSearch(e.target.value)} 
  return (
    <div>
        <h2>Count:{count}</h2>
        <h2>search:{search}</h2>

          <button onClick={()=>{setCount(count+1)}}>Increase</button>
          <br />
          <br />
          <input type="text" placeholder='Enter your search' onChange={handle} value={search} />

          {fliterProduct.map((Product)=>(
            <div key={Product}>
               <li>Product :{Product}</li>
            </div>
          ))}
    </div>
  )
}

export default Product_Flitering;