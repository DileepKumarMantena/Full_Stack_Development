import React, { useState, useEffect } from 'react';
import './UserTable.css'; // Import CSS file

const Home = () => {
  const [userList, setUserList] = useState([]);
  const [error, setError] = useState(null);

  useEffect(() => {
    fetch('https://randomuser.me/api/?results=10') 
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        return response.json();
      })
      .then(data => {
        setUserList(data.results);
      })
      .catch(error => {
        setError(error);
      });
  }, []);

  if (error) {
    return <div>Error fetching data from API: {error.message}</div>;
  }

  return (
    <div className="user-table-container"> 
      {userList.length > 0 ? (
        <table className="user-table">
          <thead>
            <tr>
              <th>First Name</th>
              <th>Last Name</th>
              <th>Email</th>
              <th>Gender</th>
              <th>Location</th>
            </tr>
          </thead>
          <tbody>
            {userList.map((user, index) => (
              <tr key={index}>
                <td>{user.name.first}</td>
                <td>{user.name.last}</td>
                <td>{user.email}</td>
                <td>{user.gender}</td>
                <td>
                  {user.location.street.number} {user.location.street.name},{' '}
                  {user.location.city}, {user.location.state},{' '}
                  {user.location.country}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <div>Loading...</div>
      )}
    </div>
  );
};

export default Home;
