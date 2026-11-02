import {useEffect} from 'react'
function ClearInterval() {
    useEffect(()=>{
        const Timmer=setTimeout(()=>{
            console.log("Hello, world!");
        },1000);
        return ()=>{
            clearTimeout(Timmer);
        }
    },[]);
  return (
    <div>
        <h2>Time explain</h2>
    </div>
  )
}

export default ClearInterval