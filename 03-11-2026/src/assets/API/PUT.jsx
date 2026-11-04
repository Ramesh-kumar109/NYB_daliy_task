import axios from 'axios';

function PUT() {

    const updateData=()=>{
        axios.put("https://jsonplaceholder.typicode.com/users/1", {
            id: 1,
            name: "ramesh kumar",
            email: "ramesh.kumar@123.com"
        })
        .then(response=>{
            console.log(response.data);
        })
        .catch(error=>{
            console.log(error);
        })   
    };
  return (
    <div>
        <h2>PUT method</h2>
        <button onClick={updateData}>Update Data</button>
    </div>
  )
}

export default PUT