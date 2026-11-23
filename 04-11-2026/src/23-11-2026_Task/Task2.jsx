import{ useState } from 'react'

function Header() {
  return <div>
    <h1>Student Details:</h1>

    </div>
}

function Student({ name, course, counter }) {
  return (
    <div>
      <h2>Student Details</h2>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Course:</strong> {course}</p>
      <p><strong>Counter:</strong> {counter}</p>
    </div>
  );
}

function Footer() {
  return <footer>
    <h2>Footer</h2>
    <p>Student details </p>
    </footer>
}

function Task2() {
  const [counter, setCounter] = useState(0);

  return (
    <div>
      <Header />
      <main>
        <Student name="Ramesh Kumar A" course="Computer Science Enginner" counter={counter} />
        <button type="button" 
        onClick={() => setCounter((current) => current + 1)}>Increase counter
        </button>
      </main>
      <Footer />
    </div>
  )
}

export default Task2