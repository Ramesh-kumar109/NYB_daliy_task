
import GrandChild from "./GrandChild"

function Child({name,email}) {
  return (
    <div>
        <h2>child components</h2>
        <GrandChild name={name} email={email}/>
    </div>
  )
}

export default Child