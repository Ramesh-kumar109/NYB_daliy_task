import { useState } from 'react'
import axios from 'axios'

function PATCH_Axios_Method() {
  const [name, setName] = useState('ramesh')
  const [email, setEmail] = useState('ramesh.kumar.a@gmail.com')
  const [load, setLoad] = useState(false)
  const [error, setError] = useState('')

  const handle = async (e) => {
    e.preventDefault()
    setLoad(true)
    setError('')

    try {
      const response = await axios.patch(
        'https://jsonplaceholder.typicode.com/users/1',
        { name, email }
      )
      console.log(response.data)
      alert('Patch successful')
    } catch (err) {
      setError(err.message)
    } finally {
      setLoad(false)
    }
  }

  return (
    <div>
      <h2>PATCH_Method</h2>
      <form onSubmit={handle}>
        <label>1.Enter your name: </label>
        <input
          type="text"
          value={name}
          placeholder="enter your name"
          onChange={(e) => setName(e.target.value)}
        />

        <br />
        <br />
        <label>2.Enter your mail: </label>
        <input
          type="email"
          value={email}
          placeholder="enter your email"
          onChange={(e) => setEmail(e.target.value)}
        />
        <button type="submit" disabled={load}>
          {load ? 'Updating...' : 'patch update'}
        </button>
      </form>
      {load && <p>Loading...</p>}
      {error && <p role="alert">Error: {error}</p>}
    </div>
  )
}


export default PATCH_Axios_Method