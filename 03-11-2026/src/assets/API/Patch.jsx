import axios from 'axios'

function Patch() {
const Updates=()=>{
    axios.patch("https://jsonplaceholder.typicode.com/users/1", {
        name: "Jane Doe"
    })
    .then(response=>{
        console.log(response.data);
    })
    .catch(error=>{
        console.log(error);
    })
}
  return (
    <div>
        <h2>Patch method</h2>
        <button onClick={Updates}>Update Data</button>
    </div>
  )
}

export default Patch