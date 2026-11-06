import {useRef} from 'react'

function Dom_Reference() {
    const ref= useRef(null);
    function Handle(){
        ref.current.focus();
    }
  return (
    <div>
        <input
        ref={ref} 
        type="text"
        placeholder='Enter your name'
         />

         <button onClick={Handle}>Focus input</button>
    </div>
  )
}

export default Dom_Reference