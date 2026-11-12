
import { useReducer } from "react";
import { initialState, CounterReducer } from "../UseReducer/CounterReducer"

function CounterPage() {

    const [state,dispatch]=useReducer(CounterReducer,initialState);
  return (
    <div>
        <h1>count:{state.count}</h1>

        <br />
        <button onClick={() => dispatch({type:"increment"})}>Increment</button>

        <br />
        <br />
        <button onClick={() => dispatch({type:"decrement"})}>Decrement</button>
        <br />
        <br />
        <button onClick={() => dispatch({type:"reset"})}>Reset</button>
    </div>
  )
}

export default CounterPage