import axios from "axios";

function Delete(){
    const remove=()=>{
    axios.delete("https://jsonplaceholder.typicode.com/users/1")
    .then(response=>{
        console.log(response.data);
    })
    .catch(error=>{
        console.log(error);
    })
}

    return(
        <div>
            <h2>Delete method</h2>
            <button onClick={remove}>Delete</button>
        </div>
    );
}

export default Delete;