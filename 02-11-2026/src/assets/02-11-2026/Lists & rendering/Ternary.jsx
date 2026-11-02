

function Ternary() {
        const Login=false;
    return (
    <div>
        <h2>Ternary Operator using conditional rendering</h2>
        {Login ? <p>Login successfully!</p> : <p>Login failed.</p>}
    </div>
  )
}

export default Ternary