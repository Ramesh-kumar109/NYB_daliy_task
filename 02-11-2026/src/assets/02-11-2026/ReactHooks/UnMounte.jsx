import React,{useEffect} from 'react'

function UnMounte() {
 useEffect(()=>{
    console.log("component Mounte");
    return()=>{
        console.log(" components UnMounte");
    }
 },[]);
  return (
    <div>
        <h2>UnMounte</h2>
    </div>
  )
}

export default UnMounte