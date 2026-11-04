import { useParams } from 'react-router-dom';

function Student() {
  const { id, name } = useParams();
  return (
    <div>
      <h2>Student Details</h2>
      <p>Student ID: {id}</p>
      <p>Student name: {name}</p>
    </div>
  );
}

export default Student;