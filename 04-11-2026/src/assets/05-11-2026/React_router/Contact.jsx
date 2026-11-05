import { useNavigate } from 'react-router'

function Contact() {
    const navigate=useNavigate();
  return (
    <div>
        <h2>Contact page</h2>
        <h2>welcome Contact page</h2>
        <button onClick={()=>navigate(-1)}>Previous Page</button>
    </div>
  )
}

export default Contact