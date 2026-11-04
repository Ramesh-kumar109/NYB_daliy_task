import {useEffect,useState} from 'react'

function ErrorState() {
   const [user, setUser] = useState([]);
      const [loading, setLoading] = useState(true);
      const [error, setError] = useState(null);
  
      useEffect(() => {
          async function child() {
              try {
                  const response = await fetch('https://jsonplaceholder.typicode.com/users');
                  const data = await response.json();
                  setUser(data);

                  if(!response){
                    throw new error("failed to fetch data")
                  }
              } catch (error) {
                  setError(error.message);
              } finally {
                  setLoading(false);
              }
          }
  
          child();
      }, []);
  
      if (loading) {
          return <p>Loading...</p>;
      }if(error){
        return <p>error:{error}</p>
      }
  
      return (
          <div>
              <h2>error state</h2>
              {user.map((data) => (
                  <p key={data.id}>{data.name}</p>
              ))}
          </div>
      );
}

export default ErrorState