import {Link} from 'react-router'

function Page_404() {
  return (
    <div>
      <h2>sorry page not found</h2>
      <Link to="/">Go to home page</Link>
    </div>
  )
}

export default Page_404