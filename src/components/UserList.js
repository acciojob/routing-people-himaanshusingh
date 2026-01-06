import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import "regenerator-runtime/runtime";

function UserList() {
  const [users, setUsers] = useState(null);

  useEffect(() => {
    (async function () {
      const res = await fetch("https://jsonplaceholder.typicode.com/users");
      const data = await res.json();
      setUsers(data);
    })();
  }, []);

  return (
    <div>
      {users ? (
        <div>
          <h1>User List</h1>
          <ul>
            {users.map((user) => (
              <li key={user.id}>
                <Link to={`/users/${user.id}`}>{user.name}</Link>
              </li>
            ))}
          </ul>
        </div>
      ) : <h2>Loading...</h2>}
    </div>
  ); // prettier-ignore
}

export default UserList;
