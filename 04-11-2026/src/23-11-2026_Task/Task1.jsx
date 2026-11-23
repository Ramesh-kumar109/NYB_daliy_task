import{ useState } from 'react'

function Task1() {
  const [form, setForm] = useState(
    { 
         name: '',
         email: '',
         course: '' 

    });
  const [students, setStudents] = useState([]);

  function handleChange(event) {
    const { name, value } = event.target
    setForm((currentForm) => ({
         ...currentForm, [name]: value 
        }));
  }

  function handleSubmit(event) {
    event.preventDefault()
    setStudents((currentStudents) => [
      ...currentStudents,
      { ...form, id: `${Date.now()}-${Math.random()}` },
    ])
    setForm({ name: '', email: '', course: '' })
  }
    
  // delete the student Details.
  function handleDelete(id) {
    setStudents((currentStudents) =>
      currentStudents.filter((student) => student.id !== id),
    );
  }

  return (
    <div>
      <h2>Student Details</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label>Name:</label>
          <input
            name="name"
            type="text"
            value={form.name}
            onChange={handleChange}
            required 
               />
        </div>
        <div>
          <br />
          
          <label>Email:</label>
          <input id="student-email" 
          name="email" 
          type="email"
           value={form.email}
            onChange={handleChange}
             required />
        </div>
        <br />
        
        <div>
          <label>Course:</label>
          <input id="student-course" 
          name="course" 
          type="text"
          value={form.course}
           onChange={handleChange} 
           required />
        </div>
        <br />
        <button type="submit">Add Student</button>
      </form>

      <h3>Registered Students</h3>
      {students.length > 0 ? (
        <ul>
          {students.map((student) => (
            <li key={student.id}>
              <p>Name:{student.name} Email:{student.email} Course:{student.course}</p>
              <button type="button" onClick={() => handleDelete(student.id)}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      ) : (
        <p>No students registered yet.</p>
      )}
    </div>
  )
}

export default Task1
