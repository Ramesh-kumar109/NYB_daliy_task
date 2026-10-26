export function app(){
    const[count,setcount]=useState(0);
    return(
        <div>
            <h1>count:{count}</h1>
            <button onclick={()=>setcount(count+1)}>Increase</button>
        </div>
    );
};