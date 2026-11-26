import useFetch from './useFetch'

function Manages() {

    const{data,error,load}=useFetch("https://jsonplaceholder.typicode.com/user");
    if(load) return <p>Loading....</p>
    if(error) return <p>error:{error}</p>
  return (
    <>
       {data.map((data)=>(
        <div key={data.id}>
            <p>{data.name}</p>
        </div>
       ))}
    </>
  )
}

export default Manages