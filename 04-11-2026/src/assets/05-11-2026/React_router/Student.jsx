import {useParams} from 'react-router'

function Student() {

    const {id,name}=useParams();
  return (
    <div>
        <h2>student details</h2>
        <h2>Student name:{id}</h2>
        <h2>Student name:{name}</h2>
    </div>
  )
}

export default Student