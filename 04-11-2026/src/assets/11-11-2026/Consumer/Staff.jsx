import Principal from "./Principal"

function Staff() {
  return (
    <div>
        <Principal.Consumer>
            {(username)=>(
            <h2>Principal calling you man {username}</h2>
        )}
        </Principal.Consumer>
    </div>
  )
}

export default Staff;