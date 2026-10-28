import {useState} from "react";
function Child_to_parent(sendName){
      const [name,sendName]=useState("Guest");
    return(
        <div>
            <h2>Name: {name}</h2>
          <button onclick={()=>sendName("Raju")}>Send Name</button>
        </div>
    );
}

export default Child_to_parent;

