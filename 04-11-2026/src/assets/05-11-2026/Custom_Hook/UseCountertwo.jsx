import UseCounterone from "./UseCounterone"

function UseCountertwo() {
    const [count,increment]=UseCounterone();
  return (
    <div>
        <h2>count:{count}</h2>
        <button onClick={increment}>Increment</button>
    </div>
  )
}

export default UseCountertwo;