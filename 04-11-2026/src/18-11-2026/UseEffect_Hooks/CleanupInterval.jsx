import {useEffect} from 'react'

function CleanupInterval() {
    
    useEffect(()=>{
        let count=0
        const timer=setInterval(()=>{

            count++;
            console.log("Timmer running Start");
            if (count===5) {
                clearInterval(timer);
                console.log("Timmer running out");
            }
        },1000);
        return()=>{
            clearInterval(timer);
        }
    },[])
  return (
    <div>
        <h1>CleanupInterval</h1>

    </div>
  )
}

export default CleanupInterval