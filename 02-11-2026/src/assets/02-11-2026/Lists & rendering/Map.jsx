function Map(){
    const products=[
             {id:1,name:"Laptop",price:50000,brand:"HP",color:"white"},
             {id:2,name:"Mobile",price:60000,brand:"Dell",color:"black"},
             {id:3,name:"tablet",price:70000,brand:"Lenovo",color:"gray"}
        ];
    return(
        <div>
           <h2>Products Details</h2>
              {products.map((products)=>(
                <div key={products.id}>
                    <h3>{products.name}</h3>
                    <p>Price: ${products.price}</p>
                    </div>
              ))}
        </div>
    );
}

export default Map;