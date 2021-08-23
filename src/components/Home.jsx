import React, { useContext } from "react";
import { UserContext } from "./UserContext";

const Home = () => {
  const [users, setUsers] = useContext(UserContext);
  console.log(users);
  console.log(setUsers);

  return (
    <div className="container">
      <div className="py-4">
        <h1>Context API</h1>
        <hr />
      </div>
      <div>
        <table class="table border shadow table-striped table-hover">
          <thead>
            <tr class="table-dark">
              <th scope="col">#</th>
              <th scope="col">Name</th>
              <th scope="col">E-mail Address</th>
              <th scope="col">Phone</th>
              <th scope="col">Position</th>
              <th scope="col">Salary</th>
            </tr>
          </thead>
          <tbody>
            {users.map((user, index) => (
              <tr>
                <td>{index + 1}</td>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.position}</td>
                <td>{user.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
