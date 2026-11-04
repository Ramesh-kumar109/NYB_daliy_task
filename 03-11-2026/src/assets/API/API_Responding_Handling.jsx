import { useEffect, useState } from 'react';

function API_Responding_Handling() {
    const [user, setUser] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        async function child() {
            try {
                const response = await fetch('https://jsonplaceholder.typicode.com/users');
                const data = await response.json();
                setUser(data);
            } catch (error) {
                console.log(error);
            } finally {
                setLoading(false);
            }
        }

        child();
    }, []);

    if (loading) {
        return <p>Loading...</p>;
    }

    return (
        <div>
            <h2>API_Responding_Handling in loading state</h2>
            {user.map((data) => (
                <p key={data.id}>{data.name}</p>
            ))}
        </div>
    );
}

export default API_Responding_Handling;