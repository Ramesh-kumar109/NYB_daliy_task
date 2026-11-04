
import { useState } from 'react';

function EmptyState() {
  const [users] = useState([]);

  return (
    <div>
      <h2>Empty State</h2>

      {users.length === 0 ? (
        <h3>No user found</h3>
      ) : (
        users.map((user) => (
          <p key={user.id}>{user.name}</p>
        ))
      )}
    </div>
  );
}

export default EmptyState;
