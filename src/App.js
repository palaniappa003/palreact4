import React, { useState, useEffect } from 'react';
import './App.css';

function App() {
  const [userData, setUserData] = useState([]);

  useEffect(() => {
    // Fetch the user data from the API
    fetch('https://dummyjson.com/users')
      .then((response) => response.json())
      .then((data) => setUserData(data));
  }, []);

  const renderTableRows = () => {
    const rows = [];
    for (let i = 0; i < userData.length; i++) {
      const user = userData[i];
      rows.push(
        <tr key={user.id}>
          <td>{i + 1}</td>
          <td>
            <img src={user.image} alt={`${user.firstName} ${user.lastName}`} width="50" height="50" />
          </td>
          <td>{user.firstName}</td>
          <td>{user.lastName}</td>
          <td>{user.gender}</td>
          <td>{user.email}</td>
          <td>{user.username}</td>
          <td>{user.domain}</td>
          <td>{user.ip}</td>
          <td>{user.university}</td>
        </tr>
      );
    }
    return rows;
  };

  return (
    <div className="App">
      <h1>User Data Table</h1>
      <table>
        <thead>
          <tr>
            <th>S.No</th>
            <th>Image</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Gender</th>
            <th>Email</th>
            <th>Username</th>
            <th>Domain</th>
            <th>IP</th>
            <th>University</th>
          </tr>
        </thead>
        <tbody>{renderTableRows()}</tbody>
      </table>
    </div>
  );
}

export default App;
