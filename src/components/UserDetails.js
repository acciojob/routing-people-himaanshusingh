import React, { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import "regenerator-runtime/runtime";

function UserDetails() {
  const [user, setUser] = useState(null);
  const { id } = useParams();

  useEffect(() => {
    setTimeout(() => {
      fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
        .then((res) => res.json())
        .then((data) => setUser(data))
        .catch((err) => console.log(err));
    }, 1000);
  }, []);

  return (
    <div>
      {user ? <div>
      <h1>User Details</h1>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Username:</strong> {user.username}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
      <p><strong>Website:</strong> {user.website}</p>
    </div> : <p>Loading...</p>}
    </div>
  ); // prettier-ignore
}

export default UserDetails;
