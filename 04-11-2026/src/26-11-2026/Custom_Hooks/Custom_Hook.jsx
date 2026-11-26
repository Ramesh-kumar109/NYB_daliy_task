import useCount from "./useCount"

function Custom_Hook() {

const {count,increment,decrement}=useCount()   

    return (
    <>
    <h2>count:{count}</h2>

    <button onClick={increment}>Increment</button>
    <br />
    <br />
    <button onClick={decrement}>Derement</button>
    
    
    </>
  )
}

export default Custom_Hook