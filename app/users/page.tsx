import React from "react";

interface User {
  id: number;
  name: string;
  email: string;
}

const UserPage = async () => {
  const res = await fetch(
    "https://jsonplaceholder.typicode.com/users",
    { cache: "no-store" } ///Disable caching for this request, good for dev and testing and fast changing data Makes page non STATIC!
    // { next: { revalidate: 10 } } // Revalidate every 10 seconds
    // { next: { tags: ["users"] } } // Revalidate when the "users" tag is invalidated
  );
  const users: User[] = await res.json();
  return (
    <>
      <h1 className="text-3xl font-bold text-primary">Users</h1>
      <table className="table table-bordered">
        <thead>
          <tr>
            <th className="text-secondary">Name</th>
            <th className="text-secondary">Email</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user) => (
            <tr key={user.id}>
              <td>{user.name}</td>
              <td>{user.email}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
};

export default UserPage;
