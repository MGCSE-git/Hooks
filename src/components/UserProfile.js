/* eslint-disable no-lone-blocks */
import React, { useEffect, useState } from 'react';

function UserProfile() {
  const [user, setUser] = useState(null);
//  const [users, setUsers] = useState(null);

  useEffect(() => {
    // Simulated API call
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUser(data));
  }, []); // empty dependency = run once when mounted

  return (
    <div>
      {user ? (
        <>
          <h2>{user.name}</h2>
          <p>Email: {user.email}</p>
        </>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
  }
{/*
  useEffect(() => {
    // Simulated API call
    fetch("https://jsonplaceholder.typicode.com/users")
      .then(res => res.json())
      .then(data => setUsers(data));
  }, []); // empty dependency = run once when mounted

  return (
    <div>
        <h2>Top Books on React</h2>
      <ul className="list-group">
        {users.map((user, index) => (
          <li key={index} className="list-group-item">
            <span>{user.name}</span>&nbsp; &nbsp; &nbsp;<span>{user.email}</span>
            
          </li>
        ))}
      </ul>
    </div>
  );
}
*/}
export default UserProfile;
