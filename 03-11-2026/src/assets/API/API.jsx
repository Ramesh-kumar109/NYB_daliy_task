import axios from "axios";
 
 function API() {
    const addUser= ()=>{
        axios.post("https://jsonplaceholder.typicode.com/users",
            {
                name:"ramesh",
                email:"ramesh@123.com",
                phone:"1234567890"
            })
            .then(response=>{
                console.log(response.data);
            })
            .catch(error=>{
                console.log(error);
            })

    }
    return(
        <div>
            <h2>POST Request</h2>
            <button onClick={addUser}>Add User</button>
        </div>
    );
 }

 export default API;