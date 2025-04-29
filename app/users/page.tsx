import React from "react";

interface User {
  id: number;
  name: string;
}

const UserPage = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users",
    {cache: "no-store"} ///Disable caching for this request, good for dev and testing and fast changing data Makes page non STATIC! 
    // { next: { revalidate: 10 } } // Revalidate every 10 seconds     
    // { next: { tags: ["users"] } } // Revalidate when the "users" tag is invalidated
  );
  const users: User[] = await res.json();
  return (
    <>
      <h1>Users</h1>
      <p>{new Date().toLocaleTimeString()}</p>
      <ul>        
        {users.map((user) => (
          <li key={user.id}>
            {user.name}
          </li>
        ))}       
      </ul>
    </>
  );
};

export default UserPage;
