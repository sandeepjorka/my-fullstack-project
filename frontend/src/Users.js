import React, { useEffect, useState } from 'react';

const Users = () => {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_BASE_URL}/users`)
      .then(res => res.json())
      .then(data => setUsers(data))
      .catch(err => console.error('Fetch error:', err));
  }, []);

  return (
    <div>
      <h2>👥 Users List</h2>
      <ul>
        {users.map(u => (
          <li key={u.id}>{u.name} - {u.email}</li>
        ))}
      </ul>
    </div>
  );
};

export default Users;

