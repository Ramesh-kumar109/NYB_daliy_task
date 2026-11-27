import React,{useMemo,useState} from 'react'

function Calculating_Number() {

    const [number,setNumber]=useState(5);
    const [count,setCount]=useState(0);

    const result=useMemo(()=>{
        console.log("claculating the number");
         return number*5;
    },[number]);
    const handle=()=>{setCount(count+1)};
    const handleNumber=()=>{setNumber(number+1)}
  return (
    <div>
        <h2>Count:{count}</h2>
        <h2>Result:{result}</h2>
         <button onClick={handle}>Increase</button>
         <br />
         <br />
         <button onClick={handleNumber}>Change number</button>
    </div>
  )
}

export default Calculating_Number