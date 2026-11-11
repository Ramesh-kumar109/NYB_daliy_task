import {useSelector,useDispatch} from "react-redux"

import{increment,decrement,reset} from "./CreateSlice"

function AccessHome() {
    const count=useSelector((state)=>{
        state.counter.value
    });

    const dispatch = useDispatch();
  return (
    <div>
         <h2>count:{count}</h2>

         <button onClick={()=>dispatch(increment())}>Increment</button>

         <br />
         <br />
         <button onClick={()=>dispatch(decrement())}>Decrement</button>

         <br />
         <br />
         <button onClick={()=>dispatch(reset())}>Reset</button>
    </div>
  )
}
export default AccessHome