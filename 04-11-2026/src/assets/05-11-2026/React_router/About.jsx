import { useNavigate } from 'react-router'

function About() {
    const navigate= useNavigate();
  return (
    <div>
        <h2>about page</h2>
         <h2>welcome About page</h2>
        <button onClick={()=>navigate(-1)}>Previous page</button>

        <button onClick={()=>navigate(1)}>Next Page</button>
    </div>
  )
}

export default About