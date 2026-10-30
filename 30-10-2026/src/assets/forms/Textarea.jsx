import {useState} from "react"
function Textarea(){

    const [message,setMessage]=useState("");
    return(
        <div>
            <h2>FeedBack form</h2>
            <textarea
            rows="5"
            cols="30"
            placeholder="Enter your feedback" 
            onChange={(e)=>setMessage(e.target.value)}
            />
            <h3>your feedback</h3>
            <p>message:{message}</p>
        </div>
    );
}
export  default Textarea;